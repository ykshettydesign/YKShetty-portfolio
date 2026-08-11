import React from 'react'

function Arrow() {
  return (
    <svg className="cs-wf-arrow" width="32" height="20" viewBox="0 0 32 20" fill="none" aria-hidden="true">
      <path d="M0 10h26m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Step({ label, sub, tone }) {
  return (
    <div className="cs-wf-step-wrap">
      <div className={`cs-wf-step cs-wf-step--${tone}`}>
        <span>{label}</span>
      </div>
      {sub ? <span className="cs-wf-step-sub">{sub}</span> : null}
    </div>
  )
}

export function WorkflowComparison({ old: oldFlow, new: newFlow }) {
  return (
    <div className="cs-wf-comparison">
      {/* Old workflow */}
      <div className="cs-wf-panel cs-wf-panel--old">
        <span className="cs-wf-badge cs-wf-badge--old">Old Workflow</span>
        <div className="cs-wf-content">
          <div className="cs-wf-flow">
            {oldFlow.steps.map((step, i) => (
              <React.Fragment key={i}>
                {i > 0 ? <Arrow /> : null}
                <Step label={step.label} sub={step.sub} tone={step.tone} />
              </React.Fragment>
            ))}
          </div>
          {oldFlow.note ? <p className="cs-wf-note">{oldFlow.note}</p> : null}
        </div>
      </div>

      {/* New workflow */}
      <div className="cs-wf-panel cs-wf-panel--new">
        <span className="cs-wf-badge cs-wf-badge--new">New Workflow</span>
        <div className="cs-wf-content">
          <div className="cs-wf-new-layout">
            <div className="cs-wf-flow">
              {newFlow.steps.map((step, i) => (
                <React.Fragment key={i}>
                  {i > 0 ? <Arrow /> : null}
                  <Step label={step.label} sub={step.sub} tone={step.tone} />
                </React.Fragment>
              ))}
            </div>
            {newFlow.eliminated ? (
              <div className="cs-wf-eliminated">
                <h4 className="cs-wf-eliminated-title">What was eliminated</h4>
                <ul className="cs-wf-eliminated-list">
                  {newFlow.eliminated.map((item, i) => (
                    <li key={i}><span className="cs-wf-x">&times;</span> {item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
