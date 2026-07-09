import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useWindowWidth } from '../../hooks/useWindowWidth'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const width = useWindowWidth()
  const isMobile = width < 768

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`)
    const body = encodeURIComponent(`De: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:oscar.rdcm@gmail.com?subject=${subject}&body=${body}`)
  }

  const links = [
    { label: 'Email', value: 'oscar.rdcm@gmail.com', href: 'mailto:oscar.rdcm@gmail.com', color: '#00ff88' },
    { label: 'LinkedIn', value: 'oscar-fabian-ruiz...', href: 'https://linkedin.com/in/oscar-fabian-ruiz-de-chavez-munoz', color: '#00d4ff' },
    { label: 'GitHub', value: 'oskato2', href: 'https://github.com/oskato2', color: '#bf00ff' },
  ]

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        {'// 08'}
      </h2>
      <h3 style={{ color: '#e2e8f0', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {t('contact.title')}
      </h3>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>{t('contact.subtitle')}</p>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['name','email','message'].map(field => (
            <div key={field}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                {t(`contact.${field}Label`)}
              </label>
              {field === 'message'
                ? <textarea
                    rows={5}
                    value={form[field]}
                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    placeholder={t(`contact.${field}Placeholder`)}
                    style={{
                      width: '100%', background: '#1a1a2e', border: '1px solid #2a2a4a',
                      borderRadius: '6px', padding: '0.75rem', color: '#e2e8f0',
                      fontFamily: 'inherit', fontSize: '0.9rem', resize: 'vertical', outline: 'none'
                    }}
                  />
                : <input
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    placeholder={t(`contact.${field}Placeholder`)}
                    style={{
                      width: '100%', background: '#1a1a2e', border: '1px solid #2a2a4a',
                      borderRadius: '6px', padding: '0.75rem', color: '#e2e8f0',
                      fontFamily: 'inherit', fontSize: '0.9rem', outline: 'none'
                    }}
                  />
              }
            </div>
          ))}
          <button type="submit" style={{
            background: 'linear-gradient(90deg, #00ff8822, #00d4ff22)',
            border: '1px solid #00ff88', color: '#00ff88',
            padding: '0.75rem', borderRadius: '6px', cursor: 'pointer',
            fontWeight: 500, fontSize: '0.9rem', transition: 'opacity 0.2s'
          }}>
            {t('contact.sendButton')}
          </button>
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
          {links.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
              background: '#1a1a2e', border: `1px solid ${link.color}44`,
              borderRadius: '8px', padding: '1rem 1.25rem', textDecoration: 'none',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              transition: 'transform 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{link.label}</span>
              <span style={{ color: link.color, fontFamily: 'monospace', fontSize: '0.85rem' }}>{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
