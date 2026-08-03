---
name: ux-workshop-playbook
description: Plan, facilitate, and synthesize UX, product, discovery, alignment, ideation, prioritization, journey-mapping, service-design, and decision workshops. Use when designers ask Codex to turn management scope, vague stakeholder direction, recordings, transcripts, stickies, FigJam/Miro/Mural boards, research notes, or workshop notes into workshop plans, agendas, facilitation guides, visual canvases, methods, tools, synthesized insights, decisions, risks, and next steps.
---

# UX Workshop Playbook

## Overview

Help designers design useful workshops from messy inputs, facilitate them with the right methods and visuals, and synthesize the outputs into insights, decisions, risks, and next actions.

Optimize for workshops that change what the team understands or decides. Avoid workshops when a smaller async review, interview, critique, or decision owner conversation would be more effective.

## Core Workflow

1. Identify the workshop input: management scope, product problem, stakeholder request, existing research, design artifact, board export, sticky notes, recording, transcript, or meeting notes.
2. Clarify the decision or outcome the workshop must produce. Ask only if missing context would materially change the workshop shape.
3. Decide whether a workshop is warranted. If not, recommend the lighter alternative and explain why.
4. Choose the workshop type, methods, tools, participant mix, visual canvases, and outputs.
5. Produce the artifact the designer needs: intake questions, agenda, facilitation script, invite, pre-read, board layout, visualization plan, synthesis plan, insight report, decision log, or stakeholder readout.
6. For post-workshop synthesis, separate evidence, participant opinions, inferred themes, decisions, unresolved questions, and recommended next steps.

## Workshop Modes

Use the relevant references based on the user's ask:

- Use `references/workshop-intake.md` for management scope, vague asks, unclear goals, participant planning, and success criteria.
- Use `references/workshop-method-picker.md` for choosing workshop formats, methods, frameworks, and tools.
- Use `references/visualization-picker.md` when the user needs visuals, canvases, diagrams, maps, matrices, or guidance on what to create.
- Use `references/facilitation-guide.md` for agendas, prompts, timeboxes, facilitation scripts, participant prep, and live capture.
- Use `references/sticky-and-recording-synthesis.md` for reading stickies, board exports, recordings, transcripts, notes, or mixed workshop evidence.
- Use `references/insight-report-template.md` for post-workshop insights, opportunity areas, decision logs, follow-up plans, and stakeholder readouts.

## Input Handling

- If the user provides management scope, translate it into workshop purpose, decisions, constraints, participants, and expected outputs.
- If the user provides recordings or transcripts, extract goals, decisions, disagreements, quotes, themes, risks, and action items. Do not invent quotes.
- If the user provides sticky notes or board exports, cluster stickies by meaning before naming themes. Preserve outliers that may signal risk.
- If the user provides screenshots of boards, read visible text carefully and state any legibility limits.
- If raw audio/video cannot be inspected with available tools, ask for a transcript, notes, or recording summary.

## Visualization Guidance

Recommend visuals only when they will help the team think, decide, or synthesize.

Common visual choices:

- Stakeholder map for influence, roles, or adoption complexity.
- RACI or DACI for unclear ownership or decision rights.
- Journey map for user experience over time.
- Service blueprint for frontstage/backstage process and system complexity.
- Assumption risk matrix for uncertain plans or management scope.
- Impact-effort matrix for prioritization.
- Opportunity solution tree for strategy-to-opportunity alignment.
- Affinity map for messy stickies or qualitative inputs.
- Decision matrix for competing options.
- Roadmap or now/next/later view for follow-up sequencing.

When useful, create the visualization directly in the response using a table, Mermaid diagram, structured canvas, or a board-building plan. Use Figma/FigJam or visualization tools when available and requested.

## Response Shape

For workshop planning requests, return:

- **Situation read**: goal, decision, uncertainty, and why a workshop is or is not useful.
- **Recommended workshop**: workshop type, methods, tools, participants, duration, and output.
- **Agenda**: timed sections with activities, prompts, and facilitation notes.
- **Visuals and materials**: boards, canvases, diagrams, pre-work, and artifacts to create.
- **Capture plan**: what to record during the session so synthesis is easier.
- **After-workshop synthesis plan**: how to process stickies, recordings, decisions, and next steps.

For post-workshop synthesis requests, return:

- **Source inventory**: what inputs were reviewed and any limits.
- **Themes and insights**: clustered themes with evidence, interpretation, and confidence.
- **Decisions and open questions**: what is resolved and what still needs ownership.
- **Risks and tensions**: disagreements, gaps, dependencies, and edge cases.
- **Recommended next steps**: actions, owners, and follow-up artifacts.
- **Stakeholder readout**: concise summary suitable for sharing.

## Standards

- Start from the decision or learning goal, not from a favorite workshop activity.
- Keep workshops as small as possible while still including decision owners and necessary expertise.
- Choose methods based on uncertainty, collaboration need, power dynamics, and available evidence.
- Make outputs concrete enough to use immediately.
- Separate what participants said from what Codex infers.
- Treat management scope as an input to clarify, not as proof of the right solution.
- Protect sensitive workshop content. Do not expose unnecessary participant names or confidential details in synthesized outputs.

## Example Prompts

- "Use $ux-workshop-playbook to plan a workshop from this management scope."
- "Help me choose the right workshop method and tools for this stakeholder alignment problem."
- "Create a FigJam board structure for an assumption-mapping workshop."
- "Tell me which visualization to create for this messy workflow problem."
- "Turn these stickies into themes, insights, and next steps."
- "Analyze this transcript and create a workshop insight report."
- "Create a facilitation guide for a journey-mapping workshop."
