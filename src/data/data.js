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
        styles: 'bg-blue-200',
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
        title: 'Billeta Virtual',
        date: '2021',
        languages: [
            ICONS_CONFIG.REACT,
            ICONS_CONFIG.NODE,
            ICONS_CONFIG.TAILWIND,
            ICONS_CONFIG.EXPRESS,
            ICONS_CONFIG.MONGODB,
            ICONS_CONFIG.RECHARTS,
        ],
        description:
            'Billetera Virtual para la transacción de dinero entre usuarios. Brindando un dashboard para el control de las transacciones y el saldo de la cuenta. Desarrollada po a un equipo de 3 personas en una emulación laboral de No Country',
        img: import('../assets/WarrenBank.jpg'),
        link: 'https://anderson.d301togxhux3st.amplifyapp.com/',
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
        img: import('../assets/StreamView.jpg'),
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
];
