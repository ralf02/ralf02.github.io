import './App.css';
import {
  Github,
  Linkedin,
  Gitlab,
  Mail,
  Server,
  Code2,
  Layout,
  Database,
  Video,
  TestTube2,
  X,
  ChevronLeft,
  ChevronRight,
  Lock,
  Globe
} from 'lucide-react';
import { useState } from 'react';

function App() {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      tags: [ 'Docker Swarm', 'GitLab CI/CD', 'Ansible', 'K8s', 'Shell']
    },
    {
      title: 'Desarrollo Web',
      description: 'Desarrollo full-stack con LEMP, MERN y Spring Boot, creando APIs REST, personalizando CMS (Drupal, WordPress), construyendo interfaces escalables y funcionales.',
      image: '/portfolio/web.jpg',
      tags: ['PHP', 'Node.js','Next.js', 'Nginx', 'Html', 'Raspberry Pi', 'Streaming', 'Laravel', 'Drupal','Java','Python', 'Flask', 'FastAPI']
    },
    {
      title: 'Laboratorios',
      description: 'Exploro soluciones en la nube con AWS, Kubernetes y Terraform. Profundizo en el desarrollo de aplicaciones móviles con React Native y en la creación de agentes inteligentes basados en IA generativa, integrando worflows con scripts en Python y Apis con Flask/FastAPI. Me enfoco en la eficiencia, la innovación y la mejora continua.',
      image: '/portfolio/labs.jpg',
      tags: ['K8s', 'aws','Raspberry Pi', 'Python', 'Streaming', 'Nginx', 'ReactNative']
    },

  ];

  const portfolioDetails = {
    'DevOps': [
      {
        title: 'Infraestructura On-Premise',
        description: 'Gestión de la infraestructura interna de la compañía en Docker Swarm con enfoque en alta disponibilidad para el despliegue de servicios con Gitlab CI/CD automatizando  con herramientas como Ansible y Shell Scripting.',
        image: '/portfolio/swarm.jpg',
        demoUrl: [],
        tags: ['Docker Swarm', 'GitLab CI/CD', 'Shell Scripting']
      },
      {
        title: 'Despliegue FullStack',
        description: 'Demostracion del flujo DevOps en GitLab para un aplicativo en desarrollo.',
        image: '/portfolio/ci-cd.jpg',
        demoUrl: ['https://gitlab.com/ralf02/lumen.headless.hotel/-/pipelines'],
        tags: ['GitLab CI/CD', 'AWS', 'Laravel', 'PHP', 'Node.js', 'Next.js']
      },
      {
        title: 'Despliegue Wep App FullStack',
        description: 'Demostracion del flujo DevOps en GitLab para una Web app.',
        image: '/portfolio/webapp.png',
        demoUrl: ['https://gitlab.com/ralf02/restaurant-flask-nextjs/-/pipelines'],
        tags: ['GitLab CI/CD', 'AWS', 'Docker', 'Python', 'Flask', 'PostgreSQL']
      },
      {
        title: 'Base Kubernetes',
        description: 'Configuración de cluster Kubernetes para desarrollo y producción.',
        image: '/portfolio/kub.jpg',
        demoUrl: ['https://github.com/ralf02/k8s-ansible-aws'],
        tags: ['K8s',  'AWS', 'Shell Scripting', 'Terraform', 'Ansible']
      },
    ],
    'Desarrollo Web': [
      {
        title: 'E-commerce Platform',
        description: 'Desarrollo e intervencion de plataforma de comercio electrónico con Next.js y Stripe.',
        image: '/portfolio/oils.png',
        demoUrl: [],
        tags: ['Next.js', 'Stripe', 'React']
      },
      {
        title: 'Local Tradeshow Server',
        description: 'Muestra de la implementacion de una versión local y offline de un sitio web Drupal, destinado a funcionar sin conexión en ferias comerciales.',
        image: '/portfolio/loc.jpg',
        demoUrl: ['https://github.com/ralf02/local-tradeshow-server'],
        tags: ['Drupal', 'PHP', 'MySQL', 'Shell', 'aws']
      },
      {
        title: 'Plataforma de Video en Línea',
        description: 'Desarrollo de APIs RESTful, Interfaz para la gestión de estadísticas y archivos multimedia para streaming.',
        image: '/portfolio/pvl.png',
        demoUrl: [],
        tags: ['ElasticSearch', 'Express', 'Laravel', 'PHP', 'MySQL', 'ReactJs','Bash','Docker']
      },
      {
        title: 'Prototipo reserva en restaurantes',
        description: 'Desarrollo de APIs RESTful con Flask, Interfaz para la gestión de resservas con Next.js.',
        image: '/portfolio/flask.png',
        demoUrl: ['https://gitlab.com/ralf02/restaurant-flask-nextjs'],
        tags: ['Flask', 'Next.js', 'Python', 'PostgreSQL', 'ReactJs','GitLab CI/CD','Docker']
      }
    ],
    'Laboratorios': [
      {
        title: 'Kubernetes Cluster',
        description: 'Configuración de cluster Kubernetes para desarrollo y producción.',
        image: '/portfolio/kub.jpg',
        demoUrl: ['https://github.com/ralf02/k8s-ansible-aws'],
        tags: ['Kubernetes', 'Ansible', 'AWS', 'Shell Scripting', 'Terraform']
      },
      {
        title: 'Agentes IA',
        description: 'Experimentos con modelos de IA generativa y Agentes IA para automatización. en mi sitio web puedes interactar por chat con el agente IA que creé',
        image: '/portfolio/agentes.jpg',
        demoUrl: ['https://github.com/ralf02/my.agent.widget', 'https://github.com/ralf02/forta.agent'],
        tags: ['Python', 'Node.js', 'OpenAI', 'FastAPI']
      },
      {
        title: 'Aplicaciones Móviles',
        description: 'Fase experimental con ReactNative y Node.js.',
        image: '/portfolio/mobile.jpg',
        demoUrl: [],
        tags: ['ReactNative', 'Node.js', 'Android', 'IOs']
      },
      {
        title: 'Aplicaciones Web',
        description: 'Fase experimental con Flask y Next.js.',
        image: '/portfolio/flask.png',
        demoUrl: ['https://gitlab.com/ralf02/restaurant-flask-nextjs'],
        tags: ['Flask', 'Next.js', 'Python', 'PostgreSQL','GitLab CI/CD','Docker']
      }
    ]
  };

  const nextSlide = () => {
    if (selectedPortfolio) {
      const items = portfolioDetails[selectedPortfolio.title];
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }
  };

  const prevSlide = () => {
    if (selectedPortfolio) {
      const items = portfolioDetails[selectedPortfolio.title];
      setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Work_Sans']">
      {/* Portfolio Modal */}
      {selectedPortfolio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-2xl max-h-[90vh] mx-4 bg-white rounded-lg shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 border-b">
              <h3 className="text-lg font-semibold text-gray-900">{selectedPortfolio.title}</h3>
              <button
                onClick={() => setSelectedPortfolio(null)}
                className="p-1 text-gray-500 transition-colors rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-3 overflow-y-auto max-h-[calc(90vh-8rem)]">
              <div className="relative">
                {/* Carousel */}
                <div className="relative overflow-hidden rounded-lg">
                  {selectedPortfolio && portfolioDetails[selectedPortfolio.title] && (
                    <>
                      <div className="relative aspect-video">
                        <img
                          src={portfolioDetails[selectedPortfolio.title][currentSlide].image}
                          alt={portfolioDetails[selectedPortfolio.title][currentSlide].title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-between p-2">
                        <button
                          onClick={prevSlide}
                          className="p-1.5 text-white rounded-full transition-colors bg-black/50 hover:bg-black/70"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="p-1.5 text-white rounded-full transition-colors bg-black/50 hover:bg-black/70"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex absolute right-0 left-0 bottom-2 gap-1.5 justify-center">
                        {portfolioDetails[selectedPortfolio.title].map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              currentSlide === index ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                {selectedPortfolio && portfolioDetails[selectedPortfolio.title] && (
                  <div className="mt-3">
                    <div className="flex items-start justify-between">
                      <div className='w-5/6'>
                        <h4 className="mb-1.5 text-lg font-semibold text-gray-900">
                          {portfolioDetails[selectedPortfolio.title][currentSlide].title}
                        </h4>
                        <p className="mb-2 text-sm text-gray-600">
                          {portfolioDetails[selectedPortfolio.title][currentSlide].description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {portfolioDetails[selectedPortfolio.title][currentSlide].tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs text-gray-700 bg-gray-100 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      {portfolioDetails[selectedPortfolio.title][currentSlide].demoUrl && portfolioDetails[selectedPortfolio.title][currentSlide].demoUrl.length > 0 ? (
                        <div className="flex flex-col gap-2">
                          {portfolioDetails[selectedPortfolio.title][currentSlide].demoUrl.map((url, idx) => (
                            <a
                              key={idx}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1 text-xs text-gray-700 transition-colors bg-gray-100 rounded-lg font-sm hover:bg-gray-200"
                            >
                              <Globe className="mr-1.5 w-4 h-4" />
                              Demo {portfolioDetails[selectedPortfolio.title][currentSlide].demoUrl.length > 1 ? idx + 1 : ''}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 text-sm font-medium text-gray-500 bg-gray-50 rounded-lg transition-colors">
                          <Lock className="mr-1.5 w-4 h-4" />
                          Private
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-center p-2 border-t">
              <span className="text-sm font-medium text-gray-600">- "Moliendo Café" ☕ -</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Social Menu */}
      <div className="fixed z-50 flex-col hidden gap-4 -translate-y-1/2 right-8 top-1/2 md:flex">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-12 h-12 text-white transition-colors bg-gray-900 rounded-full shadow-lg group hover:bg-red-600"
            aria-label={link.label}
          >
            <link.icon className="w-6 h-6" />
            <span className="absolute px-3 py-2 mr-3 text-sm font-medium text-white transition-all duration-200 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 right-full whitespace-nowrap group-hover:opacity-100">
              <span className="text-gray-400">{link.label}</span>
              <span className="mx-1 text-gray-500">:</span>
              <span className="text-white">{link.val}</span>
              <span className="absolute w-2 h-2 rotate-45 -translate-y-1/2 bg-gray-900 border-b border-r border-gray-700 -right-1 top-1/2"></span>
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Social Menu */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center gap-4 p-4 bg-gray-900 md:hidden">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-gray-800 rounded-full shadow-lg hover:bg-red-600"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gray-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <div className="container relative z-20 px-4 mx-auto text-center">
          <img
            src="/foto.jpg"
            alt="Foto de perfil"
            className="object-cover mx-auto mb-8 border-4 border-white rounded-full shadow-lg w-80 h-80"
          />
          <h1 className="mb-4 text-5xl font-bold text-white">Rafael Contreras</h1>
          <p className="text-xl text-gray-300">Systems Engineer | FullStack Developer | DevOps</p>
        </div>
      </section>

      <main className="container px-4 py-16 mx-auto">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Sobre mí</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <p className="mb-4">
              Software developer con sólida experiencia en el diseño, desarrollo y despliegue de aplicaciones.
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
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Skills Tecnológicos</h2>
          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'DevOps',
                icon: Server,
                skills: ['Docker Swarm', 'K8s', 'GitLab CI/CD', 'Vault', 'Linux', 'Ansible', 'Terraform']
              },
              {
                title: 'Backend',
                icon: Code2,
                skills: ['NestJS', 'Node.js', 'Laravel', 'PHP', 'Java SpringBoot', 'Python', 'FastAPI']
              },
              {
                title: 'Frontend',
                icon: Layout,
                skills: ['React', 'Next.js', 'TailwindCSS', 'shadcn/ui', 'JQuery', 'Bootstrap', 'ReactNative']
              },
              {
                title: 'Bases de Datos',
                icon: Database,
                skills: ['PostgreSQL', 'MariaDB', 'MongoDB', 'Supabase', 'ElasticSearch']
              },
              {
                title: 'Streaming',
                icon: Video,
                skills: ['Wowza Streaming Engine', 'Video.js', 'FFmpeg', 'Agora', 'Raspberry Pi']
              },
              {
                title: 'Testing y QA',
                icon: TestTube2,
                skills: ['Cypress', 'Postman', 'PhpUnit', 'Vegeta', 'Pytest']
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
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Portafolio</h2>
          <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedPortfolio(item)}
                className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer hover:shadow-lg"
              >
                <div className="relative aspect-video">
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
                title: 'Customization Internal Development Platform',
                company: 'IBM',
                items: [
                  'Extensión y desarrollo de componentes personalizados en Backstage, creando módulos reutilizables.',
                  'Automatización procesos DevOps e infraestructura, desarrollando un módulo para la creación automática de proyectos y tableros en Jira como también participando en el desarrollo del generador de Infraestructura como Código con Terraform y OpenIA.',
                ]
              },
              {
                title: 'Forward Deployed Engineer',
                company: 'LOGIC IDEAS',
                items: [
                  'Diseño y desarrollo soluciones de extremo a extremo para necesidades de negocio, construyendo aplicaciones web y móviles con React, React Native, FastAPI e integrando servicios de IA generativa (OpenAI y Gemini).',
                  'Integracion y extencion plataformas empresariales mediante desarrollos personalizados, creando plugins para WordPress/WooCommerce y soluciones de análisis automatizado de datos provenientes de redes sociales, transformando información en insights accionables para la toma de decisiones.'
                ]
              },
              {
                title: 'Plataforma CI/CD con Docker Swarm y GitLab',
                company: 'ILUMNO',
                items: [
                  'Implementación de CI/CD multiplataforma con GitLab Runner sin instalación local.',
                  'Automatización de despliegues en entornos dev/qa/uat.',
                  'Estrategia de tags, cleanup policies y rollback seguro.'
                ]
              },
              {
                title: 'Aplicaciones Web',
                company: 'BWIRED',
                items: [
                  'Desarrollo de dashboards e interfaces interactivas con Next.js, Angular y shadcn/ui.',
                  'Integración de APIs REST con Supabase y Stripe.'
                ]
              }
              ,
              {
                title: 'Sistema de Streaming Portable con Raspberry Pi',
                company: 'MULTISTREAM',
                items: [
                  'Desarrollo de sistema de transmisión estable online/offline usando Raspbian y Wowza/NGINX.',
                  'Gestión de medios locales y adaptación en entornos de baja conectividad.',
                  'Interfaz personalizada para usuarios móviles y de escritorio.'
                ]
              }
            ].map((exp, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <span className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
                    {exp.company}
                  </span>
                </div>
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

      <footer className="pt-10 pb-8 text-white bg-gray-900 border-t border-gray-800">
        <div className="container flex flex-col items-center gap-4 px-4 mx-auto">
          <p className="text-sm italic text-gray-300">Disponible para proyectos freelance, consultoría o contratación remota full time.</p>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Rafael Contreras</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
