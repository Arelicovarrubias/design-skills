# Design Skills

Private Codex plugin repository for reusable design workflows. The repo packages designer-facing skills into one workspace-shared plugin named `Design Skills`, so designers can install it from the Codex app instead of using terminal commands.

## What Is Included

- `plugins/design-skills/`: the Codex plugin bundle.
- `.agents/plugins/marketplace.json`: the repo marketplace entry that makes the plugin visible to Codex.
- `plugins/design-skills/skills/design-critique/`: the first bundled skill, used for structured product design critique.

## Designer Install Flow

Designers should not need command-line setup.

1. Open the Codex app.
2. Go to `Plugins`.
3. Open `Shared with you`.
4. Select `Design Skills`.
5. Click `Add to Codex`.
6. Start a new thread and ask Codex for design help naturally, or explicitly invoke `@design-skills` or `$design-critique` where supported.

## Maintainer Sharing Flow

1. Update this repo with skill changes.
2. Bump `plugins/design-skills/.codex-plugin/plugin.json` when changing bundled skills.
3. Install or refresh the plugin in the Codex app.
4. Open the plugin details page.
5. Share it with the workspace or selected organization members.

## Versioning

Use semantic versions in `plugins/design-skills/.codex-plugin/plugin.json`.

- Patch: wording, metadata, or small workflow edits.
- Minor: new skills or meaningful behavior improvements.
- Major: breaking changes to existing skill behavior or naming.
