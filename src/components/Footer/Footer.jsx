import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{
      background: '#0a0a0f', borderTop: '1px solid #2a2a4a',
      padding: '2rem 1.5rem', textAlign: 'center'
    }}>
      <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
        {t('footer.built')}
      </p>
      <p style={{ color: '#2a2a4a', fontSize: '0.75rem' }}>
        {t('footer.rights')}
      </p>
    </footer>
  )
}
