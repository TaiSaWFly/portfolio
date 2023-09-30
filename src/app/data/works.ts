import { IWork } from "../ts/IWork";

export const works: IWork[] = [
    {
        _id: "1",
        name: "Anak Tournament Statistics",
        description:
            "Приложение для отображения статистики турниров по Overwatch стримера Anak. Сама идея перенести действующую статистику с Google Exel (исходник: https://docs.google.com/spreadsheets/d/1eqIpTxPxAeen23CN9XDChg_-mTmXCJtpdkDF8B1Os-8/edit#gid=255048783) в удобный интерфейс отображения. Написан код для записи данных в БД Firebase, запись выполняется при изменении документа. API не совершенен и будет полностью изменён. Реализован функционал поиска игрока и отображения его статистики. Просмотр и подсчёт по конкретному турниру (кол-во команд, сыгранных карт, матчей и тд). Отображение статистики игроков ТОП-20. Для отображения графиков используется библиотека Chart.js. Приложение запоминает состояние поиска с записью в localStorage. Подключен Google Analytics. Приложение добавляется новыми фичами и обновляется.",
        imgUrls: [
            "assets/images/works/anak-tournament-statistics/ats-1.jpg",
            "assets/images/works/anak-tournament-statistics/ats-2.jpg",
            "assets/images/works/anak-tournament-statistics/ats-3.jpg",
            "assets/images/works/anak-tournament-statistics/ats-4.jpg",
            "assets/images/works/anak-tournament-statistics/ats-5.jpg",
            "assets/images/works/anak-tournament-statistics/ats-6.jpg",
            "assets/images/works/anak-tournament-statistics/ats-7.jpg"
        ],
        tags: [
            "React",
            "Redux",
            "TypeScript",
            "ESLint",
            "SCSS",
            "Chart.js",
            "TanStack Table",
            "Firebase",
            "Google Analytics"
        ],
        repository: "https://github.com/TaiSaWFly/tournament-statistics",
        url: "https://tournament-statistics.vercel.app/"
    },
    {
        _id: "2",
        name: "Hazy Shade",
        description:
            "Демо Full Stack приложение интернет-магазина одежды. Реализована фильтрация и сортировка товаров. Возможность оставлять авторизованным пользователям комментарии под товарами. Также реализован функционал авторизации/регистрации и страница личного кабинета пользователя.",
        imgUrls: [
            "assets/images/works/shshop/sh2.jpg",
            "assets/images/works/shshop/sh1.jpg",
            "assets/images/works/shshop/sh3.jpg",
            "assets/images/works/shshop/sh4.jpg",
            "assets/images/works/shshop/sh5.jpg"
        ],
        tags: ["React", "Redux", "Node.js", "Docker", "MongoDB", "SCSS"],
        repository: "https://github.com/TaiSaWFly/sh-shop-local"
    },
    {
        _id: "3",
        name: "Fast Company",
        description:
            "Демо Full Stack приложения знакомств. В рамках первого входа, имеется возможность зарегистрироваться и создать анкету. Зарегистрированные пользователи могут увидеть анкеты всех прочих пользователей, зарегистрировавшихся ранее, а также оставить комментарии на страницах других пользователей. Поддерживается функционал редактирования созданных учётных данных. Страница с пользователями поддерживает сортировку по имеющимся полям (столбцам) и фильтрацию по профессиям (отдельное меню слева).",
        imgUrls: [
            "assets/images/works/fc/fc1.jpg",
            "assets/images/works/fc/fc2.jpg",
            "assets/images/works/fc/fc3.jpg",
            "assets/images/works/fc/fc4.jpg"
        ],
        tags: [
            "React",
            "Redux",
            "Node.js",
            "MongoDB",
            "Firebase",
            "ESLint",
            "Docker",
            "Bootstrap",
            "CSS"
        ],
        repository: "https://github.com/TaiSaWFly/fast-company-local"
    },
    {
        _id: "4",
        name: "Trans Logistic",
        description:
            "Статический лендинг транспортной копмании. Так же реализован адаптив и анимация на JQuery.",
        imgUrls: [
            "assets/images/works/logistic/logistic1.jpg",
            "assets/images/works/logistic/logistic2.jpg",
            "assets/images/works/logistic/logistic3.jpg"
        ],
        tags: ["HTML", "CSS", "JavaScript", "JQuery"],
        repository: "https://github.com/TaiSaWFly/logistic",
        url: "https://taisawfly.github.io/logistic/"
    },
    {
        _id: "5",
        name: "Houses",
        description: "Статический лендинг сайта продажи деревянных домом.",
        imgUrls: [
            "assets/images/works/houses/houses1.jpg",
            "assets/images/works/houses/houses2.jpg"
        ],
        tags: ["HTML", "CSS"],
        repository: "https://github.com/TaiSaWFly/Houses",
        url: "https://taisawfly.github.io/Houses/index/index.html"
    }
];
