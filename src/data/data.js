import AstroIcon from '../icons/AstroIcon.astro';
import ExpressIcon from '../icons/ExpressIcon.astro';
import FastApiIcon from '../icons/FastApiIcon.astro';
import MongoDBIcon from '../icons/MongoDBIcon.astro';
import NextJS from '../icons/NextJS.astro';
import NodeJsIcon from '../icons/NodeJsIcon.astro';
import PythonIcon from '../icons/PythonIcon.astro';
import ReactIcon from '../icons/ReactIcon.astro';
import TailwindIcon from '../icons/TailwindIcon.astro';

const ICONS_CONFIG = {
    ASTRO: {
        icon: AstroIcon,
        styles: 'bg-orange-400/80',
        text: 'Astro',
    },
    REACT: {
        icon: ReactIcon,
        styles: 'bg-blue-600/90',
        text: 'React',
    },
    NEXT: {
        icon: NextJS,
        styles: 'bg-blue-200',
        text: 'NextJS',
    },
    TAILWIND: {
        icon: TailwindIcon,
        styles: 'bg-blue-600/50',
        text: 'Tailwind CSS',
    },
    EXPRESS: {
        icon: ExpressIcon,
        styles: 'bg-slate-600 text-white bg-opacity-20',
        text: 'Express',
    },
    PYTHON: {
        icon: PythonIcon,
        styles: 'bg-yellow-500 text-slate-900',
        text: 'Python',
    },
    MONGODB: {
        icon: MongoDBIcon,
        styles: 'bg-green-400/80',
        text: 'MongoDB',
    },
    FASTAPI: {
        icon: FastApiIcon,
        styles: 'bg-[#009485]/60',
        text: 'FastAPI',
    },
    RECHARTS: {
        icon: ReactIcon,
        styles: 'bg-blue-600',
        text: 'Recharts',
    },
    NODE: {
        icon: NodeJsIcon,
        styles: 'bg-green-700',
        text: 'NodeJS',
    },
};

export const projectsData = [
    {
        id: 1,
        title: 'Billetera Virtual',
        date: '2021',
        languages: [
            ICONS_CONFIG.REACT,
            ICONS_CONFIG.NODE,
            ICONS_CONFIG.EXPRESS,
            ICONS_CONFIG.MONGODB,
            ICONS_CONFIG.TAILWIND,
        ],
        description:
            'Billetera Virtual para la transacción de dinero entre usuarios. Brindando un dashboard para el control de las transacciones y el saldo de la cuenta.',
        img: import('../assets/WarrenBank.png'),
        link: 'https://anderson.d301togxhux3st.amplifyapp.com/',
        github: 'https://github.com/No-Country/c14-10-n-node-react',
    },
    {
        id: 2,
        title: 'StreamView',
        date: '2021',
        languages: [
            ICONS_CONFIG.REACT,
            ICONS_CONFIG.NODE,
            ICONS_CONFIG.TAILWIND,
            ICONS_CONFIG.EXPRESS,
            ICONS_CONFIG.MONGODB,
        ],
        description:
            'Aplicación que facilita al usuario saber en que plataformas de streaming se encuentra disponible una película o serie.',
        img: import('../assets/StreamView.png'),
        link: 'https://s12-07-n-node-react.vercel.app/',
    },
    {
        id: 3,
        title: 'Atack Heart',
        date: '2021',
        languages: [
            ICONS_CONFIG.ASTRO,
            ICONS_CONFIG.PYTHON,
            ICONS_CONFIG.TAILWIND,
            ICONS_CONFIG.FASTAPI,
        ],
        description:
            'Aplicacion web que permite al usuario conocer su riesgo de sufrir un ataque al corazón usando un algoritmo de machine learning.',
        img: import('../assets/heart-attack.png'),
        link: 'https://heart-attack-steel.vercel.app/',
    },
    {
        id: 4,
        title: 'Nike Web Clon',
        date: '2023',
        languages: [ICONS_CONFIG.REACT, ICONS_CONFIG.TAILWIND],
        description:
            'Clon de la página web de Nike, con el objetivo de mejorar mis habilidades en el desarrollo web.',
        img: import('../assets/NikeWebClone.png'),
        link: 'https://nike-web-clon.vercel.app',
        github: 'https://github.com/valec3/Nike-web-clon',
    },
    {
        id: 5,
        title: 'AutoFix',
        date: '2023',
        languages: [ICONS_CONFIG.REACT, ICONS_CONFIG.TAILWIND],
        description:
            'Landin page de un taller de reparación de autos, con distintas secciones para mostrar los servicios que se ofrecen',
        img: import('../assets/AutoFix.png'),
        link: 'https://valec3.github.io/Repair_Auto',
        github: 'https://github.com/valec3/Repair_Auto',
    },
    {
        id: 6,
        title: 'SportPlay',
        date: '2023',
        languages: [ICONS_CONFIG.REACT, ICONS_CONFIG.TAILWIND],
        description:
            'Aplicacion para gestionar torneos de futbol, con la posibilidad de crear torneos, equipos y jugadores.',
        img: import('../assets/SportPlay.png'),
        link: 'https://spor7play.vercel.app',
        github: 'https://github.com/valec3/SportPlay',
    },
    {
        id: 7,
        title: 'Triplt: Travel App',
        date: '2023',
        languages: [ICONS_CONFIG.REACT, ICONS_CONFIG.TAILWIND],
        description:
            'Landin page de una aplicación de viajes, con distintas secciones para mostrar los servicios que se ofrecen',
        img: import('../assets/Triplt.png'),
        link: 'https://valec3.github.io/invent_website_app_TripIt',
        github: 'https://github.com/valec3/invent_website_app_TripIt',
    },
];
