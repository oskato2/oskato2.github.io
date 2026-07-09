import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useWindowWidth } from '../../hooks/useWindowWidth'

function FakeTerminal() {
  const { t } = useTranslation()
  const [history, setHistory] = useState([
    { type: 'output', text: t('demos.terminal.welcome') }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  function handleCommand(e) {
    if (e.key !== 'Enter') return
    const cmd = input.trim().toLowerCase()
    if (!cmd) return
    const commands = t('demos.terminal.commands', { returnObjects: true })
    if (cmd === 'clear') {
      setHistory([])
      setInput('')
      return
    }
    const response = commands[cmd] ?? `${cmd}: ${t('demos.terminal.notFound')}`
    setHistory(prev => [
      ...prev,
      { type: 'input', text: input },
      { type: 'output', text: response },
    ])
    setInput('')
  }

  return (
    <div style={{ background: '#0a0a0f', border: '1px solid #2a2a4a', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ background: '#1a1a2e', padding: '0.5rem 1rem', display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span style={{ color: '#94a3b8', fontSize: '0.8rem', marginLeft: '0.5rem', fontFamily: 'monospace' }}>
          oscar@portfolio:~$
        </span>
      </div>
      <div style={{ height: '220px', overflowY: 'auto', padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>
        {history.map((line, i) => (
          <div key={i} style={{ marginBottom: '4px', whiteSpace: 'pre-wrap' }}>
            {line.type === 'input'
              ? <><span style={{ color: '#00ff88' }}>$ </span><span style={{ color: '#e2e8f0' }}>{line.text}</span></>
              : <span style={{ color: '#94a3b8' }}>{line.text}</span>
            }
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div style={{ borderTop: '1px solid #2a2a4a', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '0.85rem' }}>$</span>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleCommand}
          placeholder={t('demos.terminal.placeholder')}
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: '#e2e8f0', fontFamily: 'monospace', fontSize: '0.85rem'
          }}
        />
      </div>
    </div>
  )
}

export default function Demos() {
  const { t } = useTranslation()
  const width = useWindowWidth()
  const isMobile = width < 768

  const pythonSnippet = `# Email AI Automation Pipeline
import ollama, spacy

nlp = spacy.load("es_core_news_sm")

def process_email(email_body: str) -> dict:
    # 1. Classify intent with local LLM
    response = ollama.chat(
        model="llama3",
        messages=[{
            "role": "user",
            "content": f"Clasifica: {email_body}"
        }]
    )
    intent = response['message']['content']

    # 2. Entity extraction with spaCy
    doc = nlp(email_body)
    entities = [(e.text, e.label_) for e in doc.ents]

    # 3. Auto-generate ticket
    return create_ticket(intent=intent, entities=entities)`

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto', background: '#0f0f1a' }}>
      <h2 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        {'// 07'}
      </h2>
      <h3 style={{ color: '#e2e8f0', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {t('demos.title')}
      </h3>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>{t('demos.subtitle')}</p>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem' }}>
        <div>
          <h4 style={{ color: '#00ff88', fontFamily: 'monospace', marginBottom: '1rem' }}>
            {t('demos.terminal.title')}
          </h4>
          <FakeTerminal />
        </div>

        <div>
          <h4 style={{ color: '#00d4ff', fontFamily: 'monospace', marginBottom: '1rem' }}>
            {t('demos.codeSnippet.title')}
          </h4>
          <div style={{
            background: '#0a0a0f', border: '1px solid #2a2a4a', borderRadius: '8px',
            padding: '1rem', overflow: 'auto', maxHeight: '280px'
          }}>
            <pre style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#94a3b8', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
              <code>{pythonSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
