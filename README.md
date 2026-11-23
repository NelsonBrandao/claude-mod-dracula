# Dracula for Claude

A [Dracula](https://draculatheme.com) theme mod for the Claude desktop and mobile apps. Dark mode uses the classic Dracula palette; light mode uses Alucard, Dracula's official light variant. The theme follows whichever mode the app is in.

## What it changes

- **Surfaces and text**: Dracula's `#282a36` background family and `#f8f8f2` foreground in dark mode; Alucard's cream `#fffbeb` and near-black text in light mode.
- **Accents**: purple, red, green, orange and pink mapped to the app's accent, danger, success, warning and pro roles. In dark mode the fills (unread dots, badges, buttons) are pinned to the true Dracula pastels with dark text on top, instead of the darkened shades the design system would otherwise derive.
- **Git status colors**: added, removed, modified, merged, closed, conflicting and draft.
- **Code blocks**: asks for the `dracula` highlighting theme in dark mode and `github-light` in light mode; the app keeps its own where it doesn't offer one.

The terminal and editor integrations don't draw themes, so this only affects the desktop and mobile apps.

## Install

At the prompt of a Claude Code terminal session:

```
/plugin install dracula --marketplace NelsonBrandao/claude-mod-dracula
```

Answer `y` to add the marketplace, then pick a scope (user scope applies it everywhere).

From a shell:

```bash
claude plugin install dracula --marketplace NelsonBrandao/claude-mod-dracula
```

In the desktop app, where `/plugin` doesn't run: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `NelsonBrandao/claude-mod-dracula`, then **Add plugin**.

## Develop

```bash
claude --plugin-dir /path/to/claude-mod-dracula
```

Colors are built in `hooks/register.ts` with `makeColors` (`hooks/make-colors.js`, copied from Claude Code's plugin-authoring skill). Check a change with:

```bash
claude plugin validate .
```

## License

MIT
