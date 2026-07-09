import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Experience() {
  const { t } = useTranslation()

  const jobs = [
    {
      key: 'ieeg',
      color: '#00ff88',
      years: '2020 — ' + t('experience.present'),
    },
    {
      key: 'neoris',
      color: '#00d4ff',
      years: '2024 — 2025',
    },
    {
      key: 'freelance',
      color: '#bf00ff',
      years: '2016 — 2019',
    },
  ]

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '900px', margin: '0 auto', background: '#0f0f1a' }}>
      <h2 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        {'// 03'}
      </h2>
      <h3 style={{ color: '#e2e8f0', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {t('experience.title')}
      </h3>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>{t('experience.subtitle')}</p>

      <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid #2a2a4a' }}>
        {jobs.map(job => (
          <div key={job.key} style={{ marginBottom: '3rem', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '-2.45rem', top: '0.25rem',
              width: '14px', height: '14px', borderRadius: '50%',
              background: job.color, boxShadow: `0 0 12px ${job.color}`
            }} />
            <div style={{
              background: '#1a1a2e', border: '1px solid #2a2a4a',
              borderRadius: '8px', padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <h4 style={{ color: '#e2e8f0', fontWeight: 600 }}>{t(`experience.${job.key}.role`)}</h4>
                <span style={{ color: job.color, fontFamily: 'monospace', fontSize: '0.85rem' }}>{job.years}</span>
              </div>
              <p style={{ color: job.color, fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: 500 }}>
                {t(`experience.${job.key}.company`)}
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem' }}>
                {t(`experience.${job.key}.location`)}
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1rem' }}>
                {t(`experience.${job.key}.description`)}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {t(`experience.${job.key}.highlights`, { returnObjects: true }).map((h, i) => (
                  <li key={i} style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: job.color }}>●</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
