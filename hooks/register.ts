import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

export const { theme, problems } = makeColors({
  label: 'Dracula',
  roles: { accent: '#bd93f9', danger: '#ff5555', success: '#50fa7b', warning: '#ffb86c', pro: '#ff79c6' },
  codeTheme: { dark: 'dracula', light: 'github-light' },
  light: {
    roles: { accent: '#644ac9', danger: '#cb3a2a', success: '#14710a', warning: '#a34d14', pro: '#a3144d' },
    gray: {
      anchors: {
        'surface-0': '#f3eed9',
        'surface-1': '#fffbeb',
        'surface-2': '#fffdf5',
        'surface-3': '#fffdf5',
        'text-primary': '#1f1f1f',
        'text-secondary': '#3f3b55',
        'text-muted': '#635d97',
      },
    },
    git: {
      added: '#14710a',
      removed: '#cb3a2a',
      modified: '#a34d14',
      merged: '#644ac9',
      closed: '#cb3a2a',
      conflicting: '#846e15',
      draft: '#635d97',
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#21222c',
        'surface-1': '#282a36',
        'surface-2': '#2d2f3d',
        'surface-3': '#343746',
        'text-primary': '#f8f8f2',
        'text-secondary': '#d6d6e0',
        'text-muted': '#9ba5d0',
      },
    },
    git: {
      added: '#50fa7b',
      removed: '#ff5555',
      modified: '#ffb86c',
      merged: '#bd93f9',
      closed: '#ff5555',
      conflicting: '#f1fa8c',
      draft: '#9ba5d0',
    },
  },
})

// The design system darkens role fills to suit white text, which turns Dracula's pastels muddy, so pin the real ones with dark text on top.
Object.assign(theme.inputs.dark ?? {}, {
  'role-accent-fill': '#bd93f9',
  'role-accent-fill-hover': '#c9a6fb',
  'role-accent-on': '#21222c',
  'role-danger-fill': '#ff5555',
  'role-danger-fill-hover': '#ff6e6e',
  'role-danger-on': '#21222c',
  'role-pro-fill': '#ff79c6',
  'role-pro-fill-hover': '#ff8fd0',
  'role-pro-on': '#21222c',
  'role-success-fill': '#50fa7b',
  'role-success-fill-hover': '#69fb8e',
  'role-success-on': '#21222c',
})

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
