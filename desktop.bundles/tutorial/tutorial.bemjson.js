module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'tutorial.min.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    content: [
        {
            block: 'head',
            mix: [{ block: 'box', js: true }],
            content: [
                {
                    block: 'layout',
                    content: [
                        {
                            elem: 'left',
                            content: {
                                tag: 'form',
                                attrs: {action: 'https://yandex.ru/yandsearch'},
                                content: [
                                    {
                                        block: 'input',
                                        name: 'text',
                                        val: 'Find'
                                    },
                                    {
                                        block: 'button',
                                        mods: {type: 'submit'},
                                        content: 'Search'
                                    }
                                ]
                            }
                        },
                        {
                            elem: 'right',
                            content: {
                                block: 'logo',
                                content: [
                                    {
                                        block: 'link',
                                        url: 'https://ru.bem.info',
                                        content: [
                                            {
                                                block: 'image',
                                                url: '//varya.me/online-shop-dummy/desktop.blocks/b-logo/b-logo.png'
                                            },
                                            {
                                                elem: 'slogan',
                                                content: 'A new way of thinking'
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    block: 'box',
                    elem: 'switcher'
                }
            ]
        },
        {
            block: 'goods',
            goods: [
                {
                    title: 'iPhone 7 128Gb',
                    image: 'https://www.91-img.com/pictures/apple-iphone-7-128gb-mobile-phone-large-1.jpg',
                    price: '47 000',
                    url: '/'
                },
                {
                    title: 'Samsung Galaxy A7 32Gb',
                    image: 'https://images-na.ssl-images-amazon.com/images/I/61eLjHiSlXL._SX385_.jpg',
                    price: '26 000',
                    url: '/'
                }
            ]
        }
    ]
};
