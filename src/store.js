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
    aboutImg: [{

        link: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-01.jpg"
    },
    {

        link: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-02.jpg",
    },
    {

        link: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-03.jpg"
    },],
}


)