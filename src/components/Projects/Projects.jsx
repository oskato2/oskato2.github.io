import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    id: 'hotel',
    year: 2019,
    color: '#bf00ff',
    icon: '🏨',
    title: {
      es: 'Sitio Web + Infraestructura de Hotel',
      en: 'Hotel Website + Full Infrastructure',
    },
    description: {
      es: 'Proyecto integral para un hotel: desarrollo del sitio web en PHP puro, despliegue y configuración completa en Ubuntu Server propio, red WAN con router en modo WISP, instalación de sistema de videovigilancia Dahua con DVR y cableado estructurado.',
      en: 'End-to-end project for a hotel: PHP website development, full Ubuntu Server setup and deployment, WAN network with router in WISP mode, Dahua CCTV system with DVR installation, and structured cabling.',
    },
    tech: ['PHP', 'Ubuntu Server', 'WAN / WISP', 'Dahua CCTV', 'DVR', 'Cableado estructurado'],
    highlights: {
      es: [
        'Sitio web en PHP puro con despliegue en servidor propio',
        'Configuración completa de Ubuntu Server (Apache, red, firewall)',
        'Red WAN con router en modo WISP para conectividad del hotel',
        'Instalación y configuración de cámaras Dahua + DVR',
        'Cableado estructurado del inmueble',
      ],
      en: [
        'Pure PHP website deployed on self-managed server',
        'Full Ubuntu Server configuration (Apache, network, firewall)',
        'WAN network with router in WISP mode for hotel connectivity',
        'Dahua cameras + DVR installation and configuration',
        'Structured cabling throughout the property',
      ],
    },
  },
  {
    id: 'accesibilidad',
    year: 2021,
    color: '#00ff88',
    icon: '♿',
    title: {
      es: 'Sitios de Consulta Accesibles — IEEG',
      en: 'Accessible Consultation Websites — IEEG',
    },
    description: {
      es: 'Desarrollo de portales web de consulta ciudadana diseñados para ser totalmente accesibles para personas con discapacidad: autodescripción de contenido, ajuste dinámico de tamaño de letra, alto contraste, compatibilidad con lectores de pantalla y otras ayudas tecnológicas.',
      en: 'Development of citizen consultation web portals designed to be fully accessible for people with disabilities: content self-description, dynamic font size adjustment, high contrast mode, screen reader compatibility and other assistive technology support.',
    },
    tech: ['Angular', 'PHP', 'Laravel', 'WCAG', 'Accesibilidad web'],
    highlights: {
      es: [
        'Autodescripción de contenido para lectores de pantalla',
        'Ajuste dinámico de tamaño de letra desde la propia interfaz',
        'Modo alto contraste para personas con baja visión',
        'Desarrollado en Angular + PHP/Laravel',
        'Cumplimiento de estándares de accesibilidad web (WCAG)',
      ],
      en: [
        'Content self-description for screen readers',
        'Dynamic font size adjustment from the interface itself',
        'High contrast mode for low-vision users',
        'Built with Angular + PHP/Laravel',
        'Web accessibility standards compliance (WCAG)',
      ],
    },
  },
  {
    id: 'urna',
    year: 2022,
    color: '#ff9900',
    icon: '🗳️',
    title: {
      es: 'Primera Urna Electrónica de Guanajuato',
      en: 'First Electronic Voting System in Guanajuato',
    },
    description: {
      es: 'Diseño y desarrollo del primer sistema de urna electrónica del estado de Guanajuato para el IEEG. Permite votar directamente en un equipo, contabilizando en tiempo real los votos por partido, votos nulos y resultados parciales. Sistema institucional sensible — tecnologías no divulgadas.',
      en: 'Design and development of the first electronic voting system in the state of Guanajuato for IEEG. Allows voters to cast ballots directly on a device, with real-time tallying of votes per party, null votes and partial results. Sensitive institutional system — technologies undisclosed.',
    },
    tech: [],
    highlights: {
      es: [
        'Primera urna electrónica implementada en el estado de Guanajuato',
        'Votación directa en dispositivo con conteo automático en tiempo real',
        'Contabilización de votos por partido, votos nulos y totales',
        'Sistema institucional — tecnologías no divulgadas por confidencialidad',
      ],
      en: [
        'First electronic voting system ever deployed in the state of Guanajuato',
        'Direct device voting with automatic real-time tallying',
        'Votes counted per party, null votes and totals',
        'Institutional system — technologies undisclosed for confidentiality',
      ],
    },
  },
  {
    id: 'registro-candidatos',
    year: 2023,
    color: '#00d4ff',
    icon: '📋',
    title: {
      es: 'Sistema de Registro de Candidatos — IEEG',
      en: 'Candidate Registration System — IEEG',
    },
    description: {
      es: 'Plataforma dual para la gestión integral del registro de candidatos electorales: sistema para partidos políticos (requisición, validación y carga de documentos, escaneo directo desde escáner conectado) y sistema institucional con funciones avanzadas (plantillas, administración de partidos, auditoría). Se capacitó a representantes de todos los partidos políticos en su uso.',
      en: 'Dual platform for complete electoral candidate registration management: a system for political parties (document requests, validation and upload, direct scanner integration) and an institutional system with advanced features (templates, party administration, auditing). Representatives from all political parties were trained on its use.',
    },
    tech: [],
    highlights: {
      es: [
        'Dos sistemas: uno para partidos políticos y uno institucional',
        'Requisición, validación y carga de documentos oficiales',
        'Integración directa con escáner físico desde el sistema',
        'Sistema institucional: gestión de plantillas y administración de partidos',
        'Capacitación a representantes de todos los partidos políticos',
        'Tecnologías no divulgadas por confidencialidad institucional',
      ],
      en: [
        'Two systems: one for political parties and one institutional',
        'Official document requests, validation and upload',
        'Direct physical scanner integration from within the system',
        'Institutional system: template management and party administration',
        'Training delivered to representatives of all political parties',
        'Technologies undisclosed for institutional confidentiality',
      ],
    },
  },
  {
    id: 'chatbot-cemex',
    year: 2024,
    color: '#e879f9',
    icon: '💬',
    title: {
      es: 'Chatbot Olivia — Cemex Go (Neoris)',
      en: 'Olivia Chatbot — Cemex Go (Neoris)',
    },
    description: {
      es: 'Desarrollo y mejora del chatbot Olivia integrado en la plataforma global Cemex Go, utilizada por clientes de Cemex en todo el mundo. Implementación de flujos conversacionales con NLP, integración con APIs internas y desarrollo de componentes Angular reutilizables para la interfaz del chat.',
      en: 'Development and enhancement of the Olivia chatbot integrated into the global Cemex Go platform, used by Cemex customers worldwide. Implementation of conversational flows with NLP, integration with internal APIs and development of reusable Angular components for the chat interface.',
    },
    tech: ['Angular', 'TypeScript', 'NLP', 'REST APIs', 'Cemex Go'],
    highlights: {
      es: [
        'Chatbot Olivia integrado en plataforma global usada por clientes de Cemex worldwide',
        'Flujos conversacionales con procesamiento de lenguaje natural (NLP)',
        'Integración con APIs internas de Cemex Go',
        'Componentes Angular reutilizables para la interfaz de chat',
        'Trabajo en equipo internacional en proyecto de escala global',
      ],
      en: [
        'Olivia chatbot integrated into global platform used by Cemex customers worldwide',
        'Conversational flows with natural language processing (NLP)',
        'Integration with Cemex Go internal APIs',
        'Reusable Angular components for the chat interface',
        'International team collaboration on a global-scale project',
      ],
    },
  },
  {
    id: 'museo-virtual',
    year: 2025,
    color: '#00ff88',
    icon: '🏛️',
    title: {
      es: 'Museo Virtual IEEG — Recorrido en Navegador',
      en: 'IEEG Virtual Museum — Browser Tour',
    },
    description: {
      es: 'Recorrido virtual interactivo del Instituto Electoral del Estado de Guanajuato accesible directamente desde cualquier navegador web, sin instalación. Desarrollado como videojuego en Unity WebGL: el usuario navega en primera persona por las instalaciones del instituto de forma inmersiva.',
      en: 'Interactive virtual tour of the Electoral Institute of the State of Guanajuato accessible directly from any web browser, no installation required. Developed as a Unity WebGL game: users navigate in first person through the institute\'s facilities in an immersive experience.',
    },
    tech: ['Unity', 'WebGL', 'C#', '3D', 'Browser-based'],
    highlights: {
      es: [
        'Recorrido 3D en primera persona del IEEG accesible desde el navegador',
        'Desarrollado en Unity con exportación WebGL — sin instalación',
        'Navegación inmersiva por las instalaciones reales del instituto',
        'Experiencia tipo videojuego para acercar el instituto a la ciudadanía',
      ],
      en: [
        '3D first-person tour of IEEG accessible from any browser',
        'Built in Unity with WebGL export — no installation required',
        'Immersive navigation through the institute\'s real facilities',
        'Videogame-style experience to bring the institute closer to citizens',
      ],
    },
  },
  {
    id: 'mesa-ayuda-ia',
    year: 2025,
    color: '#00ff88',
    icon: '🤖',
    title: {
      es: 'Mesa de Ayuda con IA — Tickets Automáticos',
      en: 'AI-Powered Help Desk — Automatic Ticketing',
    },
    description: {
      es: 'Sistema de mesa de ayuda inteligente que procesa solicitudes recibidas por correo electrónico y WhatsApp, genera y asigna tickets automáticamente usando IA, y notifica al técnico correspondiente. Inició con Ollama (LLM local) y evolucionó a la API de OpenAI. El usuario final solo se comunica por sus canales habituales — el sistema hace el resto.',
      en: 'Intelligent help desk system that processes requests received via email and WhatsApp, automatically generates and assigns tickets using AI, and notifies the corresponding technician. Started with Ollama (local LLM) and evolved to the OpenAI API. End users only communicate through their usual channels — the system handles the rest.',
    },
    tech: ['Python', 'Ollama', 'OpenAI API', 'Email automation', 'WhatsApp', 'LLM'],
    highlights: {
      es: [
        'Procesamiento de solicitudes entrantes por correo electrónico y WhatsApp',
        'Generación y alta automática de tickets con clasificación por IA',
        'Asignación automática de técnico según tipo de solicitud',
        'Inició con Ollama (LLM local) — migrado a OpenAI API en producción',
        'El usuario final solo escribe por correo o WhatsApp, sin formularios ni portales',
      ],
      en: [
        'Incoming request processing via email and WhatsApp',
        'Automatic ticket creation and classification using AI',
        'Automatic technician assignment based on request type',
        'Started with Ollama (local LLM) — migrated to OpenAI API in production',
        'End users only write via email or WhatsApp — no forms or portals needed',
      ],
    },
  },
  {
    id: 'museo-mujeres',
    year: 2025,
    color: '#e879f9',
    icon: '🤲',
    title: {
      es: 'Museo Interactivo para las Mujeres — Control por Gestos',
      en: 'Interactive Women\'s Museum — Gesture Control',
    },
    description: {
      es: 'Museo interactivo navegable mediante gestos de mano, sin necesidad de tocar la pantalla. Desarrollado en Python con MediaPipe para reconocimiento de acciones de la mano en tiempo real. Instalado en pantallas físicas con cámara integrada para que el público lo use de forma natural e intuitiva.',
      en: 'Interactive museum navigable through hand gestures, no screen contact required. Developed in Python with MediaPipe for real-time hand action recognition. Deployed on physical screens with integrated cameras for natural and intuitive public use.',
    },
    tech: ['Python', 'MediaPipe', 'Computer Vision', 'Gesture Control', 'Touchless UI'],
    highlights: {
      es: [
        'Navegación completamente touchless mediante reconocimiento de gestos de mano',
        'Python + MediaPipe para detección y clasificación de acciones en tiempo real',
        'Instalado en pantallas físicas con cámara — listo para uso público',
        'Experiencia inclusiva y accesible sin necesidad de periféricos adicionales',
      ],
      en: [
        'Fully touchless navigation through real-time hand gesture recognition',
        'Python + MediaPipe for real-time hand action detection and classification',
        'Deployed on physical screens with camera — ready for public use',
        'Inclusive and accessible experience requiring no additional peripherals',
      ],
    },
  },
  {
    id: 'monitoreo-red',
    year: 2025,
    color: '#ff9900',
    icon: '⚡',
    title: {
      es: 'Sistema de Monitoreo de Red Eléctrica — IEEG',
      en: 'Electrical Network Monitoring System — IEEG',
    },
    description: {
      es: 'Diseño, fabricación e implementación de un sistema de monitoreo de la red eléctrica del instituto. Incluye el diseño y construcción de un circuito electrónico a medida para la lectura de parámetros de los equipos, con software de monitoreo en tiempo real desarrollado en Python y C.',
      en: 'Design, fabrication and implementation of an electrical network monitoring system for the institute. Includes the design and construction of a custom electronic circuit for reading equipment parameters, with real-time monitoring software developed in Python and C.',
    },
    tech: ['Python', 'C', 'Electrónica', 'Diseño de circuitos', 'Monitoreo en tiempo real'],
    highlights: {
      es: [
        'Diseño y fabricación de circuito electrónico a medida para monitoreo',
        'Lectura de parámetros eléctricos de equipos en tiempo real',
        'Software de monitoreo desarrollado en Python + C',
        'Proyecto de hardware + software de principio a fin',
      ],
      en: [
        'Design and fabrication of a custom electronic circuit for monitoring',
        'Real-time reading of electrical parameters from equipment',
        'Monitoring software developed in Python + C',
        'Full end-to-end hardware + software project',
      ],
    },
  },
]

function ProjectCard({ project, lang }) {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const color = project.color

  return (
    <div style={{
      background: '#1a1a2e', border: `1px solid ${color}44`,
      borderRadius: '12px', padding: '1.5rem',
      display: 'flex', flexDirection: 'column', gap: '0.75rem',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 8px 30px ${color}22` }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '2rem' }}>{project.icon}</span>
        <span style={{
          background: `${color}18`, border: `1px solid ${color}44`,
          color, padding: '0.15rem 0.55rem', borderRadius: '12px',
          fontSize: '0.72rem', fontFamily: 'monospace',
        }}>
          {project.year}
        </span>
      </div>

      <h4 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', lineHeight: 1.4 }}>
        {project.title[lang]}
      </h4>

      <p style={{ color: '#94a3b8', fontSize: '0.87rem', lineHeight: 1.7 }}>
        {project.description[lang]}
      </p>

      {project.tech.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              background: `${color}11`, border: `1px solid ${color}44`,
              color, padding: '0.2rem 0.6rem', borderRadius: '12px',
              fontSize: '0.72rem', fontFamily: 'monospace',
            }}>{t}</span>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: 'none', border: `1px solid ${color}44`, color,
          borderRadius: '6px', padding: '0.35rem 0.75rem', cursor: 'pointer',
          fontSize: '0.78rem', fontFamily: 'monospace', alignSelf: 'flex-start',
          marginTop: '0.25rem', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = `${color}18`}
        onMouseLeave={e => e.currentTarget.style.background = 'none'}
      >
        {open ? t('projects.hideHighlights') : t('projects.showHighlights')}
      </button>

      {open && (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: 0, padding: 0 }}>
          {project.highlights[lang].map((h, i) => (
            <li key={i} style={{ color: '#94a3b8', fontSize: '0.82rem', display: 'flex', gap: '0.5rem' }}>
              <span style={{ color, flexShrink: 0 }}>●</span> {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Projects() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  const titles = {
    es: { section: '// 04', title: 'Proyectos', subtitle: 'Lo que he construido' },
    en: { section: '// 04', title: 'Projects', subtitle: 'What I\'ve built' },
  }
  const tx = titles[lang]

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        {tx.section}
      </h2>
      <h3 style={{ color: '#e2e8f0', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {tx.title}
      </h3>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>{tx.subtitle}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} lang={lang} />
        ))}
      </div>
    </div>
  )
}
