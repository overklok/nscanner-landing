module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}},
        {elem: 'css', url: 'index.min.css'},
    ],
    scripts: [
        {elem: 'js', url: 'index.min.js'}
    ],
    content: [
        {
            block: 'slider',
            content: [
                {
                    elem: 'header',
                    mix: [{elem: 'row'}],
                    content: {
                        elem: 'header-text',
                        content: 'N-scanner.ru'
                    }
                },
                {
                    elem: 'colophon',
                    mix: [{elem: 'row'}],
                    content: [
                        {
                            block: 'selector',
                            js: true,
                            items: [
                                'Item 1',
                                'Item 2',
                                'Item 3'
                            ]
                        },
                        {
                            elem: 'colophon-text',
                            content: "Тысячи объявлений. Один клик."
                        }
                    ]
                },
                {
                    elem: 'pane',
                    mix: [{elem: 'row'}],
                    content: {
                        elem: 'button',
                        content: 'Подробнее'
                    }
                }
            ]
        },
        {
            block: 'description',
            content: [
                {
                    elem: 'row',
                    mix: [{ block: 'row'}],
                    content: [
                        {
                            elem: 'column',
                            mix: [{ block: 'col'}]
                        },
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'xs': '100', 'md': '60', 'xl': '70', 'off-tb': '40', 'off-xl': '30'}
                            }],
                            content: [
                                {
                                    block: 'hint',
                                    text: 'О нас'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'row',
                    mix: [{ block: 'row'}],
                    content: [
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'md': '40', 'xs': '100', 'xl': '30'}
                            }],
                            content: [
                                {
                                    elem: 'logo',
                                    url: 'images/logo.png'
                                }
                            ]
                        },
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'xs': '100', 'md': '60', 'xl': '70'}
                            }],
                            content: [
                                {
                                    elem: 'header',
                                    content: 'N-scanner.ru'
                                },
                                {
                                    elem: 'texts',
                                    texts: [
                                        'N-SCANNER - первый сервис, который помогает Вам экономить время на поиск ' +
                                        'коммерческой и жилой недвижимости. Мы собираем объявления с крупнейших в России сайтов ' +
                                        'в одном месте: на N-scanner.ru',

                                        'Поиск жилья в России еще никогда не был таким удобным.'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'benefits',
            content: [
                {
                    elem: 'row',
                    mix: [{block: 'row'}],
                    content: [
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'md': 'third'},
                            }],
                            content: [
                                {
                                    elem: 'image',
                                    elemMods: {'imgnum': '1'},
                                    url: 'images/benefits/1.jpg'
                                },
                                {
                                    elem: 'label',
                                    content: 'Тысячи объявлений'
                                }
                            ]
                        },
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'md': 'third'}
                            }],
                            content: [
                                {
                                    elem: 'image',
                                    elemMods: {'imgnum': '2'},
                                    url: 'images/benefits/2.jpg'
                                },
                                {
                                    elem: 'label',
                                    content: 'Быстрый поиск'
                                }
                            ]
                        },
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'md': 'third'}
                            }],
                            content: [
                                {
                                    elem: 'image',
                                    elemMods: {'imgnum': '3'},
                                    url: 'images/benefits/3.jpg'
                                },
                                {
                                    elem: 'label',
                                    content: 'Один клик'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'hint',
                    content: {
                        block: 'hint',
                        mods: {white: true},
                        text: 'Наши преимущества'
                    }
                }
            ]
        },
        {
            block: 'how',
            content: [
                {
                    elem: 'row',
                    mix: [{block: 'row'}],
                    content: [
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'xs': '100', 'md': '25'}
                            }],
                            content: [
                                {block: 'chart', bg_url: 'images/how/N-Navigatsia-01.png'},
                                {elem: 'comment', lines: ['Зайти на', 'N-scanner.ru']}
                            ]
                        },
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'xs': '100', 'md': '25'}
                            }],
                            content: [
                                {block: 'chart', bg_url: 'images/how/N-Navigatsia-02.png'},
                                {elem: 'comment', lines: ['Настроить', 'фильтр']}
                            ]
                        },
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'xs': '100', 'md': '25'}
                            }],
                            content: [
                                {block: 'chart', bg_url: 'images/how/N-Navigatsia-03.png'},
                                {elem: 'comment', lines: ['Выбрать', 'объявление']}
                            ]
                        },
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'xs': '100', 'md': '25'}
                            }],
                            content: [
                                {block: 'chart', bg_url: 'images/how/N-Navigatsia-04.png'},
                                {elem: 'comment', lines: ['Перейти на', 'сайт агентства']}
                            ]
                        }
                    ]
                },
                {
                    elem: 'subtitle',
                    mix: [{elem: 'row'}],
                    content: 'Новый сервис.'
                },
                {
                    elem: 'subtitle',
                    mix: [{elem: 'row'}],
                    content: 'Новые технологии поиска жилья'
                },
                {
                    elem: 'hint',
                    content: {
                        block: 'hint',
                        mods: {white: true},
                        text: 'Как это работает'
                    }
                }
            ]
        },
        {
            block: 'blog',
            content: [
                {
                    elem: 'row',
                    mix: [{block: 'row'}],
                    content: [
                        {
                            elem: 'header',
                            content: 'Последние новости'
                        }
                    ]
                },
                {
                    elem: 'row',
                    mix: [{block: 'row'}, {elem: 'posts'}],
                    content: [
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'xs': '100', 'md': 'third'}
                            }],
                            content: {
                                elem: 'post',
                                url: 'images/blog/1.png',
                                date: 'Октябрь, 10. 2018',
                                heading: 'Почему дорожает вторичка?',
                                text:   'Цены на вторичном рынке недвижимости столицы пошли в рост, а из экспозиции ' +
                                        'стали исчезать дешевые предложения, да и в целом объем... '
                            }
                        },
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'xs': '100', 'md': 'third'}
                            }],
                            content: {
                                elem: 'post',
                                url: 'images/blog/2.png',
                                date: 'Октябрь, 10. 2018',
                                heading: 'Проверка квартиры: как это?',
                                text:   'Быть беспечным в этом отношении нельзя, особенно если недвижимость ' +
                                        'подбирается на вторичном рынке. Мошеннические схемы...'
                            }
                        },
                        {
                            elem: 'column',
                            mix: [{
                                block: 'col',
                                mods: {'xs': '100', 'md': 'third'}
                            }],
                            content: {
                                elem: 'post',
                                url: 'images/blog/3.png',
                                date: 'Октябрь, 10. 2018',
                                heading: 'Собянин дал добро.',
                                text:   'Одобрены проекты на 79 тысяч квадратных метров недвижимости, из них 28 тысяч ' +
                                        '- производственные базы и складские помещения...'
                            }
                        }
                    ]
                },
                {
                    elem: 'hint',
                    content: {
                        block: 'hint',
                        text: 'Блог'
                    }
                }
            ]
        },
        {
            block: 'collab',
            content: [
                {
                    elem: 'row',
                    mix: [{block: 'row'}],
                    content: [
                        {
                            elem: 'header',
                            content: 'Давайте работать вместе'
                        },
                        {
                            elem: 'text',
                            content:    'Если вы представляете агенство недвижимости, ' +
                                        'свяжитесь с нами и мы выстроим удобную для Вас модель сотрудничества.'
                        },
                        {
                            elem: 'text',
                            content: 'Мы делаем поиск жилья в России быстрым, удобным и простым.'
                        },
                        {
                            elem: 'pane',
                            mix: [{elem: 'row'}],
                            content: {
                                elem: 'button',
                                content: 'Связаться'
                            }
                        }
                    ]
                },
                {
                    elem: 'hint',
                    content: {
                        block: 'hint',
                        mods: {white: true},
                        text: 'Сотрудничество'
                    }
                }
            ]
        },
        {
            block: 'footer',
            content: {
                elem: 'row',
                mix: [{block: 'row'}, {elem: 'posts'}],
                content: [
                    {
                        elem: 'column',
                        mix: [{
                            block: 'col',
                            mods: {'xs': '100', 'md': 'third'}
                        }],
                        content: {
                            elem: 'copyright',
                            content: '© 2018. Все права защищены.'
                        },
                    },
                    {
                        elem: 'column',
                        mix: [{
                            block: 'col',
                            mods: {'xs': '100', 'md': 'third'}
                        }],
                        content: {
                            elem: 'up',
                            content: 'Наверх'
                        }
                    },
                    {
                        elem: 'column',
                        mix: [{
                            block: 'col',
                            mods: {'xs': '100', 'md': 'third'}
                        }],
                        content: {
                            elem: 'icons',
                            icons: [
                                {img_url: 'images/icons/facebook.svg', href_url: 'https://facebook.com/'},
                                {img_url: 'images/icons/twitter.svg', href_url: 'https://twitter.com/'},
                                {img_url: 'images/icons/googleplus.svg', href_url: 'https://google.com/'},
                                {img_url: 'images/icons/behance.svg', href_url: 'https://behance.com/'},
                                {img_url: 'images/icons/pinterest.svg', href_url: 'https://pinterest.com/'},
                                {img_url: 'images/icons/instagram.svg', href_url: 'https://instagram.com/'}
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
