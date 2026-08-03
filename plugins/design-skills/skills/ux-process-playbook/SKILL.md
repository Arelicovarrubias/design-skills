---
name: ux-process-playbook
description: Plan lightweight UX processes, discovery activities, research validation, design critique sessions, workshops, synthesis, handoff, and stakeholder communication. Use when designers ask Codex to turn vague product asks, feature ideas, research needs, messy feedback, team rituals, or design delivery work into practical UX plans, agendas, checklists, scripts, decision logs, or updates.
---

# UX Process Playbook

## Overview

Help UX designers choose the smallest useful process for the situation and produce artifacts that make the work easier to run with product, engineering, research, and leadership partners.

Prioritize practical momentum over process performance. Make the next step clear, right-sized, evidence-aware, and easy to explain.

## Core Workflow

1. Identify the design situation from the prompt, attached artifacts, research notes, product context, or repo files.
2. Classify the process need:
   - Discovery: clarify problem, audience, goals, constraints, assumptions, and risks.
   - Validation: plan research, usability testing, concept evaluation, or evidence gathering.
   - Alignment: create workshop agendas, decision points, tradeoff framing, or stakeholder updates.
   - Critique: structure review of flows, screens, prototypes, content, or design-system fit.
   - Synthesis: turn notes, feedback, or findings into themes, insights, opportunities, and decisions.
   - Handoff: prepare engineering-ready specs, states, acceptance criteria, and QA checks.
   - Ritual improvement: improve recurring UX practices such as critique, discovery intake, research readouts, or design QA.
3. Ask a clarifying question only when the missing answer would materially change the process. Otherwise state assumptions briefly and proceed.
4. Choose the smallest method set that addresses the highest uncertainty or collaboration risk.
5. Produce the requested artifact in a reusable format. Include owner, timing, inputs, outputs, and decision points when useful.
6. Call out tradeoffs, evidence gaps, and what to do next. Avoid generic UX advice and heavyweight ceremonies unless the situation demands them.

## Method Selection

Use `references/method-picker.md` when the user asks what UX activity to run, how to sequence work, or how to choose between research, critique, workshop, QA, or handoff activities.

Default selection rules:

- If the problem is unclear, start with discovery framing before design production.
- If the audience or user need is uncertain, gather evidence before evaluating UI quality.
- If the concept is risky but cheap to change, run concept validation before detailed design.
- If the flow exists and task success is uncertain, run usability testing or heuristic review.
- If feedback is scattered or political, structure critique or decision framing before redesigning.
- If engineering is waiting, focus on handoff clarity, states, edge cases, and acceptance criteria.
- If time is short, compress the process to the riskiest assumption and one artifact that moves the team forward.

## Response Shape

Match the output to the user's request. For open-ended planning requests, use this order:

- **Situation read**: one short paragraph naming the goal, uncertainty, and process risk.
- **Recommended approach**: the smallest useful sequence of activities.
- **Plan**: steps with timing, participants, inputs, outputs, and decision points.
- **Artifact**: the ready-to-use plan, agenda, checklist, script, rubric, update, or decision log.
- **Tradeoffs**: what this approach covers, what it does not cover, and how to adjust if timeline or evidence changes.
- **Next move**: the first concrete action the designer should take.

## Reference Guide

- Use `references/method-picker.md` for choosing activities and sequencing UX process.
- Use `references/discovery-plan-template.md` for vague stakeholder asks, early feature framing, or opportunity discovery.
- Use `references/research-plan-template.md` for usability tests, concept tests, interview plans, or lightweight validation.
- Use `references/critique-rubric.md` for design critique agendas and structured review prompts.
- Use `references/workshop-agendas.md` for alignment, assumption mapping, journey mapping, prioritization, and design studio sessions.
- Use `references/synthesis-patterns.md` for turning notes, research, critique, or feedback into themes and decisions.
- Use `references/handoff-checklist.md` for engineering handoff, design QA, edge cases, and acceptance criteria.
- Use `references/stakeholder-updates.md` for concise updates, decision framing, risks, and asks.

## Standards

- Keep outputs designer-ready and team-readable.
- State assumptions when context is thin.
- Prefer one strong plan over a menu of generic options unless the user asks to compare options.
- Tailor process weight to timeline, risk, team maturity, and decision urgency.
- Separate evidence, inference, and recommendation.
- Include concrete artifacts, not only advice.
- Avoid research theater, workshop theater, and elaborate frameworks that do not change the decision or outcome.

## Example Prompts

- "Use $ux-process-playbook to plan the UX process for this feature."
- "Turn this vague stakeholder ask into a discovery plan."
- "Help me decide whether we need usability testing, critique, or a workshop."
- "Create a design critique agenda for this flow."
- "Make a lightweight research plan for validating this concept."
- "Help me improve our design handoff process."
- "Draft a stakeholder update explaining our UX plan and risks."
