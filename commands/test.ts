import { DiscordInteractionResponseTypes, Interaction, sendInteractionResponse } from "https://deno.land/x/discordeno@12.0.1/mod.ts";

export async function executefn(interaction : Interaction) {
    await sendInteractionResponse(interaction.id, interaction.token, {
        type: DiscordInteractionResponseTypes.ChannelMessageWithSource,
        data: {
          content: "This works fine",
        },
        private: false
        //@ts-ignore 1337
        // file: {
        //   blob: image,
        //   name: fileName,
        // },
      });
      if(interaction.member) await console.log(interaction.member.user.username);
}