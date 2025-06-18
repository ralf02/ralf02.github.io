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
      title: 'DevOps',
      description: 'Automatización de flujos CI/CD con GitLab, configuración de runners con Shell Scripting y despliegue de entornos con Ansible y Docker Swarm.',
      image: '/portfolio/devops.jpg',
      tags: [ 'Docker Swarm', 'GitLab CI/CD', 'Ansible']
    },
    {
      title: 'Desarrollo Web',
      description: 'Desarrollo full-stack con LEMP, MERN y Spring Boot, creando APIs REST, personalizando CMS (Drupal, WordPress) y construyendo interfaces escalables y funcionales.',
      image: '/portfolio/web.jpg',
      tags: ['PHP', 'Node.js','Next.js', 'Nginx', 'Html', 'Raspberry Pi', 'Streaming']
    },
    {
      title: 'Laboratorios',
      description: 'Exploro soluciones en la nube con AWS, Kubernetes y Terraform. Pruebo arquitecturas escalables y el desarrollo agentes inteligentes con IA generativa, enfocándome en eficiencia, innovación y aprendizaje continuo.',
      image: '/portfolio/labs.jpg',
      tags: ['K8s', 'aws','Raspberry Pi', 'Streaming', 'Nginx', 'shadcn/ui']
    },

  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Work_Sans']">
      {/* Floating Social Menu */}
      <div className="hidden fixed right-8 top-1/2 z-50 flex-col gap-4 -translate-y-1/2 md:flex">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex relative justify-center items-center w-12 h-12 text-white bg-gray-900 rounded-full shadow-lg transition-colors group hover:bg-gray-800"
            aria-label={link.label}
          >
            <link.icon className="w-6 h-6" />
            <span className="absolute right-full px-3 py-2 mr-3 text-sm font-medium text-white whitespace-nowrap bg-gray-900 rounded-lg border border-gray-700 shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100">
              <span className="text-gray-400">{link.label}</span>
              <span className="mx-1 text-gray-500">:</span>
              <span className="text-white">{link.val}</span>
              <span className="absolute -right-1 top-1/2 w-2 h-2 bg-gray-900 border-r border-b border-gray-700 rotate-45 -translate-y-1/2"></span>
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Social Menu */}
      <div className="flex fixed right-0 bottom-0 left-0 z-50 gap-4 justify-center p-4 bg-gray-900 md:hidden">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-10 h-10 text-white bg-gray-800 rounded-full shadow-lg transition-colors hover:bg-gray-700"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Floating Chatbot Button */}
      <div className="fixed right-4 bottom-4 z-50 md:right-8 md:bottom-8">
        <button
          className="flex relative gap-2 items-center px-3 py-2 text-sm text-white bg-gray-900 rounded-full shadow-lg transition-colors md:text-base md:px-4 group hover:bg-gray-800"
          aria-label="Chatbot (Coming Soon)"
        >
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden text-sm font-medium md:inline">Ask Rafiko</span>
          <span className="absolute bottom-full left-1/2 px-2 py-1 mb-2 text-xs text-white whitespace-nowrap bg-gray-800 rounded opacity-0 transition-opacity duration-300 -translate-x-1/2 pointer-events-none group-hover:opacity-100">
               Estoy aqui para aclararte dudas ;) <br /> coming soon!
           </span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="flex relative justify-center items-center h-screen bg-gray-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover absolute inset-0 w-full h-full"
        >
          <source src="/large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <div className="container relative z-20 px-4 mx-auto text-center">
          <img
            src="/foto.jpg"
            alt="Foto de perfil"
            className="object-cover mx-auto mb-8 w-80 h-80 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="mb-4 text-5xl font-bold text-white">Rafael Contreras</h1>
          <p className="text-xl text-gray-300">Software Engineer | DevOps | FullStack Developer</p>
        </div>
      </section>

      <main className="container px-4 py-16 mx-auto">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Sobre mí</h2>
          <div className="mx-auto max-w-3xl text-lg text-gray-700">
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
          <div className="grid gap-8 mx-auto max-w-5xl md:grid-cols-2 lg:grid-cols-3">
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
              <div key={category.title} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                <div className="flex gap-3 items-center mb-4">
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
          <div className="grid gap-8 mx-auto max-w-6xl md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div key={index} className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-shadow hover:shadow-lg">
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
          <div className="mx-auto space-y-8 max-w-3xl">
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
              <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
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
