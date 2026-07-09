import React from 'react'
import { useTranslation } from 'react-i18next'
import { useWindowWidth } from '../../hooks/useWindowWidth'

export default function About() {
  const { t } = useTranslation()
  const width = useWindowWidth()
  const isMobile = width < 768

  const stats = [
    { val: t('about.stats.experienceVal'), label: t('about.stats.experience'), color: '#00ff88' },
    { val: t('about.stats.companiesVal'),  label: t('about.stats.companies'),  color: '#00d4ff' },
    { val: t('about.stats.projectsVal'),   label: t('about.stats.projects'),   color: '#bf00ff' },
    { val: t('about.stats.languagesVal'),  label: t('about.stats.languages'),  color: '#00ff88' },
  ]

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto', background: '#0f0f1a' }}>
      <h2 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        {'// 01'}
      </h2>
      <h3 style={{ color: '#e2e8f0', fontSize: '2rem', fontWeight: 700, marginBottom: '3rem' }}>
        {t('about.title')}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
        <div style={{
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '3rem', fontWeight: 700, color: '#0a0a0f', fontFamily: 'monospace',
          margin: '0 auto'
        }}>
          OF
        </div>
        <div>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem' }}>
            {t('about.bio')}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '1rem' }}>
            {stats.map(s => (
              <div key={s.label} style={{
                background: '#1a1a2e', border: '1px solid #2a2a4a',
                borderRadius: '8px', padding: '1rem', textAlign: 'center'
              }}>
                <div style={{ color: s.color, fontSize: '1.8rem', fontWeight: 700, fontFamily: 'monospace' }}>
                  {s.val}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
