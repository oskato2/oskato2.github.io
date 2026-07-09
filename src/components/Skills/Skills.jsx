import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const skillsData = {
  frontend: [
    { name: 'Angular',     level: 90 },
    { name: 'React',       level: 85 },
    { name: 'TypeScript',  level: 88 },
    { name: 'JavaScript',  level: 92 },
    { name: 'HTML/CSS',    level: 95 },
    { name: 'Bootstrap',   level: 80 },
    { name: 'PWA',         level: 82 },
  ],
  backend: [
    { name: '.NET C#',    level: 85 },
    { name: 'Python',     level: 78 },
    { name: 'PHP',        level: 65 },
    { name: 'REST APIs',  level: 90 },
    { name: 'Django',     level: 70 },
    { name: 'FastAPI',    level: 72 },
    { name: 'Flask',      level: 70 },
  ],
  databases: [
    { name: 'SQL Server',    level: 85 },
    { name: 'PostgreSQL',    level: 80 },
    { name: 'MySQL/MariaDB', level: 82 },
    { name: 'SQLite',        level: 75 },
    { name: 'MongoDB',       level: 65 },
  ],
  cloud: [
    { name: 'AWS EC2',        level: 72 },
    { name: 'AWS Lightsail',  level: 75 },
    { name: 'AWS S3',         level: 78 },
    { name: 'AWS Cognito',    level: 68 },
    { name: 'AWS Amplify',    level: 68 },
    { name: 'AWS CloudWatch', level: 65 },
    { name: 'Docker',         level: 75 },
    { name: 'Linux/Nginx',    level: 78 },
    { name: 'Azure',                   level: 65 },
    { name: 'Microsoft Entra ID',      level: 65 },
  ],
  ai: [
    { name: 'Ollama LLM',    level: 80 },
    { name: 'spaCy',         level: 75 },
    { name: 'OpenAI API',    level: 70 },
    { name: 'Claude API',    level: 70 },
    { name: 'Automatización',level: 82 },
  ],
  tools: [
    { name: 'Git',       level: 90 },
    { name: 'Postman',   level: 88 },
    { name: 'Jira',      level: 82 },
    { name: 'Unity',     level: 70 },
    { name: 'WordPress', level: 75 },
  ],
}

const categoryColors = {
  frontend: '#00d4ff',
  backend:  '#bf00ff',
  databases:'#00ff88',
  cloud:    '#ff9900',
  ai:       '#00ff88',
  tools:    '#00d4ff',
}

export default function Skills() {
  const { t } = useTranslation()
  const [active, setActive] = useState('frontend')
  const categories = Object.keys(skillsData)

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        {'// 02'}
      </h2>
      <h3 style={{ color: '#e2e8f0', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {t('skills.title')}
      </h3>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>{t('skills.subtitle')}</p>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '0.4rem 1rem', borderRadius: '20px', cursor: 'pointer',
              border: `1px solid ${active === cat ? categoryColors[cat] : '#2a2a4a'}`,
              background: active === cat ? `${categoryColors[cat]}22` : 'transparent',
              color: active === cat ? categoryColors[cat] : '#94a3b8',
              fontSize: '0.85rem', transition: 'all 0.2s'
            }}
          >
            {t(`skills.categories.${cat}`)}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {skillsData[active].map(skill => (
          <div key={skill.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{skill.name}</span>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'monospace' }}>{skill.level}%</span>
            </div>
            <div style={{ background: '#1a1a2e', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: `${skill.level}%`,
                background: `linear-gradient(90deg, ${categoryColors[active]}, ${categoryColors[active]}88)`,
                borderRadius: '4px', transition: 'width 0.5s ease'
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
