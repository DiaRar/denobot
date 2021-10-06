import { Interaction } from "https://deno.land/x/discordeno@12.0.1/mod.ts";

interface FnInterface {
    name: string;
    executefn(interaction: Interaction)  : void
    
}
export class FnInteraction implements FnInterface {
    name: string;
    async executefn(interaction: Interaction) {
        await console.log(interaction)
        return;
    }
    constructor(message: string) {
        this.name = message;
    }
}
export async function push(name: string) {
    const test = await import('./commands/'+name+'.ts');
    FnInteraction.prototype.executefn = test.executefn;
    const a = new FnInteraction(name);
    console.log(a);
    return a;
    }