cmd.get("ping", (m) => {
  cmd.reply(m.chat, "Hello", m);
})

exports.help = {
    name: "ping",
    description: "ping bot",
    usage: "ping"
};