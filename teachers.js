const {Markup} = require('telegraf')



const teachers = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('', '...')]
    ])
}

module.exports.teachers = teachers()