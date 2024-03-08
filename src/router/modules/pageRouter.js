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
        {
            path: "/book",
            name: "book",
            component: () => import("@/views/Books.vue"),
        },
    ],
};

export default pageRouter;