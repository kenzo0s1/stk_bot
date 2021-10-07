const {Markup} = require('telegraf')



const teachers = () => {
    return Markup.inlineKeyboard([[Markup.button.callback('mne len 4toto tyt pisat', '...')]
    ])
}

module.exports.teachers = teachers()