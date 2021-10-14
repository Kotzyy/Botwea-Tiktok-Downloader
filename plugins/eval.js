cmd.get("eval", async(m, args) => {
  const q = args.join(' ')
  if (!q) return cmd.reply(m.chat, 'code nya mana su', m)
  const syntaxErr = require('syntax-error')
  const util = require('util')
  let _syntax = ''
  let _return
  let _text = `;(async () => {${(/^=/.test('/') ? 'return ' : '') + q}})()`
  try {
    _return = await eval(_text)
    }catch(e) {
    let err = await syntaxErr(_text)
    if (err) _syntax = err + '\n\n'
    _return = e
    }finally {
    cmd.reply(m.chat, _syntax + util.format(_return), m)
                }
})

exports.help = {
    name: "Eval",
    description: "meng eval",
    usage: "ngepal"
};