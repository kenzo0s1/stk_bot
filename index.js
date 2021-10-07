const {
    Telegraf,
    Markup
} = require('telegraf')
// Импорт dotenv для защиты API токена
require('dotenv').config()
// Импорт нашего модуля с константами
const my_const = require('./const')
const teachers = require('./teachers')
// Инициализация бота с помощью Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN)
// кнопки меню
const menu = () => {
    return Markup.inlineKeyboard([[
        Markup.button.callback('Пи-20', 'pi_20')
    ]])
}
const pi_20_week = () => {
    return Markup.inlineKeyboard([[
        Markup.button.callback('Расписание', 'pi_20_week'),
        Markup.button.callback('Учителя', 'teachers'), ] ,
        [Markup.button.callback('Назад', 'menu')]
    ])
}
const week = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('Понедельник', 'pi_20_monday'),Markup.button.callback('Вторник', 'pi_20_tuesday')],

        [Markup.button.callback('Среда', 'pi_20_wensday'),Markup.button.callback('Четверг', 'pi_20_thursday')],

        [Markup.button.callback('Пятница', 'pi_20_friday')],
        [Markup.button.callback('Назад', 'pi_20'),Markup.button.callback('Menu', 'menu')],

    ])
}
// Старт бота
bot.start((ctx) => ctx.reply(`Hello , ${ctx.from.first_name}, your course? `, menu()));
// слушаем
bot
    .on('message', (ctx) => {
        ctx.reply(`Hello , ${ctx.from.first_name}, your course? `, menu());
    })
    .on('callback_query', (ctx) => {
        switch (ctx.callbackQuery.data) {
            case 'teachers':
                ctx.deleteMessage();
                ctx.reply('Course: Пи-20 ', teachers.teachers )
                break;
            case 'pi_20':
                ctx.deleteMessage();
                ctx.reply('Course: Пи-20 ', pi_20_week())
                break;
            case 'menu':
                ctx.deleteMessage();
                ctx.reply(`Hello , ${ctx.from.first_name}, your course?`, menu())
                break;
            case 'pi_20_week':
                ctx.deleteMessage();
                ctx.reply('Course: Пи-20: Расписание', week())
                break;
            case 'pi_20_monday':
                ctx.deleteMessage();
                ctx.reply('Course: Пи-20: Расписание: Понедельник', my_const.pi_20_monday)
                break;
            case 'pi_20_tuesday':
                ctx.deleteMessage();
                ctx.reply('Course: Пи-20: Расписание: Вторник', my_const.pi_20_tuesday)
                break;
            case 'pi_20_wensday':
                ctx.deleteMessage();
                ctx.reply('Course: Пи-20: Расписание: Среда', my_const.pi_20_wensday)
                break;
            case 'pi_20_thursday':
                ctx.deleteMessage();
                ctx.reply('Course: Пи-20: Расписание: Четверг', my_const.pi_20_thursday)
                break;
            case 'pi_20_friday':
                ctx.deleteMessage();
                ctx.reply('Course: Пи-20: Расписание: Пятница', my_const.pi_20_friday)
                break;
        }
    })

bot.launch();