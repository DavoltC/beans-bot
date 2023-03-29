const { REST, Routes, ActionRowBuilder, Base, ButtonBuilder, ButtonStyle, Events, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder, Client, GatewayIntentBits, Message, GuildMemberManager, BaseChannel, SelectMenuBuilder, User, enableValidators, userMention, Activity } = require('discord.js');
const { token, clientId, guildID } = require("./config.json");

const commands = [
    {
        name: 'rickroll',
        description: 'Rickroll your peers!',
    },
    {
        name: 'bubble-wrap',
        description: 'Pop virtual bubbles!',
    },
    {
        name: 'bean-wrap',
        description: 'Pop virtual BEANS!',
    },
    {
        name: 'find-beans',
        description: 'Find the Beans!',
    },
    {
        name: 'bang',
        description: 'Shoot something',
    },
];



const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(clientId), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.on('ready', () => {
    console.log(colorize("green", "Ready!"), colorize("yellow", `Logged in as ${client.user.tag}`));
});

const colors = {
    yellow: "\x1b[33m",
    blue: "\x1b[36m",
    red: "\x1b[31m",
    grey: "\x1b[38;5;254m",
    green: "\x1b[38;5;47m",
    NC: "\x1b[0m"
}

function colorize(color, message) {
    if (color == "blue") {
        return `${colors.blue}${message}${colors.NC}`
    } else if (color == "yellow") {
        return `${colors.yellow}${message}${colors.NC}`
    } else if (color == "red") {
        return `${colors.red}${message}${colors.NC}`
    } else if (color == "grey") {
        return `${colors.grey}${message}${colors.NC}`
    } else if (color == "green") {
        return `${colors.green}${message}${colors.NC}`
    } else {
        console.log(`${colors.yellow}Warning: ${colors.red}Garbage color argument!${colors.NC}`)
        return `${message}`
    }
}

function current_date() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let date = `${month}-${day}-${year}`
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
    return `${time} ${date} ~ `
}

function log(message) {
    console.log(colorize("grey", current_date()), colorize("blue", message));
}

function rick(self, userID) {
    self.reply(`Hello ${userID}!
You have been rickrolled!`)
    self.followUp(`https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ`)
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'rickroll') {
        await interaction.reply(`https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ`)
    }
    if (interaction.commandName === 'bubble-wrap') {
        await interaction.reply(`||POP||||POP||||POP||||POP||||POP||||POP||||POP||
||POP||||POP||||POP||||POP||||POP||||POP||||POP||
||POP||||POP||||POP||||POP||||POP||||POP||||POP||
||POP||||POP||||POP||||POP||||POP||||POP||||POP||
||POP||||POP||||POP||||POP||||POP||||POP||||POP||
||POP||||POP||||POP||||POP||||POP||||POP||||POP||
||POP||||POP||||POP||||POP||||POP||||POP||||POP||
||POP||||POP||||POP||||POP||||POP||||POP||||POP||`)
    }
    if (interaction.commandName === 'bean-wrap') {
        await interaction.reply(`||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||
||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||
||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||
||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||
||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||
||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||
||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||
||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||||**BEANS**!||`)
    }
    if (interaction.commandName === 'find-beans') {
        while (!values.includes(":beans:")) {
            for (let i = 0; i < 64; i++) {
                let values = [
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                ]
                if (Math.ceil(Math.random() * 63) == 5) {
                    values[i] = ":beans:"
                    log("generated beans at square " + (i + 1))
                } else {
                    values[i] = ":corn:"
                }
            }
        }
        await interaction.reply(`
||${values[0]}||||${values[1]}||||${values[2]}||||${values[3]}||||${values[4]}||||${values[5]}||||${values[6]}||||${values[7]}||
||${values[8]}||||${values[9]}||||${values[10]}||||${values[11]}||||${values[12]}||||${values[13]}||||${values[14]}||||${values[15]}||
||${values[16]}||||${values[17]}||||${values[18]}||||${values[19]}||||${values[20]}||||${values[21]}||||${values[22]}||||${values[23]}||
||${values[24]}||||${values[25]}||||${values[26]}||||${values[27]}||||${values[28]}||||${values[29]}||||${values[30]}||||${values[31]}||
||${values[32]}||||${values[33]}||||${values[34]}||||${values[35]}||||${values[36]}||||${values[37]}||||${values[38]}||||${values[39]}||
||${values[40]}||||${values[41]}||||${values[42]}||||${values[43]}||||${values[44]}||||${values[45]}||||${values[46]}||||${values[47]}||
||${values[48]}||||${values[49]}||||${values[50]}||||${values[51]}||||${values[52]}||||${values[53]}||||${values[54]}||||${values[55]}||
||${values[56]}||||${values[57]}||||${values[58]}||||${values[59]}||||${values[60]}||||${values[61]}||||${values[62]}||||${values[63]}||`)
    }
    if (interaction.commandName === 'bang') {
        let items = [
            "Bob the Tomato", "A flying Koopa", "a mischivious bean", "a deer", "a turkey",
            "an elk", "a chipmunk", "a balloon (POP)", "a hornets nest(OW, OW, DOUBLE OW!!)",
            "an old ladies teapot(so she hits you with her purse!)", "a FLYING FROGGO!",
            "a propane tank... **(BOOM!!!)**"
        ]
        await interaction.reply("You shot " + items[Math.floor(Math.random() * items.length)] + "!")

    }
}
)
client.login(token)