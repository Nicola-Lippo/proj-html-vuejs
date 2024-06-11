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
        link: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-01.jpg",
        title: 'FABRICIO GUERRA',
        text: 'Commercial, Music Video.',
    },
    {
        link: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-02.jpg",
        title: 'A MESSAGE TO SPACE',
        text: 'Short Film',
    },
    {
        link: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-03.jpg",
        title: 'THE MOST BEAUTIFUL THING',
        text: 'Music Video',
    },],
    aboutImgTeam: [{
        link: "	https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Team-01.jpg",
        name: 'FABRICIO GUERRA',
        text: 'Main Director',
    },
    {
        link: "	https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Team-02.jpg",
        name: 'UMBERTO PAGODA',
        text: 'Main Writer',
    },
    {
        link: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Team-03.jpg",
        name: 'GLORIA RICCASSO',
        text: 'Main Producer',
    },
    {
        link: "	https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Team-04.jpg",
        name: 'LIO NAPOIN',
        text: 'Cameraman',
    },]

}


)