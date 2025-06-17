import './App.css';
import {
  Github,
  Linkedin,
  Gitlab,
  Mail,
  MessageCircle,
  Server,
  Code2,
  Layout,
  Database,
  Video,
  TestTube2
} from 'lucide-react';

function App() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ralf02', label: 'GitHub', val: 'ralf02' },
    { icon: Gitlab, href: 'https://gitlab.com/ralf02', label: 'GitLab', val: 'ralf02'},
    { icon: Linkedin, href: 'https://linkedin.com/in/rafiko', label: 'LinkedIn', val: 'rafiko' },
    { icon: Mail, href: 'mailto:ralfcontreras@gmail.com', label: 'Email', val: 'ralfcontreras@gmail.com' }
  ];

  const portfolioItems = [
    {
      title: 'Plataforma CI/CD con Docker Swarm y GitLab',
      description: 'Implementación de CI/CD multiplataforma con GitLab Runner sin instalación local.',
      image: '/portfolio/ci-cd.jpg',
      tags: ['DevOps', 'Docker', 'GitLab']
    },
    {
      title: 'Sistema de Streaming Portable',
      description: 'Desarrollo de sistema de transmisión estable online/offline usando Raspbian y Wowza/NGINX.',
      image: '/portfolio/streaming.jpg',
      tags: ['Raspberry Pi', 'Streaming', 'NGINX']
    },
    {
      title: 'Aplicaciones Web',
      description: 'Desarrollo de dashboards e interfaces interactivas con Next.js, Angular y shadcn/ui.',
      image: '/portfolio/web-apps.jpg',
      tags: ['Next.js', 'Angular', 'shadcn/ui']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Work_Sans']">
      {/* Floating Social Menu */}
      <div className="fixed z-50 -translate-y-1/2 right-8 top-1/2">
        <div className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 text-white transition-colors bg-gray-900 rounded-full shadow-lg group hover:bg-gray-800"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
              <span className="absolute px-3 py-2 mr-3 text-sm font-medium text-white transition-all duration-200 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 right-full group-hover:opacity-100 whitespace-nowrap">
                <span className="text-gray-400">{link.label}</span>
                <span className="mx-1 text-gray-500">:</span>
                <span className="text-white">{link.val}</span>
                <span className="absolute w-2 h-2 rotate-45 -translate-y-1/2 bg-gray-900 border-b border-r border-gray-700 top-1/2 -right-1"></span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <div className="fixed z-50 right-8 bottom-8">
        <button
          className="relative flex items-center gap-2 px-4 py-2 text-white transition-colors bg-gray-900 rounded-full shadow-lg group hover:bg-gray-800"
          aria-label="Chatbot (Coming Soon)"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Ask Rafiko</span>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               Estoy aqui para aclararte dudas ;) <br /> coming soon!
           </span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gray-900">
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <div className="container relative z-20 px-4 mx-auto text-center">
          <img
            src="/foto.jpg"
            alt="Foto de perfil"
            className="object-cover w-80 h-80 mx-auto mb-8 border-4 border-white rounded-full shadow-lg"
          />
          <h1 className="mb-4 text-5xl font-bold text-white">Rafael Contreras</h1>
          <p className="text-xl text-gray-300">Software Engineer | DevOps | FullStack Developer</p>
        </div>
      </section>

      <main className="container px-4 py-16 mx-auto">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Sobre mí</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <p className="mb-4">
              Hola mundo, soy desarrollador web con sólida experiencia en el diseño, desarrollo y despliegue de aplicaciones.
              Domino stacks como LEMP, MEAN y Java SpringBoot, tengo experiencia en DevOps con Docker y GitLab CI/CD.
            </p>
            <p>
              He trabajado en proyectos de alto impacto, optimizando pipelines de integración y entrega continua,
              construyendo soluciones robustas y adaptadas a entornos de desarrollo, calidad y producción.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Habilidades en Stacks Tecnológicos</h2>
          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'DevOps',
                icon: Server,
                skills: ['Docker', 'Docker Swarm', 'K8s', 'GitLab CI/CD', 'Vault', 'NGINX', 'Linux']
              },
              {
                title: 'Backend',
                icon: Code2,
                skills: ['NestJS', 'Node.js', 'Express', 'Laravel', 'PHP', 'Java SpringBoot']
              },
              {
                title: 'Frontend',
                icon: Layout,
                skills: ['React', 'Next.js', 'TailwindCSS', 'shadcn/ui', 'Angular']
              },
              {
                title: 'Bases de Datos',
                icon: Database,
                skills: ['PostgreSQL', 'MariaDB', 'MongoDB', 'Supabase', 'ElasticSearch']
              },
              {
                title: 'Streaming',
                icon: Video,
                skills: ['Wowza Streaming Engine', 'Video.js', 'FFmpeg']
              },
              {
                title: 'Testing y QA',
                icon: TestTube2,
                skills: ['Cypress', 'Postman', 'PhpUnit', 'Vegeta']
              }
            ].map((category) => (
              <div key={category.title} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-gray-900" />
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section with Grid */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Portfolio</h2>
          <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div key={index} className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                <div className="bg-gray-100 aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mb-4 text-gray-600">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Experiencia Destacada</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                title: 'Plataforma CI/CD con Docker Swarm y GitLab',
                items: [
                  'Implementación de CI/CD multiplataforma con GitLab Runner sin instalación local.',
                  'Automatización de despliegues en entornos dev/qa/uat.',
                  'Estrategia de tags, cleanup policies y rollback seguro.'
                ]
              },
              {
                title: 'Sistema de Streaming Portable con Raspberry Pi',
                items: [
                  'Desarrollo de sistema de transmisión estable online/offline usando Raspbian y Wowza/NGINX.',
                  'Gestión de medios locales y adaptación en entornos de baja conectividad.',
                  'Interfaz personalizada para usuarios móviles y de escritorio.'
                ]
              },
              {
                title: 'Aplicaciones Web',
                items: [
                  'Desarrollo de dashboards e interfaces interactivas con Next.js, Angular y shadcn/ui.',
                  'Integración de APIs REST con Supabase y Stripe.'
                ]
              }
            ].map((exp, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{exp.title}</h3>
                <ul className="space-y-2">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="mr-2 text-gray-900">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 text-white bg-gray-900">
        <div className="container px-4 mx-auto text-center">
          <p>© {new Date().getFullYear()} Rafael Contreras</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
