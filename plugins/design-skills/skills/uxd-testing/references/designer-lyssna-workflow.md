# Designer Lyssna Workflow

Use this reference as the source of truth for designer-facing UXD testing work in Lyssna.

## Designer Workflow

1. Collect the intake.
2. Check missing requirements.
3. Recommend the test method and sample size.
4. Draft or revise the Lyssna instructions, tasks, and questions.
5. Run QA against clarity, neutrality, task realism, cognitive load, objective alignment, accessibility/readability, product-type alignment, and decision usefulness.
6. Set a Green, Yellow, or Red launch gate.
7. After responses are available, turn raw outputs into an evidence-based report.

## Required Intake

- Requestor name
- Team or product area
- Primary Thermo Fisher product type
- Feature or concept being tested
- Test objective, written as one sentence
- Key decisions this test should inform
- Participant profile
- Preferred method: first click, five-second, preference, prototype, survey, card sort, or tree test
- Assets, including Figma link and whether an unbranded asset is ready
- Draft instructions, if any
- Draft questions or tasks, if any
- Timeline or decision deadline
- Compliance or legal constraints
- Known terminology that must be used
- Recruitment choice, defaulting to open panel
- Success criteria for what result is good enough

Critical fields are objective, participant profile, method, assets, and success criteria. If any are missing, create a "Need Before Launch" checklist first and continue with explicit assumptions.

## Default Rules

- Default to unbranded stimuli unless the user explicitly requests branded stimuli.
- Default to open-panel recruitment unless the user explicitly requests closed, internal, or actual-customer recruitment.
- Keep the total Lyssna test under 10 minutes.
- Aim for three core tasks per test.
- If more than four tasks are needed, flag the test for UXD lead review before launch.
- Keep each task under 45 words.
- Use one user intent per task.
- Keep wording simple and clear.
- Avoid internal jargon unless required terminology is documented.
- Avoid leading words such as "easy", "intuitive", "obvious", or "correct".
- Avoid double-barreled questions.
- Avoid asking questions that make participants feel tested. The test evaluates the product, not the person.
- Avoid open-ended questions unless there is a specific analysis or coding plan.

## Thermo Fisher Product-Type Guardrail

Before generating test content, classify the request into one primary product type and one optional secondary type:

- Instruments and hardware
- Software and digital tools
- Reagents and consumables
- Services and support workflows
- Cross-portfolio or multi-step lab workflow

Adapt script style:

- Instruments and hardware: focus on setup, operation intent, maintenance expectations, and confidence signals.
- Software and digital tools: focus on navigation, terminology, discoverability, and task completion.
- Reagents and consumables: focus on selection confidence, compatibility understanding, and decision clarity.
- Services and support workflows: focus on expectation setting, process clarity, and trust indicators.
- Cross-portfolio workflows: focus on handoffs, sequence clarity, and decision points across steps.

If product type is unclear, ask one concise clarification question. If no answer is available, proceed with "Software and digital tools" and mark the assumption.

## Method And Sample Guidance

Use these sample-size ranges when planning:

| Method | Recommended Sample Size | Per Variation |
| --- | --- | --- |
| Usability test - prototype | 8-10 participants | |
| Navigation test | 10 participants | |
| First click test or preference test | 20-30 participants | |
| Survey | Not specified in Lyssna methods-at-a-glance table | 20-50 |
| Card sorting | 15-30 participants | |

Source noted in the original packet: Lyssna, "Usability testing methods at a glance", https://www.lyssna.com/guides/usability-testing-guide/usability-testing-methods/

## Recommended Test Design

Return:

- Why the method fits the objective
- Suggested participant count range
- Core task sequence, usually 3-6 tasks
- Metrics to track, such as success, time, confidence, misclicks, confusion points, and preference signal
- Variation test suggestion when relevant

Recommend variation testing when there are two or more viable UI options, the key decision is comparative, or the team needs stronger signal on why users prefer one option. Suggest unmoderated first-click or preference testing for fast directional signal, or moderated think-aloud follow-up for deeper qualitative insight.

Before finalizing recommendations, ask: "Do you want an additional UI review before launch using Laws of UX (https://lawsofux.com/) or a heuristic evaluation?"

If the user says yes, include prioritized UI findings and fixes.

## Lyssna-Ready Script Format

Provide copy/paste blocks with:

1. Study intro
2. Participant context prompt
3. Task blocks
4. Post-task confidence question
5. Wrap-up question

Keep instructions neutral and preserve the designer's intent unless a change is needed for clarity, neutrality, realism, or objective alignment.

## QA Scorecard

Score each category from 0-5:

- Clarity
- Neutrality
- Task realism
- Cognitive load
- Alignment to objective
- Accessibility/readability
- Product-type alignment
- Decision usefulness

Then list issues with:

- Severity: High, Medium, or Low
- Original text
- Problem
- Fix or improved version

Catch double-barreled questions, leading language, vague success criteria, jargon, too many steps per task, missing context, unclear scenario framing, and questions that do not map to the objective or decision.

## Launch Gate Rubric

- Green: no High issues and success criteria are measurable.
- Yellow: at least one Medium issue or an unclear criterion.
- Red: any High issue in clarity, neutrality, or objective alignment, or one or more critical blockers.

Include exact actions required to move up one gate level.

## Actual Thermo Fisher Customer And Branded Design Rules

Use this protocol when the study includes real Thermo Fisher Scientific customers and original branded concepts, such as Option A vs Option B.

Required criteria before planning:

- Business rationale for branded or original designs is documented.
- Stakeholder owner for customer-facing risk decisions is assigned.
- Compliance and legal constraints are reviewed and documented.
- Sensitive product or roadmap details are screened.
- Recording and transcript permissions are confirmed.
- Single-wave vs multi-wave plan is confirmed.

Required intake fields:

- Test mode: moderated or unmoderated
- Design options: Option A and Option B, with optional control
- Comparison goal: preference, comprehension, task success, trust, or decision confidence
- Customer segment criteria: role, product familiarity, geography, and language
- Risk level: low, medium, or high
- Incentive and recruitment plan

Choose moderated testing when the team needs deep reasoning, terminology or trust interpretation is critical, risk is medium/high, or the workflow is complex or sensitive. Moderated sessions should use 5-8 participants per key segment per wave, run 30-45 minutes maximum, use a semi-structured script with fixed core tasks and limited probes, probe confidence and rationale without leading, and capture evidence in a structured table.

Choose unmoderated testing when the team needs faster scale on clear UI behaviors, stimulus is stable, questions can be mostly closed-ended, and success metrics are measurable. Unmoderated tests should use 20-40 participants per segment for directional Option A/B signal, stay under 10 minutes, target three core tasks, prefer closed-ended follow-ups, and include one response-quality check when appropriate.

For multi-wave testing:

- Wave 1: unmoderated directional signal
- Wave 2: moderated deep dive on unresolved risks
- Wave 3, optional: validation run on revised design

Stop and reuse repository evidence if prior reports already answer the same decision.

For Option A/B comparisons:

- Keep task wording identical across options.
- Randomize option order when possible.
- Track success, time, confidence, and preference.
- If signals conflict, report winner by metric instead of one overall winner.

## Reporting Shell

For report scaffolding during test prep, generate:

- Executive summary placeholder
- Top findings table: Finding, Evidence, Impact, Recommendation, Owner
- Launch recommendation section
- Open questions section

## Results-To-Report Structure

When raw Lyssna data, exports, observations, or notes are provided, build a report with:

1. Executive Summary, maximum 120 words
2. Study Snapshot: objective, method, participants, and date
3. Key Findings, top five, with title, evidence, impact, recommendation, and owner
4. Patterns and Root Causes
5. Prioritized Actions: P0, P1, and P2
6. Decision Support: ready to launch yes/no/conditional, plus what must be true before launch
7. Appendix: notable participant quotes and open questions for follow-up
8. Optional Deliverables when requested: slide outline, Confluence-ready documentation, designer version, leadership version, or stakeholder-ready presentation draft

Tone must be neutral, evidence-based, actionable, and careful not to over-claim confidence.

## Repository References

Use these Thermo Fisher Scientific repositories only as references when the user asks for repository evidence or gives access/context:

- LDA Repository: https://thermofisher.sharepoint.com/sites/LDA-Digital-UX/LDA%20Report%20repository/Forms/AllItems.aspx
- DPE Repository: https://thermofisher.sharepoint.com/sites/DPE/Testing%20%20Research%20Library/Forms/AllItems.aspx?OR=Teams%2DHL&CT=1739391702296&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNDEyMDEwMDIyMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&sortField=Modified&isAscending=false&viewid=f6b59d88%2D8f4c%2D40a8%2Dafa1%2D702b293edad6&noAuthRedirect=1
