# CS501 — AI Ethics & Governance

## Simple Activity Plan

**Activities:** 4  
**Sub-activities:** 28  
**Total Target Hours:** 120

## Thinking Skill Tags

- **Understand Core Ideas**
- **Apply Principles**
- **Analyse the Problem**
- **Review and Justify**
- **Design and Build**

## Evaluation Scale

- **Needs Revision:** The work is incomplete, unclear, unsafe or unsupported by evidence.
- **Meets Standard:** The work is correct, traceable and satisfies the stated evaluation standard.
- **Exceeds Standard:** The work includes independent checking, justified decisions and measurable improvement.

---

## Activity 1 — Build a Fairness Auditor

**Unit:** Quantifying Bias  
**Activity ID:** CS501-ACT-01  
**Target Hours:** 30  
**Outcome:** Check whether an AI model treats different groups fairly and test practical ways to reduce unfair outcomes.

| ID | Sub-activity | Hrs | Thinking Skill Tag | Required Evidence | Evaluation Standard | Resources |
|---|---|---:|---|---|---|---|
| CS501-SUB-1.1 | Learn the Basics of AI Fairness | 3 | Understand Core Ideas | Short notes explaining protected groups, fairness and common sources of bias | Explains why overall accuracy alone cannot prove that a model is fair | R01, R02 |
| CS501-SUB-1.2 | Check Group Results | 2 | Apply Principles | Table comparing selection rates and model results across groups | Calculates group-level results correctly and avoids unsupported conclusions | R01 |
| CS501-SUB-1.3 | Compare Model Errors | 4 | Analyse the Problem | False-positive and false-negative comparison across groups | Identifies where errors are concentrated and explains who may be affected | R01, R03 |
| CS501-SUB-1.4 | Build the Fairness Auditor | 9 | Design and Build | Working notebook or application, dataset description, fairness metrics and tests | Auditor produces repeatable group and error comparisons from documented data | R01, R02 |
| CS501-SUB-1.5 | Test Bias-Reduction Methods | 4 | Apply Principles | Before-and-after comparison for at least one mitigation method | Shows whether fairness improved and records any accuracy or operational trade-off | R01, R02 |
| CS501-SUB-1.6 | Review and Defend the Findings | 4 | Review and Justify | Review notes, presentation and response to questions | Student explains metric choice, limitations and possible impact on affected groups | R01, R09 |
| CS501-SUB-1.7 | Improve and Finalise the Audit | 4 | Design and Build | Corrected analysis, final report and limitations statement | Review findings are addressed and claims remain traceable to data and calculations | R01, R02 |
|  | **Activity total** | **30** |  |  |  |  |

---

## Activity 2 — Build a Model Interpreter

**Unit:** Explainable AI  
**Activity ID:** CS501-ACT-02  
**Target Hours:** 30  
**Outcome:** Explain which inputs influenced an AI decision and communicate the explanation clearly to technical and non-technical users.

| ID | Sub-activity | Hrs | Thinking Skill Tag | Required Evidence | Evaluation Standard | Resources |
|---|---|---:|---|---|---|---|
| CS501-SUB-2.1 | Learn Why AI Explanations Matter | 3 | Understand Core Ideas | Notes comparing global and individual explanations | Explains what each type of explanation can and cannot show | R04, R05 |
| CS501-SUB-2.2 | Check Important Features | 2 | Apply Principles | Feature-importance output for a selected model | Identifies influential features without presenting importance as proof of causation | R04 |
| CS501-SUB-2.3 | Explain One Prediction | 4 | Analyse the Problem | Local explanation for one correct and one incorrect prediction | Connects the model output to relevant inputs and identifies misleading explanations | R04, R06 |
| CS501-SUB-2.4 | Build the Model Interpreter | 9 | Design and Build | Working explanation interface with text, table or visual output | Interface provides repeatable explanations and identifies the model, version and input used | R04, R05, R06 |
| CS501-SUB-2.5 | Test Visual and Text Explanations | 4 | Apply Principles | Feature plot, image attention map or token-influence view appropriate to the model | Explanation is readable, technically appropriate and does not hide uncertainty | R04, R05 |
| CS501-SUB-2.6 | Review and Defend the Explanation | 4 | Review and Justify | User-review notes, presentation and technical defence | Student explains the method, limitations, stability and intended audience | R04, R09 |
| CS501-SUB-2.7 | Improve the Explanation Experience | 4 | Design and Build | Revised interface, plain-language summary and limitations note | Feedback is resolved and the final explanation is understandable without overstating certainty | R04, R05 |
|  | **Activity total** | **30** |  |  |  |  |

---

## Activity 3 — Conduct an AI Red Team Exercise

**Unit:** Security and Adversarial AI  
**Activity ID:** CS501-ACT-03  
**Target Hours:** 30  
**Outcome:** Test how an AI system responds to manipulated inputs, unsafe training data and personal information, then recommend practical safeguards.

| ID | Sub-activity | Hrs | Thinking Skill Tag | Required Evidence | Evaluation Standard | Resources |
|---|---|---:|---|---|---|---|
| CS501-SUB-3.1 | Learn Common AI Security Risks | 3 | Understand Core Ideas | Threat notes covering adversarial inputs, poisoning, privacy and misuse | Correctly explains the selected threats and keeps testing within an approved safe environment | R07, R08 |
| CS501-SUB-3.2 | Prepare a Safe Test Plan | 2 | Review and Justify | Approved scope, rules, test cases and rollback plan | Defines clear boundaries, avoids real-world harm and protects sensitive information | R07, R09 |
| CS501-SUB-3.3 | Test Manipulated Inputs | 4 | Analyse the Problem | Controlled adversarial examples and model-response comparison | Demonstrates a reproducible weakness without targeting real users or external systems | R07, R08 |
| CS501-SUB-3.4 | Run the Red Team Exercise | 9 | Design and Build | Test harness, execution logs, attack scenarios and risk register | Exercise covers approved threats, records results and avoids destructive or unauthorized actions | R07, R08 |
| CS501-SUB-3.5 | Check Data Poisoning and Privacy | 4 | Analyse the Problem | Poisoning scenario, personal-data test and filtering evidence | Identifies unsafe data and demonstrates appropriate validation or redaction controls | R08, R10 |
| CS501-SUB-3.6 | Present Risks and Defend Safeguards | 4 | Review and Justify | Findings report, live demonstration and response to questions | Risks are prioritized by evidence and recommended controls are practical and proportionate | R07, R09 |
| CS501-SUB-3.7 | Fix and Retest the System | 4 | Design and Build | Corrected implementation and before-and-after security results | High-priority findings are addressed and regression tests confirm the improvement | R07, R08 |
|  | **Activity total** | **30** |  |  |  |  |

---

## Activity 4 — Build an AI Compliance Dashboard

**Unit:** Compliance and Governance  
**Activity ID:** CS501-ACT-04  
**Target Hours:** 30  
**Outcome:** Record an AI system's purpose, risk, controls, limitations and human oversight using recognized governance guidance.

| ID | Sub-activity | Hrs | Thinking Skill Tag | Required Evidence | Evaluation Standard | Resources |
|---|---|---:|---|---|---|---|
| CS501-SUB-4.1 | Learn Responsible AI Governance | 3 | Understand Core Ideas | Notes comparing the EU AI Act, NIST AI RMF and OECD AI Principles | Explains the purpose of governance, risk management, transparency and human oversight in simple terms | R11, R09, R12 |
| CS501-SUB-4.2 | Classify the AI System's Risk | 2 | Analyse the Problem | Educational risk-classification worksheet with stated assumptions | Uses the selected framework consistently and clearly marks uncertainty and required expert review | R11, R09 |
| CS501-SUB-4.3 | Create the Model Card | 4 | Apply Principles | Model card covering purpose, data, performance, limits and intended users | Document is complete, understandable and does not hide known limitations or unsuitable uses | R13 |
| CS501-SUB-4.4 | Build the Compliance Dashboard | 9 | Design and Build | Working dashboard, control register, evidence links and version history | Dashboard shows system owner, risk, controls, evidence, open issues and review status clearly | R11, R09 |
| CS501-SUB-4.5 | Add Human Review and Stop Controls | 4 | Design and Build | Human-review flow, override control and audit-log evidence | Authorized humans can review, pause or override the AI and all actions are traceable | R11, R09 |
| CS501-SUB-4.6 | Conduct the Governance Review | 4 | Review and Justify | Review minutes, gap list and decision record | Student identifies missing evidence, unresolved risk and ownership before approval | R11, R09, R12 |
| CS501-SUB-4.7 | Improve and Publish the Governance Record | 4 | Design and Build | Updated dashboard, closed findings and approved governance summary | Findings are resolved or formally accepted, and the published record is clear and versioned | R11, R09 |
|  | **Activity total** | **30** |  |  |  |  |

---

## Learning Resource Catalogue

| ID | Learning Resource |
|---|---|
| R01 | [Fairlearn Documentation](https://fairlearn.org/main/) |
| R02 | [AI Fairness 360 Documentation](https://aif360.readthedocs.io/en/stable/) |
| R03 | [scikit-learn — Model Evaluation](https://scikit-learn.org/stable/modules/model_evaluation.html) |
| R04 | [SHAP Documentation](https://shap.readthedocs.io/) |
| R05 | [Captum Documentation](https://captum.ai/) |
| R06 | [LIME Repository and Documentation](https://github.com/marcotcr/lime) |
| R07 | [MITRE ATLAS](https://atlas.mitre.org/) |
| R08 | [OWASP Machine Learning Security Top 10](https://owasp.org/www-project-machine-learning-security-top-10/) |
| R09 | [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) |
| R10 | [Microsoft Presidio Documentation](https://microsoft.github.io/presidio/) |
| R11 | [Regulation (EU) 2024/1689 — Artificial Intelligence Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng) |
| R12 | [OECD AI Principles](https://oecd.ai/en/ai-principles) |
| R13 | [Model Cards for Model Reporting](https://research.google/pubs/model-cards-for-model-reporting/) |

> The compliance exercises are educational and do not replace legal, regulatory or institutional review. The EU AI Act reference should be checked against the current consolidated text when the Activity is delivered.

> Target hours are indicative learning-effort estimates. They must not be interpreted as attendance, which remains managed exclusively in DUK@360.
