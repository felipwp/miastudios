const channels   = require("../../assets/channels.json"); 
const roles      = require("../../assets/roles.json"); 

module.exports = {
    do: function (guild, member, name) {
        guild.channels.create(`ticket-${name}`, {
            type: 'text',
            permissionOverwrites: [
                {
                    id: roles.management,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                },
                {
                    id: member.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                },
                {
                    id: roles.everyone,
                    deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                },
            ],
        }).then(async (c) => {
            c.setParent(channels.parents.priorityCommission , { lockPermissions: false });
            c.setTopic(`<@${member.id}>'s priority commission ticket.`)
            c.send(`<@${member.id}>`).then((m) => {m.delete({ timeout: 1 });});
            console.log(`Um novo priority commission ticket 'ticket-${name}' foi criado.`)
        });
    }
}