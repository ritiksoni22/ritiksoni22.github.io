import './Button.css'

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  if (as === 'a' || href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={rest.type || 'button'} className={classes} {...rest}>
      {children}
    </button>
  )
}
