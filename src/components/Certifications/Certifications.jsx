import React from 'react'
import { useTranslation } from 'react-i18next'
import data from '../../data/certifications.json'

function CertCard({ cert, color, labels }) {
  return (
    <div style={{
      background: '#1a1a2e',
      border: `1px solid ${color}33`,
      borderRadius: '10px',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      transition: 'border-color 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `${color}88`}
      onMouseLeave={e => e.currentTarget.style.borderColor = `${color}33`}
    >
      <div>
        <p style={{
          color: '#e2e8f0', fontWeight: 600, fontSize: '0.92rem', lineHeight: 1.4,
        }}>
          {cert.title}
        </p>
        <p style={{
          color, fontSize: '0.76rem', fontFamily: 'monospace', marginTop: '0.3rem',
        }}>
          {cert.year}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
        {cert.pdf && (
          <a
            href={cert.pdf}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
              color, fontSize: '0.76rem', textDecoration: 'none', fontFamily: 'monospace',
              border: `1px solid ${color}44`, borderRadius: '6px',
              padding: '0.25rem 0.65rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = `${color}18`}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            📄 {labels.pdf}
          </a>
        )}
        {cert.verify && (
          <a
            href={cert.verify}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
              color: '#00ff88', fontSize: '0.76rem', textDecoration: 'none', fontFamily: 'monospace',
              border: '1px solid #00ff8844', borderRadius: '6px',
              padding: '0.25rem 0.65rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#00ff8818'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            ✓ {labels.verify}
          </a>
        )}
      </div>
    </div>
  )
}

function IssuerGroup({ issuer, lang, labels }) {
  const color = issuer.color
  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem',
      }}>
        <div style={{
          width: '4px', height: '28px', background: color, borderRadius: '2px', flexShrink: 0,
        }} />
        <h4 style={{ color: '#e2e8f0', fontSize: '1.1rem', fontWeight: 700 }}>
          {issuer.name}
        </h4>
        <span style={{
          background: `${color}18`, border: `1px solid ${color}44`,
          color, padding: '0.15rem 0.55rem', borderRadius: '12px',
          fontSize: '0.72rem', fontFamily: 'monospace',
        }}>
          {issuer.certs.length} {issuer.certs.length === 1 ? labels.cert : labels.certs}
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '0.9rem',
      }}>
        {issuer.certs.map(cert => (
          <CertCard
            key={cert.id}
            cert={{ ...cert, title: cert.title[lang] }}
            color={color}
            labels={labels}
          />
        ))}
      </div>
    </div>
  )
}

export default function Certifications() {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  const titles = {
    es: { section: '// 06', heading: 'Certificados', subtitle: 'Credenciales profesionales verificadas' },
    en: { section: '// 06', heading: 'Certifications', subtitle: 'Verified professional credentials' },
  }
  const labels = {
    es: { pdf: 'Ver PDF', verify: 'Verificar', cert: 'certificado', certs: 'certificados' },
    en: { pdf: 'View PDF', verify: 'Verify', cert: 'certificate', certs: 'certificates' },
  }
  const t = titles[lang]
  const l = labels[lang]

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        {t.section}
      </h2>
      <h3 style={{ color: '#e2e8f0', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {t.heading}
      </h3>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>{t.subtitle}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {data.issuers.map(issuer => (
          <IssuerGroup key={issuer.id} issuer={issuer} lang={lang} labels={l} />
        ))}
      </div>
    </div>
  )
}
