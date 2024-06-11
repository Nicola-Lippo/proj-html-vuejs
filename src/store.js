import { reactive } from "vue";

export const store = reactive({
    header: [{
        name: 'HOME',
        link: "/src/pages/AppHome.vue"
    },
    {
        name: 'BLOG',
    },
    {
        name: 'PAGES',
    },
    {
        name: 'ABOUT',
    },
    {
        name: 'CONTACTS',
        link: "/src/pages/AppContacts.vue"
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