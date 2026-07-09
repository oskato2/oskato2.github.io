import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', textAlign: 'center', padding: '2rem',
      paddingTop: '5rem', background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)'
    }}>
      <p style={{ color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
        {t('hero.greeting')}
      </p>
      <h1 style={{ color: '#e2e8f0', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
        {t('hero.name')}
      </h1>
      <p style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
        Full Stack Developer
      </p>
      <p style={{ color: '#94a3b8', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2rem' }}>
        {t('hero.intro')}
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href="/portafolio/cvs/CV-Oscar-ES.pdf"
          download
          style={{ padding: '0.75rem 1.5rem', border: '1px solid #00ff88', color: '#00ff88', borderRadius: '6px', textDecoration: 'none', fontWeight: 500 }}
        >
          {t('hero.ctaCV')}
        </a>
        <a
          href="#contact"
          style={{ padding: '0.75rem 1.5rem', border: '1px solid #2a2a4a', color: '#e2e8f0', borderRadius: '6px', textDecoration: 'none', fontWeight: 500 }}
        >
          {t('hero.ctaContact')}
        </a>
      </div>
      <p style={{ color: '#e2e8f0', marginTop: '3rem', fontSize: '0.8rem' }}>
        📍 {t('hero.location')}
      </p>
    </div>
  )
}
