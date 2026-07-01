type SectionHeadingProps = {
  eyebrow: string
  titleTop: string
  titleBottom: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  titleTop,
  titleBottom,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">
        <span>{titleTop}</span>
        <span className="section-heading__title-accent">{titleBottom}</span>
      </h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}