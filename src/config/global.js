export const global = {
  componenteFormativo: 'Fundamentos financieros para emprender',
  descripcionCurso:
    'Este componente formativo le permitirá al aprendiz comprender el presupuesto de costos, los estaos financieros y los indicadores financieros necesarios para determinar la viabilidad financiera del proyecto de emprendimiento y de esta forma tomar la decisión de poner en marcha la organización.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Presupuesto de costos',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Costos de producción',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Costo unitario',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Precio de venta',
          hash: 't_1_3',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Estados financieros',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Flujo de caja o efectivo',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Balance inicial ',
          hash: 't_2_2',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Indicadores financieros ',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '3.1',
          titulo: 'Punto de equilibrio',
          hash: 't_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.2',
          titulo: 'Tasa interna de oportunidad (TIO)',
          hash: 't_3_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.3',
          titulo: 'Valor actual neto (VAN) o valor presente neto (VPN)',
          hash: 't_3_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.4',
          titulo: 'Tasa interna de retorno (TIR)',
          hash: 't_3_4',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    //{
    //  nombreRuta: 'complementario',
    //  icono: 'far fa-folder-open',
    //  titulo: 'Material complementario',
    //},
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Tania Yaneth Ramírez Benítez',
      cargo: 'Soporte organizacional',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Martha Isabel Martínez Vargas',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
      centro: 'Centro de Comcercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: ['Adriana Rincón Avendaño', 'Carlos Julian Ramirez'],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Daniel Ricardo Mutis Gómez',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Brayan Stiven Pinto Diaz',
      cargo: ['Desarrollo front-end', 'Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Asensio del Aco, E., & Vazquez,B. (2016). Empresa e Iniciativa Emprendedora.Madrid.España: Paraninfo.',
  },
  {
    referencia:
      'Montero Moreno, C. (2014). Modelos Prácticos de Administración de Riegos. México: Ediciones Fiscales ISEF.',
  },
  {
    referencia:
      'Puchol, L.(2012). Dirección y Gestión de Recursos Humanos. Madrid-Buenos Aires - México: Díaz de Santos.',
  },
  {
    referencia:
      'Veiga,J.F.C.(2015). La Gestión Financiera de la Empresa. Madrid: Esic Editorial.',
  },
  {
    referencia:
      'Salazar, I.P. (2010). Guía Práctica para la identificación, formulación y evaluación de proyectos.Bogotá.Editorial Universidad del Rosario.',
  },
]

export const glosario = [
  {
    termino: 'Balance general',
    significado:
      'estado financiero que mide la riqueza de la firma en un instante.Se rige por el principio de partida doble, lo cual se expresa en un equilibrio que está dado por la siguiente ecuación: Activos - Pasivos = Patrimonio.',
  },
  {
    termino: 'Fuentes de financiamiento externas',
    significado:
      'obtención de recursos de fuentes ajenas a la empresa vía créditos bancarios o empréstitos de obligaciones, con costes financieros concretos y explícitos.',
  },
  {
    termino: 'Inversión',
    significado:
      'en su acepción más resumida y simple significa la formación e incremento neto de capital.A los efectos que a nosotros interesa, sería la diferencia de stock de capital existente entre dos intervalos de tiempo.Si tal diferencia es positiva, hablamos de inversión o generación bruta de capital; si fuere negativa,estaríamos ante un proceso de descapitalización o consumo de capital.',
  },
  {
    termino: 'Productividad',
    significado:
      'capacidad relativa de un determinado factor. Suele expresarse por el cociente entre el valor de lo producido y el coste de los recursos necesarios para ello.',
  },
  {
    termino: 'Riesgo financiero',
    significado:
      'riesgo derivado del endeudamiento que contrae la empresa, para hacer frente a sus operaciones típicas.',
  },
]

export const complementario = [
  {
    texto:
      'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
    tipo: 'Página web',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
    tipo: 'Artículo científico',
    link: 'https://www.google.com/',
  },
  {
    texto: 'Economía de Rosquilla. (s.f.).',
    tipo: 'Página web',
    link: 'https://www.google.com/',
  },
  {
    texto: '2 minutos para entender el desarrollo sostenible – Spanish',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
]
