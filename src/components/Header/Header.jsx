import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useWindowWidth } from '../../hooks/useWindowWidth'

const NAV_KEYS = ['about','skills','experience','projects','achievements','certifications','demos','contact']

export default function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const width = useWindowWidth()
  const isMobile = width < 900

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(10,10,15,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #2a2a4a',
      padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <span style={{ color: '#00ff88', fontFamily: 'monospace', fontWeight: 700, fontSize: '1.2rem' }}>
        {'<OR/>'}
      </span>

      {!isMobile && (
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          {NAV_KEYS.map(key => (
            <a key={key} href={`#${key}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>
      )}

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
          style={{ background: 'none', border: '1px solid #2a2a4a', color: '#e2e8f0', padding: '0.25rem 0.75rem', borderRadius: '4px', cursor: 'pointer', fontFamily: 'monospace' }}
        >
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
        <a
          href={i18n.language === 'es' ? '/portafolio/cvs/CV-Oscar-ES.pdf' : '/portafolio/cvs/CV-Oscar-EN.pdf'}
          download
          style={{ background: 'none', border: '1px solid #00ff88', color: '#00ff88', padding: '0.25rem 0.75rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
        >
          {t('nav.downloadCV')}
        </a>
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', color: '#e2e8f0', fontSize: '1.4rem', lineHeight: 1 }}
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <nav style={{
          position: 'fixed', top: '61px', left: 0, right: 0,
          background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #2a2a4a',
          display: 'flex', flexDirection: 'column', gap: 0,
          zIndex: 99
        }}>
          {NAV_KEYS.map(key => (
            <a
              key={key}
              href={`#${key}`}
              onClick={handleNavClick}
              style={{
                color: '#94a3b8', textDecoration: 'none', fontSize: '1rem',
                padding: '1rem 2rem', borderBottom: '1px solid #1a1a2e',
                display: 'block'
              }}
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
