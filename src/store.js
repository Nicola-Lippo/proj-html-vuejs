import { reactive } from "vue";

export const store = reactive({
    header: [{
        name: 'HOME',
        link: "/"
    },
    {
        name: 'BLOG',
    },
    {
        name: 'PAGES',
    },
    {
        name: 'ABOUT',
        link: "/About",
    },
    {
        name: 'CONTACTS',
        link: "/Contacts"
    },
    {
        name: 'GALLERY',
    },
    {
        name: 'SHOP',
    },
    ],
}


)