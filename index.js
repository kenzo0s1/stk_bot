const {
    Telegraf,
    Markup
} = require('telegraf')
// Импорт dotenv для защиты API токена
require('dotenv').config()
// Импорт нашего модуля с константами
const emoji = require('node-emoji');
const my_const = require('./const')
const teachers = require('./teachers')
// Инициализация бота с помощью Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN)

const teachers_1 = {
    t1 : 'Михед,501 аудитория,не отмечает',
    t2 : 'Селедкин,5 этаж, отмечает',
    t3 : 'Шарапов,5 этаж, отмечает',
    t4 : '...,5 этаж, отмечает',
    t6 : 'Зазуля,Динамо,Белоусовский парк, отмечает'

}
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
        [Markup.button.callback(`Назад ${emoji.get('door')}`, 'menu')]
    ])
}
const week = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('Понедельник', 'pi_20_monday'),Markup.button.callback('Вторник', 'pi_20_tuesday')],

        [Markup.button.callback('Среда', 'pi_20_wensday'),Markup.button.callback('Четверг', 'pi_20_thursday')],

        [Markup.button.callback('Пятница', 'pi_20_friday')],
        [Markup.button.callback(`Назад ${emoji.get('door')}`, 'pi_20'),Markup.button.callback('Menu', 'menu')],

    ])
}
// Старт бота
bot.start(async (ctx) => await ctx.reply(`Hello , ${ctx.from.first_name}, your course? `, menu()));
// слушаем
bot
    .on('message', async (ctx) => {
        await ctx.reply(`Hello , ${ctx.from.first_name}, your course? `, menu());
    })
    .on('callback_query', async (ctx) => {
        switch (ctx.callbackQuery.data) {
            case 'teachers':
               await ctx.deleteMessage();
                await ctx.reply('Course: Пи-20 ', teachers.teachers )
                break;
            case 'pi_20':
                await ctx.deleteMessage();
                await ctx.reply("Course: Пи-20  ", pi_20_week())
                break;
            case 'menu':
                await ctx.deleteMessage();
                await ctx.reply(`Hello , ${ctx.from.first_name}, your course?`, menu())
                break;
            case 'pi_20_week':
                await ctx.deleteMessage();
                await ctx.reply('Course: Пи-20: Расписание', week())
                break;
            case 'pi_20_monday':
                await ctx.deleteMessage();
                await ctx.reply('Course: Пи-20: Расписание: Понедельник', my_const.pi_20_monday)
                break;
            case 'pi_20_tuesday':
                await ctx.deleteMessage();
                await ctx.reply('Course: Пи-20: Расписание: Вторник', my_const.pi_20_tuesday)
                break;
            case 'pi_20_wensday':
                await ctx.deleteMessage();
                await ctx.reply('Course: Пи-20: Расписание: Среда', my_const.pi_20_wensday)
                break;
            case 'pi_20_thursday':
                await ctx.deleteMessage();
                await ctx.reply('Course: Пи-20: Расписание: Четверг', my_const.pi_20_thursday)
                break;
            case 'pi_20_friday':
                await ctx.deleteMessage();
                await ctx.reply('Course: Пи-20: Расписание: Пятница', my_const.pi_20_friday)
                break;
            case 'pi_20_teacher_1':
                await ctx.deleteMessage();
                await ctx.reply(`Преподаватель : ${teachers_1.t1} `, my_const.left )
                break;
            case 'pi_20_teacher_2':
                await ctx.deleteMessage();
                await ctx.reply(`Преподаватель : ${teachers_1.t2} `, my_const.left )
                break;
            case 'pi_20_teacher_3':
                await ctx.deleteMessage();
                await ctx.reply(`Преподаватель : ${teachers_1.t3} ` , my_const.left)
                break;
            case 'pi_20_teacher_4':
                await ctx.deleteMessage();
                await ctx.reply(`Преподаватель : ${teachers_1.t4} ` , my_const.left)
                break;
            case 'pi_20_teacher_6':
                await ctx.deleteMessage();
                await ctx.reply(`Преподаватель : ${teachers_1.t6} ` , my_const.left)
                break;

        }
    })

bot.launch();