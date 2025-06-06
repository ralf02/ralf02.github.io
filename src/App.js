import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6">
      <header className="text-center py-10">
        <img
          src="/foto.jpg"
          alt="Foto de perfil"
          className="mx-auto rounded-full w-32 h-32 object-cover shadow-md scale-125"
        />
        <h1 className="text-4xl font-bold mt-4">Rafael Contreras</h1>
        <p className="text-gray-600 mt-2">Software Engineer | DevOps | FullStack Developer | PHP | Node.js | Java</p>
      </header>

      <main className="max-w-3xl mx-auto space-y-12 mt-8">
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-2">Sobre mí</h2>
          <p>Hola mundo, soy desarrollador web con sólida de experiencia en el diseño, desarrollo y despliegue de aplicaciones. Domino stacks como LEMP, MEAN y Java SpringBoot, tengo experiencia en DevOps con Docker y GitLab CI/CD.</p>
          <p>He trabajado en proyectos de alto impacto, optimizando pipelines de integración y entrega continua, construyendo soluciones robustas y adaptadas a entornos de desarrollo, calidad y producción.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Habilidades en Stacks Tecnológicos
          </h2>
          <ul className="list-disc list-inside grid gap-1 text-sm">
              <li>
                <strong>DevOps:</strong> Docker, Docker Swarm, K8s, GitLab CI/CD, Vault, NGINX, Linux (Debian, CentOS)
              </li>
              <li>
                <strong>Backend:</strong> NestJS, Node.js, Express, Laravel, PHP, Java SpringBoot
              </li>
              <li>
                <strong>Frontend:</strong> React, Next.js, TailwindCSS, shadcn/ui, Angular
              </li>
              <li>
                <strong>Bases de Datos:</strong> PostgreSQL, MariaDB, MongoDB, Supabase, ElasticSearch
              </li>
              <li>
                <strong>Streaming:</strong> Wowza Streaming Engine, Video.js, FFmpeg
              </li>
              <li>
                <strong>Testing y QA:</strong> Cypress, Postman, PhpUnit, Vegeta
              </li>
              <li>
                <strong>Herramientas extra:</strong> Git, GitLab, Terraform, Ansible
              </li>
            </ul>
        </section>

        <section>

              <h2 className="text-xl font-semibold border-b pb-1 border-gray-300 dark:border-gray-600">
                Experiencia Destacada
                </h2>

              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="text-lg font-bold">Plataforma CI/CD con Docker Swarm y GitLab</h3>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-700 dark:text-gray-300">
                    <li>Implementación de CI/CD multiplataforma con GitLab Runner sin instalación local.</li>
                    <li>Automatización de despliegues en entornos dev/qa/uat.</li>
                    <li>Estrategia de tags, cleanup policies y rollback seguro.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Sistema de Streaming Portable con Raspberry Pi</h3>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-700 dark:text-gray-300">
                    <li>Desarrollo de sistema de transmisión estable online/offline usando Raspbian y Wowza/NGINX.</li>
                    <li>Gestión de medios locales y adaptación en entornos de baja conectividad.</li>
                    <li>Interfaz personalizada para usuarios móviles y de escritorio.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Aplicaciones Web</h3>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-700 dark:text-gray-300">
                    <li>Desarrollo de dashboards e interfaces interactivas con Next.js, Angular y shadcn/ui.</li>
                    <li>Integración de APIs REST con Supabase y Stripe.</li>
                  </ul>
                </div>
              </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-1 border-gray-300 dark:border-gray-600">Contacto</h2>
          <ul className="mt-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Email:</strong> rafael.contreras@mail.faba.edu.co</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/ralf02" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/ralf02</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/rafiko" className="text-blue-600 dark:text-blue-400 hover:underline">linkedin.com/in/rafiko</a></li>
          </ul>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-12">
        © {new Date().getFullYear()} Rafael Contreras
      </footer>
    </div>
  );
}

export default App;
