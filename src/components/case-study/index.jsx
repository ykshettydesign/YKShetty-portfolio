/* ============================================================
   CASE-STUDY MODULE KIT — public surface
   ------------------------------------------------------------
   Every reusable content block a case study composes from. Import
   named modules in an .mdx file, or rely on `mdxComponents` (passed
   to <MDXProvider>) to style raw markdown (##, ###, loose paragraphs).
   ============================================================ */
import React from 'react'
import { SectionHeading, SubHeading } from './SectionHeading'

export { OutcomeBand } from './OutcomeBand'
export { Prose } from './Prose'
export { PullQuote } from './PullQuote'
export { ImageFigure } from './ImageFigure'
export { PrototypeShowcase } from './PrototypeShowcase'
export { HeroShowcase } from './HeroShowcase'
export { IllustrationRow } from './IllustrationRow'
export { BeforeAfter } from './BeforeAfter'
export { DecisionBlock } from './DecisionBlock'
export { DecisionList } from './DecisionList'
export { ComparisonTable } from './ComparisonTable'
export { MetricRow } from './MetricRow'
export { InsightGrid } from './InsightGrid'
export { WorkflowComparison } from './WorkflowComparison'
export { Snapshot } from './Snapshot'
export { SectionHeading, SubHeading, SectionIconsContext } from './SectionHeading'
export { Media, Placeholder } from './Media'
export { Icon } from './Icon'
export { SectionRail } from './SectionRail'

/**
 * Map for <MDXProvider>. Keeps hand-authored MDX terse: `## Heading` becomes a
 * SectionHeading (with anchor), `### x` a SubHeading, and any loose paragraph a
 * measured prose paragraph. Explicit modules used in the MDX still win.
 */
export const mdxComponents = {
  h2: (props) => <SectionHeading {...props} />,
  h3: (props) => <SubHeading {...props} />,
}
