import React from 'react'
import { Icon } from './Icon'

export function InsightGrid({ eyebrow, heading, items = [], ...rest }) {
  return (
    <section className="cs-insights" aria-label={heading || 'Research insights'} {...rest}>
      {(eyebrow || heading) ? (
        <div className="cs-insights-header">
          {eyebrow ? (
            <div className="cs-heading-eyebrow">
              <Icon name="lightbulb" size={14} />
              <span>{eyebrow}</span>
            </div>
          ) : null}
          {heading ? <h3 className="cs-insights-title">{heading}</h3> : null}
        </div>
      ) : null}
      <div className="cs-insights-grid">
        {items.map((item, i) => (
          <div className="cs-insight" key={i}>
            <div className="cs-insight-theme">
              {item.icon ? (
                <span className="cs-insight-icon">
                  <Icon name={item.icon} size={20} />
                </span>
              ) : null}
              <h4 className="cs-insight-title">{item.title}</h4>
              {item.bullets ? (
                <ul className="cs-insight-bullets">
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              ) : null}
            </div>
            {item.quotes && item.quotes.length > 0 ? (
              <div className="cs-insight-quotes">
                {item.quotes.map((q, k) => (
                  <div className="cs-insight-quote" key={k}>
                    <Icon name="quote" size={16} className="cs-insight-quote-mark" />
                    <div>
                      <p className="cs-insight-quote-text">{q.text}</p>
                      {q.source ? <span className="cs-insight-quote-src">{q.source}</span> : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
