export interface IProject {
    name: string;
    id: string;
    images: string[];
    description: string;
    github: string;
    website?: string;
}

interface MyProjects {
    myProjects: IProject[];

}

export interface ICertificate {
    id: string;
    imagen: string;
    name: string;
}

interface MyCerticate {
    myCertificate: ICertificate[];
}

export const certificates: MyCerticate = {
    myCertificate: [
        {
            id: '2',
            name: "Certificado",
            imagen: "/certificado.png",
        },

        {
            id: '1',
            name: "React Native",
            imagen: "/ReactNative.jpg",
        },

        {
            id: '3',
            name: "TansTackQuery",
            imagen: "/query.jpg",
        },
        {
            id: '4',
            name: "TypeScript",
            imagen: "/TypeScript.jpg",
        },
        {
            id: '5',
            name: "TailwindCSS",
            imagen: "/Tailwind.jpg",
        },

    ]
};

export const projects: MyProjects = {
    myProjects: [
        {
            id: "1",
            name: "closet",
            images: ["/closet-Shop/shop02.png", "/closet-Shop/shop01.png"],
            description: 'Closet-Shop | E-Commerce. Creado desde cero, implementando las mejores prácticas, con Next.js, TypeScript, mongoDB, Docker y NextAuth.',
            github: 'https://github.com/aristiguetam/closet-shop',
            website: 'https://closet-shop-production.up.railway.app/'
        },

        {
            id: "2",
            name: "workmatch",
            images: ["/workmatch/workmatch01.png", "/workmatch/workmatch02.png"],
            description: 'Work-Match | Freelancer, creada desde cero en un grupo de 8 personas, en la cual me desempeñe en el Front End implementando creativos diseños y autenticaciones de usuarios con Auth0, JavaScript, PostgreSQL y Sequelize.',
            github: 'https://github.com/aristiguetam/Work-Match',
            website: 'https://work-match-client.vercel.app/'
        },
        {
            id: "3",
            name: "food",
            images: ["/foodClone/food01.jpg", "/foodClone/food02.jpg"],
            description: 'Food Clone | Clone de comidas, creado desde cero, implementando React Native Expo, JavaScript, Sanity, GoogleMaps.',
            github: 'https://github.com/aristiguetam/clone-food'
        },
        {
            id: "4",
            name: "jira",
            images: ["/Jira/jira01.png", "/Jira/jira02.png"],
            description: 'Jira |Clone Jira. Creado desde cero con Next.js, TypeScript, MongoDB y Docker, implementando diseño con Material-UI, obteniendo como resultado una interfaz de usuario bastante intuitiva y elegante.',
            github: 'https://github.com/aristiguetam/jiraclone'
        },
    ]
}
