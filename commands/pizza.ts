import { Interaction, Message } from "https://deno.land/x/discordeno@12.0.1/mod.ts";
export async function executefn(interaction : Interaction | Message) {
    await console.log(interaction);
}