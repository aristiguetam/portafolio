export interface IProject {
    name       : string;
    id         : string;
    images     : string[];
    description: string;
}

interface MyProjects {
    MyProjects: IProject[];

}

export const projects: MyProjects = {
    MyProjects: [
        {
            id: "1",
            name: "closet",
            images: ["/closet-shop/shop02.png", "/closet-shop/shop01.png"],
            description: 'Closet-Shop | E-Commerce. Creado desde cero, implementando las mejores prácticas, con Next.js, TypeScript, mongoDB, Docker y NextAuth.',
        },
       
        {
            id: "2",
            name: "workmatch",
            images: ["/workmatch/workmatch01.png", "/workmatch/workmatch02.png"],
            description: 'Work-Match | Freelancer, creada desde cero en un grupo de 8 personas, en la cual me desempeñe en el Front End implementando creativos diseños y autenticaciones de usuarios con Auth0, JavaScript, PostgreSQL y Sequelize.',
        },
        {
            id: "3",
            name: "food",
            images: ["/foodClone/food01.jpg", "/foodClone/food02.jpg"],
            description: 'Food Clone | Clone de comidas, creado desde cero, implementando React Native Expo, JavaScript, Sanity, GoogleMaps.',
        },
        {
            id: "4",
            name: "jira",
            images: ["/jira/jira01.png", "/jira/jira02.png"],
            description: 'Jira |Clone Jira. Creado desde cero con Next.js, TypeScript, MongoDB y Docker, implementando diseño con Material-UI, obteniendo como resultado una interfaz de usuario bastante intuitiva y elegante.',
        },



    ]
}
