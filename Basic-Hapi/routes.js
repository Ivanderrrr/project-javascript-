const routes = [
    {
        method: 'GET', 
        path: '/', 
        handler: (request, h) => {
            return 'Homepage';
        }, 
    },
    {
        method: '*',
        path: '/', 
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut.';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },
    {
        method: '*', // route dapat diakses mnggnkn seluruh method pd HTTP.
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut.';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "Stranger" } = request.params;
            const { lang } = request.query;

            if(lang === 'id'){
                return `Hi, ${name}!`;
            }
            
            return `Hello, ${name}!`;
        },
    },
    {
        method: '*',
        path: '/{any*}', // menangani permintaan path yang blm ditentukan.
        handler: (request, h) => {
            return 'Halaman tidak ditemukan.';
        },
    },
];

module.exports = routes