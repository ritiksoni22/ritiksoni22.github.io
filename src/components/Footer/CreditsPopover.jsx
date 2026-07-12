import { useEffect, useRef, useState } from 'react'

const CREDITS = [
  {
    label: 'Design inspiration',
    name: 'Rishabh Singh',
    href: 'https://www.figma.com/design/7cNiHcC3Lna2hT3OH1ypPx/Portfolio--Community-?node-id=0-1&p=f&t=Dx7REV1YWNOMBRe5-0',
  },
  {
    label: 'Fonts',
    name: 'Poppins, Kaushan Script',
    sub: 'Google Fonts',
    hrefs: [
      { name: 'Poppins', href: 'https://fonts.google.com/specimen/Poppins' },
      { name: 'Kaushan Script', href: 'https://fonts.google.com/specimen/Kaushan+Script' },
    ],
  },
]

export default function CreditsPopover() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function handlePointerDown(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div className="credits" ref={containerRef}>
      <button
        type="button"
        className="credits__trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        Credits
      </button>

      {open && (
        <div className="credits__popover" role="dialog" aria-label="Credits">
          <ul className="credits__list">
            {CREDITS.map((credit) => (
              <li key={credit.label}>
                <span className="credits__label">{credit.label}</span>
                {credit.hrefs ? (
                  <span className="credits__value">
                    {credit.hrefs.map((font, index) => (
                      <span key={font.name}>
                        <a href={font.href} target="_blank" rel="noreferrer">
                          {font.name}
                        </a>
                        {index < credit.hrefs.length - 1 && ', '}
                      </span>
                    ))}
                  </span>
                ) : (
                  <a className="credits__value" href={credit.href} target="_blank" rel="noreferrer">
                    {credit.name}
                  </a>
                )}
                {credit.sub && <span className="credits__sub">{credit.sub}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
