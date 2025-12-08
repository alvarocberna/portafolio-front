
export const data = {
    portada: {
        foto: '/imgs/img-portada-5.jpg'
    },
    perfilPersonal: {
        descripcion: [
            'Mi nombre es Álvaro Cañete Berna, tengo 30 años y vivo en Viña del Mar.',
            'Soy titulado de la carrera Analista Programador Computacional de DuocUC (2025), aprobando con tres sellos de distinción.',
            'También, soy nutricionista egresado de la Universidad de Valparaíso (2019), carrera que ejerzo hasta el día de hoy.',
        ]
    },
    tecnologias: [
        {
            titulo: 'Lenguajes',
            color: '#2E86C1',
            detalle: [
                { tecnologia: 'Python', valor: 2 },
                { tecnologia: 'Javascript', valor: 3 },
                { tecnologia: 'Typescript', valor: 3 },
            ]
        },
        {
            titulo: 'Base de datos & Nube',
            color: '#D5BFA3',
            detalle: [
                { tecnologia: 'Oracle', valor: 3 },
                { tecnologia: 'Postgresql', valor: 2 },
                { tecnologia: 'MySQL', valor: 2 },
                { tecnologia: 'Certificado en AWS <en curso>', valor: 2 },

            ]
        },
        {
            titulo: 'Frontend',
            color: '#F4B266',
            detalle: [
                { tecnologia: 'HTML', valor: 2 },
                { tecnologia: 'CSS', valor: 2 },
                { tecnologia: 'React', valor: 2 },
                { tecnologia: 'NextJS', valor: 2 },
                // { tecnologia: 'Angular', valor: 2 },
                { tecnologia: 'Bootstrap', valor: 2 },
                { tecnologia: 'Tailwind', valor: 2 },
                { tecnologia: 'SEO', valor: 3 },

            ]
        },
        {
            titulo: 'Backend',
            color: '#3e3e3e',
            detalle: [
                { tecnologia: 'Nodejs', valor: 3 },
                { tecnologia: 'Express', valor: 2 },
                { tecnologia: 'Nestjs', valor: 2 },
                { tecnologia: 'Django', valor: 2 },
                { tecnologia: 'Docker', valor: 2 },
                { tecnologia: 'Postman', valor: 2 },
                { tecnologia: 'Jest', valor: 1 },
                { tecnologia: 'APIs-REST', valor: 2 },

            ]
        },
        {
            titulo: 'Otras tecnologías & herramientas',
            color: '#5DADE2',
            detalle: [
                { tecnologia: 'Git', valor: 3 },
                { tecnologia: 'Github', valor: 3 },
            ]
        },
    ],
    proyectos: [
        {
            titulo: 'Nutriapp - app web',
            descripcion: 'Aplicación de uso médico para el registro de pacientes y sus datos médicos. Proyecto desarrollado con los frameworks nextjs y nestj en base al lenguaje typescript con base de datos relacional (postgresql). Frontend: organización feature-based. Backend: arquitectura limpia, separando el proyecto en capas. Auth: En base a JWT. DB: multi-tenant con esquemas compartidos.',
            tecnologias: [
                'Typescript',
                'Nodejs',
                'Express'
            ],
            imgProyecto: '/imgs/img_nutriapp.png',
            linkProyecto: 'https://www.youtube.com/watch?v=v68JUz08VYs&t=28s',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://google.com'
        },
        {
            titulo: 'Servidor de correo electrónico',
            descripcion: 'Servidor backend dedicado al envío de correo electrónio (utilizado en la página web actual). Implementación de librería express y servicio resend.',
            tecnologias: [
                'Typescript',
                'Nodejs',
                'Express'
            ],
            imgProyecto: '/imgs/img_code.jpg',
            linkProyecto: 'https://github.com/alvarocberna/Portafolio-Back.git',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://github.com/alvarocberna/Portafolio-Back.git'
        },
        {
            titulo: 'Nutreactivo - página web',
            descripcion: 'Página web de uso profesional. Desarrollado con la tecnología nextjs.',
            tecnologias: [
                'Javascript',
                'Nextjs',
                'Bootstrap'
            ],
            imgProyecto: '/imgs/img_proyecto_nutreactivo.png',
            linkProyecto: 'https://www.nutreactivo.cl/',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://github.com/alvarocberna/Nutreactivo_front.git'
        },
        {
            titulo: 'Pacific Reef - app web',
            descripcion: 'Sistema de reserva hotelera (desarrollado en el ramo de Desarrollo de Software). Sistema: Desarrollado con el framework Django en base al lenguaje Pyton, aplicando patrón MVC. DB: En base a postgresql.',
            tecnologias: [
                'Python',
                'Django',
                'Oracle'
            ],
            imgProyecto: '/imgs/img_proyecto_pacificreef.png',
            linkProyecto: 'https://www.youtube.com/watch?v=sNWwz6P1fgs',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://github.com/alvarocberna/ProjectPacificReef.git'
        },
        {
            titulo: 'Ciclolegal - página web',
            descripcion: 'Proyecto web para el equipo de abogados Ciclolegal. Desarrollado con el framework nextjs y lenguaje typescript.',
            tecnologias: [
                'Javascript',
                'Nextjs',
                'Bootstrap'
            ],
            imgProyecto: '/imgs/img_proyecto_ciclolegal.png',
            linkProyecto: 'https://ciclolegal.cl/',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://github.com/alvarocberna/Ciclolegal_front.git'
        }
    ],
    contacto: {
        descripcion: 'Información de contacto:',
        infoContacto: [
            {
                icon: '/imgs/img_wtsp.png',
                direccion: '+56981620295',
                link: 'https://api.whatsapp.com/send?phone=56981620295'
            },
            {
                icon: '/imgs/img_mail.png',
                direccion: 'cberna.alvaro@gmail.com',
                link: 'mailto:cberna.alvaro@gmail.com'
            }
        ]
    }
}
