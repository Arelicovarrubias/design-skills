---
name: uxd-testing
description: Create, QA, launch-check, and summarize UXD Lyssna usability tests, including Thermo Fisher Scientific product context, question/script review, results-to-report synthesis, actual-customer branded testing safeguards, and UXD lead workflows such as briefs, backlog triage, and sharing-session summaries.
---

# UXD Testing

## Overview

Help designers and UXD Testing leads plan, review, launch, and summarize Lyssna usability tests with consistent quality. Use this skill for UXD testing prep, Lyssna script drafting, question QA, launch readiness, result reporting, customer-facing branded test planning, project briefs, weekly backlog triage, and sharing-session summaries.

Default operating context:

- Organization context is Thermo Fisher Scientific.
- Default to unbranded stimuli unless the user explicitly requests branded work.
- Default to open-panel recruitment unless the user explicitly requests closed, internal, or actual-customer recruitment.
- Keep test language neutral, short, plain, and UI-focused.
- Do not fabricate product details, participant criteria, compliance status, or success metrics.

## Reference Files

Use these references as the source of truth:

- `references/designer-lyssna-workflow.md` for designer-facing Lyssna planning, QA, readiness, branded actual-customer rules, sample sizes, scripts, launch gates, and result reporting.
- `references/uxd-lead-workflows.md` for UXD Testing lead briefs, weekly backlog triage, sharing-session summaries, and naming conventions.

Read the relevant reference before producing a detailed output. If the user asks for a broad end-to-end workflow, use both references.

## Workflow

1. Identify the request mode: test brief, test design, Lyssna-ready script, question QA, missing requirements check, launch gate, results report, actual-customer branded planning, backlog triage, or sharing-session summary.
2. Pull required context from the prompt, attached files, Figma links, Lyssna exports, raw notes, or backlog tables.
3. For test planning or QA, classify the request into one primary Thermo Fisher product type: instruments and hardware, software and digital tools, reagents and consumables, services and support workflows, or cross-portfolio/multi-step lab workflow.
4. If critical details are missing, list them in a concise "Need Before Launch" checklist and continue with a best-effort draft using explicit assumptions.
5. Apply the default testing rules: three core tasks when possible, maximum 10-minute test length, one user intent per task, measurable success criteria, neutral wording, and minimal open-ended questions unless there is a defined analysis plan.
6. If actual Thermo Fisher customers and original branded design options are involved, run the actual-customer branded criteria before recommending a method or launch gate.
7. Return the output shape that matches the request mode. Do not force every request into the same template when the user only needs one part of the workflow.

## Designer Output Shapes

For Lyssna test design, script drafting, or QA, return:

1. Intake Completeness Check
2. Recommended Test Design
3. Lyssna-Ready Script
4. QA Risk Check
5. Launch Gate
6. Reporting Shell
7. Mode and Criteria Check, only when actual Thermo Fisher customers and branded/original designs are in scope

For results synthesis, return:

1. Executive Summary
2. Study Snapshot
3. Key Findings
4. Patterns and Root Causes
5. Prioritized Actions
6. Decision Support
7. Appendix
8. Optional Deliverables, when requested

For missing requirements checks, return a concise checklist grouped by critical inputs, Thermo Fisher alignment, recruitment, quality gate, dependencies, and launch decision.

## UXD Lead Output Shapes

For project-call briefs, return test overview, objectives and hypotheses, scope and constraints, asset checklist, risks and mitigations, follow-up agenda, and action plan.

For weekly backlog triage, return tests to run, tests to defer, teams with zero-test backlog, prioritization rationale, capacity plan, outreach drafts, and a call agenda.

For sharing-session summaries, return a one-page summary, cross-test insights, reusable best practices, next-cycle recommendations, and a 5-minute presentation script.

## Standards

- Keep tasks under 45 words.
- Avoid leading words such as "easy", "intuitive", "obvious", or "correct".
- Avoid double-barreled questions and multi-step task wording.
- Ask questions that test the product experience, not the participant's ability.
- Prefer closed-ended follow-ups for agile Lyssna tests.
- Use open-ended questions only when there is a specific coding or analysis plan.
- For two or more viable UI options, suggest variation testing and name what decision the comparison will resolve.
- For conflicting A/B signals, report the winner by metric instead of declaring one overall winner.
- Include exact actions needed to move a launch gate up one level.

## Example Prompts

- "Use $uxd-testing to QA this Lyssna test before launch."
- "Use $uxd-testing to turn these project call notes into a test brief."
- "Use $uxd-testing to build a Lyssna-ready script from this intake."
- "Use $uxd-testing to summarize these Lyssna results into a report draft."
- "Use $uxd-testing to triage this week's UXD testing backlog."
