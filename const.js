// Команды бота
const emoji = require('node-emoji');
const {Markup} = require('telegraf')
const commands = `
/start - Перезапустить бота
/help - Помощь
/course - Курсы
`
// Текстовые константы
const left = () => {
    return Markup.inlineKeyboard([[Markup.button.callback(`Назад ${emoji.get('door')}`, 'pi_20_week')]])
}
const pi_20_monday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1: БЖД', 'pi_20_teacher_3'), Markup.button.callback('2: БЖД', 'pi_20_teacher_3')],
        [Markup.button.callback('3: Экономика', 'pi_20_teacher_4'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback(`Назад ${emoji.get('door')}`, 'pi_20_week'), Markup.button.callback(`Menu ✊🏿`, 'menu')]

        ])
}
const pi_20_tuesday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1:', '...'), Markup.button.callback('2: Физкультура ', 'pi_20_teacher_6')],
        [Markup.button.callback('3: ', '...'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback(`Назад ${emoji.get('door')}`, 'pi_20_week'), Markup.button.callback('Menu', 'menu')]

    ])
}
const pi_20_wensday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1: Селедкин', 'pi_20_teacher_2'), Markup.button.callback('2: Селедкин', 'pi_20_teacher_2')],
        [Markup.button.callback('3: Экономика', 'pi_20_teacher_4'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback(`Назад ${emoji.get('door')}`, 'pi_20_week'), Markup.button.callback('Menu', 'menu')]

    ])
}
const pi_20_thursday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1: Менеджмент', 'pi_20_teacher_4'), Markup.button.callback('2: Менеджмент', 'pi_20_teacher_4')],
        [Markup.button.callback('3: ', '...'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback(`Назад ${emoji.get('door')}`, 'pi_20_week'), Markup.button.callback('Menu', 'menu')]

    ])
}
const pi_20_friday = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('1: Михед', 'pi_20_teacher_1'), Markup.button.callback('2: Михед', '...')],
        [Markup.button.callback('3: ', '...'), Markup.button.callback('4: ', '...')],
        [Markup.button.callback(`Назад ${emoji.get('door')}`, 'pi_20_week'), Markup.button.callback('Menu', 'menu')]

    ])
}
const text3 = `
3 <u>Подчёркнутый Текст</u> для проверки обработчика и <a href="https://youtube.com/">ссылка с превью</a>
`
// Экспорт констант
module.exports.left = left();
module.exports.pi_20_monday = pi_20_monday();
module.exports.pi_20_tuesday = pi_20_tuesday();
module.exports.pi_20_wensday = pi_20_wensday();
module.exports.pi_20_thursday = pi_20_thursday();
module.exports.pi_20_friday = pi_20_friday();

