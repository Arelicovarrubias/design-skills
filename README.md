# Design Skills

Private Codex plugin repository for reusable design workflows. The repo packages designer-facing skills into one plugin named `Design Skills`, and Codex finds that plugin through this repo's private marketplace file.

## What Is Included

- `plugins/design-skills/`: the Codex plugin bundle.
- `.agents/plugins/marketplace.json`: the repo marketplace entry that makes the plugin visible to Codex.
- `plugins/design-skills/skills/design-critique/`: the first bundled skill, used for structured product design critique.
- `plugins/design-skills/skills/add-design-skill/`: the skill standard for adding or reviewing future skills.

## Designer Install Flow

Designers should not need command-line setup. They only need access to this private GitHub repository.

Before starting, confirm you can open this repository in your browser:

```text
https://github.com/Arelicovarrubias/design-skills
```

If GitHub says you do not have access, ask a maintainer to invite you to the repository first.

Install the plugin in Codex:

1. Open the Codex app.
2. Go to `Plugins`.
3. Click `Add marketplace`.
4. Paste this URL:

   ```text
   https://github.com/Arelicovarrubias/design-skills.git
   ```

5. Confirm or add the marketplace.
6. Find `Design Skills` in the plugin list.
7. Click `Install` or `Add to Codex`.
8. Start a new thread and ask Codex for design help naturally, or explicitly invoke `@design-skills`, `$design-critique`, or `$add-design-skill` where supported.

What is happening behind the scenes: Codex reads `.agents/plugins/marketplace.json` from this repo, then installs the `Design Skills` plugin from `plugins/design-skills/`.

## Maintainer Update Flow

1. Update this repo with skill changes.
2. Bump `plugins/design-skills/.codex-plugin/plugin.json` when changing bundled skills.
3. Open a pull request and merge after review.
4. Tell designers to refresh the marketplace or reinstall `Design Skills` in Codex if the update is not visible.

## Add A Skill

Designers can ask Codex to use `$add-design-skill` and describe the skill idea in plain language. Codex should create the files, prepare the pull request, and ask for review.

## Versioning

Use semantic versions in `plugins/design-skills/.codex-plugin/plugin.json`.

- Patch: wording, metadata, or small workflow edits.
- Minor: new skills or meaningful behavior improvements.
- Major: breaking changes to existing skill behavior or naming.
