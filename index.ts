import { startBot, Collection } from "https://deno.land/x/discordeno@12.0.1/mod.ts";
import token from './config.ts';
import {FnInteraction, push} from './classes.ts';
import { parse } from "https://deno.land/std@0.110.0/path/mod.ts"
const collection = new Collection<string, FnInteraction>();
    for await (const file of Deno.readDirSync(`./commands`)) {
        const fname = parse('./commands/'+file.name).name;
        const interaction = await push(fname);
        collection.set(fname, interaction);
    }
startBot({
  token: token,
  intents: ["Guilds", "GuildMessages"],
  eventHandlers: {
    ready() {
      console.log("Ready");
    },
    async messageCreate(message) {
        if(message.isBot) return;
        if(!message.channel) return;
        await message.channel.send('I read everything you say');
    },
    async interactionCreate(interaction) {
        if(interaction.type !== 2) return;
        if(!interaction.data?.name) return;
        const command = collection.get(interaction.data.name);
        if(!command) return;
        try {
            await command.executefn(interaction);
        } catch (error) {
            console.log(error);
        }
        
    }
  },
});