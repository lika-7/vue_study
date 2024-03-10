const withPrefix = (prefix, routes) =>
    routes.map((route) => {
        route.path = prefix + route.path;
        return route;
    });

const pageRouter = {
    path: "/",/*컴포넌트 경로*/
    name: "layout",/*컴포넌트 이름*/
    component: () => import("@/layout/index.vue"),/*컴포넌트 위치*/
    redirect: "/main",
    children: [
        {
            path: "/main",
            name: "main",
            component: () => import("@/views/main.vue"),
        },
        ...withPrefix("/book", [
            {
                path: "/",
                component: () => import("@/views/Books.vue")
            },
            {   name: "book",
                path: "/:tapId",
                component: () => import("@/views/Books.vue"),
            },
        ]),
        {
            path: "/reference",
            name: "reference",
            component: () => import("@/views/reference.vue"),
        },
        {
            path: "/movieclass",
            name: "movieclass",
            component: () => import("@/views/movieclass.vue"),
        },
        {
            path: "/classsample",
            name: "classsample",
            component: () => import("@/views/classsample.vue"),
        },
        {
            path: "/company",
            name: "company",
            component: () => import("@/views/company.vue"),
        },
    ],
};

export default pageRouter;