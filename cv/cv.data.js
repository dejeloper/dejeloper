/**
 * Única fuente de verdad del CV.
 * Edita solo este archivo: la maquetación se genera sola.
 */
const CV = {
  foto: "https://www.dejeloper.com/images/me_03.webp",
  nombre: "Jhonatan",
  apellido: "Guerrero",
  titulo: "Fullstack Engineer | AI-Assisted Development | Cloud & DevOps",

  contacto: [
    { icono: "phone", texto: "3138227185" },
    {
      icono: "mail",
      texto: "jhonatanguerrero@outlook.com",
      url: "mailto:jhonatanguerrero@outlook.com",
    },
    { icono: "pin", texto: "Mosquera, Colombia" },
    { icono: "user", texto: "34 años" },
    {
      icono: "linkedin",
      texto: "@dejeloper",
      url: "https://www.linkedin.com/in/dejeloper/",
    },
    {
      icono: "github",
      texto: "@dejeloper",
      url: "https://github.com/dejeloper",
    },
    {
      icono: "web",
      texto: "dejeloper.com",
      url: "https://dejeloper.com",
    },
  ],

  perfil:
    "Ingeniero de sistemas con experiencia en desarrollo fullstack y construcción de soluciones " +
    "empresariales. Con experiencia en C#, Angular, PostgreSQL y prácticas DevOps en entornos " +
    "Cloud. He participado en el diseño y evolución de plataformas de negocio, automatización de " +
    "despliegues e integración continua, trabajando en soluciones orientadas a escalabilidad, " +
    "mantenimiento y modernización tecnológica.",

  experiencia: [
    {
      empresa: "Telefónica (Movistar)",
      cargo: "Fullstack Developer",
      periodo: "Sept 2019 - Jun 2026",
      parrafos: [
        "Desde 2019 desarrollé aplicaciones empresariales utilizando C#, Angular y PostgreSQL, participando en la implementación de funcionalidades, diseño de soluciones y decisiones relacionadas con arquitectura y despliegue. Trabajé en sistemas orientados a operación productiva bajo principios de Clean Architecture, con foco en mantenibilidad y evolución de las soluciones.",
        "Implementé y mantuve procesos de integración y despliegue continuo mediante Azure DevOps, configurando pipelines CI/CD para entornos de prueba y producción e integrando flujos de despliegue con Kubernetes y ArgoCD.",
        "Entre los proyectos en los que participé se encuentra un Hub de Identidad orientado al cumplimiento regulatorio, donde intervine en el desarrollo, diseño de arquitectura y construcción del frontend. También participé en una plataforma de gestión de turnos, contribuyendo al diseño de la comunicación en tiempo real mediante sockets y a decisiones técnicas de arquitectura.",
      ],
    },
    {
      empresa: "",
      cargo: "Software Engineer — Proyecto independiente",
      periodo: "2018 - 2025",
      parrafos: [
        "Desarrollé de extremo a extremo un sistema de gestión de clientes y cobranzas, desde el modelado de datos y backend hasta el frontend y despliegue. El proyecto surgió de la necesidad de reemplazar procesos operativos basados en Excel por una plataforma centralizada para la gestión de múltiples empresas.",
        "Diseñé e implementé una arquitectura multi-tenant y desarrollé funcionalidades para automatizar procesos de facturación, pagos en cuotas, generación de recibos y seguimiento de cobranzas. La plataforma fue desplegada en producción y utilizada por usuarios de diferentes empresas, evolucionando mediante nuevas funcionalidades, mantenimiento y soporte según las necesidades del negocio.",
        "La solución fue desarrollada con PHP, Laravel y MySQL y se mantuvo en operación durante varios años, pasando de una solución inicialmente orientada a un proceso específico a una plataforma capaz de soportar diferentes empresas y flujos de operación.",
      ],
    },
  ],

  formacion: [
    {
      institucion: "Corporación Unificada Nacional - CUN - Bogotá",
      titulo: "Ingeniero de Sistemas",
      periodo: "2009 - 2019",
    },
    {
      institucion: "Smart Academia de Idiomas",
      titulo: "Formación en Inglés",
      periodo: "2025 - Actualmente",
    },
  ],

  // Niveles sugeridos: "Experto" · "Excelente" · "Buen manejo" · "Básico".
  // Ordena de mayor a menor dominio: lo primero es lo que más se lee.
  tecnologias: [
    {
      categoria: "Backend",
      filas: [
        { items: ["C#", ".NET", "API REST"], nivel: "Experto" },
        { items: ["PHP", "Laravel"], nivel: "Excelente" },
        { items: ["Node.js", "Python", "Java"], nivel: "Buen manejo" },
      ],
    },
    {
      categoria: "Frontend",
      filas: [
        { items: ["Angular", "TypeScript"], nivel: "Experto" },
        { items: ["React", "Next.js", "Astro"], nivel: "Buen manejo" },
      ],
    },
    {
      categoria: "Bases de datos",
      filas: [
        { items: ["PostgreSQL", "MySQL"], nivel: "Experto" },
        { items: ["MongoDB"], nivel: "Básico" },
      ],
    },
    {
      categoria: "Arquitectura",
      filas: [
        { items: ["Multi-tenant"], nivel: "Experto" },
        {
          items: ["Clean Architecture", "Modelado de datos"],
          nivel: "Excelente",
        },
        { items: ["Patrones de diseño"], nivel: "Básico" },
      ],
    },
    {
      categoria: "Testing",
      filas: [
        { items: ["xUnit", "PHPUnit", "Vitest"], nivel: "Experto" },
        { items: ["Playwright"], ambito: "E2E", nivel: "Básico" },
      ],
    },
    {
      categoria: "DevOps & Cloud",
      filas: [
        { items: ["Azure DevOps", "CI/CD"], nivel: "Experto" },
        { items: ["Kubernetes", "ArgoCD"], nivel: "Buen manejo" },
      ],
    },
  ],

  blandas: ["Trabajo en equipo", "Liderazgo", "Comunicación", "SCRUM"],

  idiomas: [
    { nombre: "Español", nivel: "Nativo" },
    { nombre: "Inglés", nivel: "A2 certificado y B1 en progreso" },
  ],
};
