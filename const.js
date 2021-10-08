// Команды бота
const {Markup} = require('telegraf')
const commands = `
/start - Перезапустить бота
/help - Помощь
/course - Курсы
`
// Текстовые константы

const pi_20_monday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1: Безопастность жизни деятельности', '...'), Markup.button.callback('2: Безопастность жизни деятельности', '...')],
        [Markup.button.callback('3: Экономика', '...'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback('Назад', 'pi_20_week'), Markup.button.callback('Menu', 'menu')]

        ])
}
const pi_20_tuesday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1:', '...'), Markup.button.callback('2: Физкультура ', '...')],
        [Markup.button.callback('3: ', '...'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback('Назад', 'pi_20_week'), Markup.button.callback('Menu', 'menu')]

    ])
}
const pi_20_wensday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1: Селедкин', '...'), Markup.button.callback('2: Селедкин', '...')],
        [Markup.button.callback('3: ', '...'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback('Назад', 'pi_20_week'), Markup.button.callback('Menu', 'menu')]

    ])
}
const pi_20_thursday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1: Менеджмент', '...'), Markup.button.callback('2: Менеджмент', '...')],
        [Markup.button.callback('3: ', '...'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback('Назад', 'pi_20_week'), Markup.button.callback('Menu', 'menu')]

    ])
}
const pi_20_friday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1: Михед', '...'), Markup.button.callback('2: Михед', '...')],
        [Markup.button.callback('3: ', '...'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback('Назад', 'pi_20_week'), Markup.button.callback('Menu', 'menu')]

    ])
}
const text3 = `
3 <u>Подчёркнутый Текст</u> для проверки обработчика и <a href="https://youtube.com/">ссылка с превью</a>
`
// Экспорт констант
module.exports.commands = commands
module.exports.pi_20_monday = pi_20_monday();
module.exports.pi_20_tuesday = pi_20_tuesday();
module.exports.pi_20_wensday = pi_20_wensday();
module.exports.pi_20_thursday = pi_20_thursday();
module.exports.pi_20_friday = pi_20_friday();

