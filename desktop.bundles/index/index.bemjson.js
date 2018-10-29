module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    content: [
        {
            block: 'slider',
            content: [
                {
                    elem: 'header',
                    content: {
                        elem: 'header-text',
                        content: 'N-scanner.ru'
                    }
                },
                {
                    elem: 'colophon',
                    content: {
                        elem: 'colophon-text',
                        content: "Тысячи объявлений. Один клик."
                    }
                },
                {
                    elem: 'button',
                    content: 'Подробнее'
                }
            ]
        },
    ]
};
