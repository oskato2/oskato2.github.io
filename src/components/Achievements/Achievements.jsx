import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import data from '../../data/achievements.json'

const categoryColors = {
  university:    '#00ff88',
  event:         '#00d4ff',
  certification: '#bf00ff',
  hackathon:     '#ff9900',
  work:          '#e879f9',
}

const categoryLabels = {
  es: { university: 'Proyecto Universitario', event: 'Evento', certification: 'Certificado', hackathon: 'Hackathon', work: 'Proyecto Profesional' },
  en: { university: 'University Project',     event: 'Event',  certification: 'Certificate', hackathon: 'Hackathon', work: 'Professional Project'  },
}

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  function prev() { setCurrent(i => (i - 1 + images.length) % images.length) }
  function next() { setCurrent(i => (i + 1) % images.length) }

  function handleKey(e) {
    if (e.key === 'ArrowLeft')  prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape')     onClose()
  }

  return (
    <div
      onClick={onClose}
      onKeyDown={handleKey}
      tabIndex={0}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}
    >
      <button
        onClick={e => { e.stopPropagation(); prev() }}
        style={arrowBtn('left')}
      >‹</button>

      <img
        src={images[current]}
        alt=""
        onClick={e => e.stopPropagation()}
        style={{
          maxHeight: '85vh', maxWidth: '85vw',
          borderRadius: '8px', objectFit: 'contain',
          border: '1px solid #2a2a4a',
        }}
      />

      <button
        onClick={e => { e.stopPropagation(); next() }}
        style={arrowBtn('right')}
      >›</button>

      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '1rem', right: '1.5rem',
          background: 'none', border: 'none', color: '#94a3b8',
          fontSize: '2rem', cursor: 'pointer', lineHeight: 1,
        }}
      >×</button>

      <span style={{
        position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        color: '#94a3b8', fontFamily: 'monospace', fontSize: '0.85rem',
      }}>
        {current + 1} / {images.length}
      </span>
    </div>
  )
}

function arrowBtn(side) {
  return {
    position: 'absolute', [side]: '1.5rem',
    background: 'rgba(26,26,46,0.8)', border: '1px solid #2a2a4a',
    color: '#e2e8f0', fontSize: '2.5rem', cursor: 'pointer',
    borderRadius: '50%', width: '48px', height: '48px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    lineHeight: 1,
  }
}

function AchievementCard({ item }) {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const color = categoryColors[item.category] ?? '#00ff88'
  const [lightbox, setLightbox] = useState(null)

  const allImages = item.coverImage
    ? [item.coverImage, ...(item.gallery ?? [])]
    : (item.gallery ?? [])

  return (
    <div style={{
      background: '#1a1a2e', border: `1px solid ${color}33`,
      borderRadius: '12px', overflow: 'hidden',
    }}>
      {/* Cover image */}
      {item.coverImage ? (
        <div
          onClick={() => setLightbox(0)}
          style={{ cursor: 'pointer', overflow: 'hidden', height: '220px', position: 'relative' }}
        >
          <img
            src={item.coverImage}
            alt={item.title[lang]}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, #1a1a2e 0%, transparent 60%)',
          }} />
          <span style={{
            position: 'absolute', top: '0.75rem', left: '0.75rem',
            background: `${color}22`, border: `1px solid ${color}66`,
            color, padding: '0.2rem 0.6rem', borderRadius: '12px',
            fontSize: '0.75rem', fontFamily: 'monospace',
          }}>
            {categoryLabels[lang][item.category]} · {item.year}
          </span>
        </div>
      ) : (
        /* PDF-only placeholder */
        <div style={{
          height: '120px', position: 'relative',
          background: `linear-gradient(135deg, ${color}18, ${color}06)`,
          borderBottom: `1px solid ${color}22`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.5rem',
        }}>
          <div>
            <span style={{
              background: `${color}22`, border: `1px solid ${color}66`,
              color, padding: '0.2rem 0.6rem', borderRadius: '12px',
              fontSize: '0.75rem', fontFamily: 'monospace', display: 'inline-block', marginBottom: '0.5rem',
            }}>
              {categoryLabels[lang][item.category]} · {item.year}
            </span>
            {item.certificate && (
              <div>
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    color, fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'monospace',
                    border: `1px solid ${color}44`, borderRadius: '6px', padding: '0.3rem 0.7rem',
                  }}
                >
                  📄 {lang === 'es' ? 'Ver certificado' : 'View certificate'}
                </a>
              </div>
            )}
          </div>
          <span style={{ fontSize: '3.5rem', opacity: 0.15 }}>🏆</span>
        </div>
      )}

      <div style={{ padding: '1.5rem' }}>
        <h4 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.25rem' }}>
          {item.title[lang]}
        </h4>
        <p style={{ color, fontSize: '0.8rem', fontFamily: 'monospace', marginBottom: '1rem' }}>
          {item.subtitle[lang]}
        </p>
        <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          {item.description[lang]}
        </p>

        {/* Tech tags */}
        {item.tech && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {item.tech.map(t => (
              <span key={t} style={{
                background: `${color}11`, border: `1px solid ${color}44`,
                color, padding: '0.2rem 0.6rem', borderRadius: '12px',
                fontSize: '0.75rem', fontFamily: 'monospace',
              }}>{t}</span>
            ))}
          </div>
        )}

        {/* Highlights */}
        {item.highlights && (
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {item.highlights[lang].map((h, i) => (
              <li key={i} style={{ color: '#94a3b8', fontSize: '0.83rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color, flexShrink: 0 }}>●</span> {h}
              </li>
            ))}
          </ul>
        )}

        {/* Photo gallery thumbnails */}
        {item.gallery && item.gallery.length > 0 && (
          <div>
            <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'monospace', marginBottom: '0.6rem' }}>
              📸 {item.gallery.length} fotos del evento
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
              gap: '6px',
            }}>
              {item.gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(i + 1)}
                  style={{
                    height: '70px', borderRadius: '4px', overflow: 'hidden',
                    cursor: 'pointer', border: `1px solid #2a2a4a`,
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = color}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a4a'}
                >
                  <img
                    src={img}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={allImages}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}

export default function Achievements() {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  const titles = {
    es: { section: '// 05', title: 'Logros & Eventos', subtitle: 'Proyectos universitarios, eventos y reconocimientos' },
    en: { section: '// 05', title: 'Achievements & Events', subtitle: 'University projects, events and recognitions' },
  }
  const t = titles[lang]

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        {t.section}
      </h2>
      <h3 style={{ color: '#e2e8f0', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {t.title}
      </h3>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>{t.subtitle}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '2rem',
      }}>
        {data.items.map(item => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
