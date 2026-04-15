//
function script17727(int0: struct, int1: unknown_int, int2: unknown_int): string {
    var string0 = struct_getparam(int0, 2794);
    var string1 = struct_getparam(int0, 2795);
    switch (int0) {
        case 48335: {
            string1 = "Filled with uncontrollable anger.";
            string1 = `${string1}<br>- Generates <col=ffffff>${inttostring(1, 10)} Rage</col> ${script4583(1, "stack", "stacks")} with each attack.`;
            string1 = `${string1}<br>- Damage is increased by <col=ffffff>3%</col> for each <col=ffffff>Rage</col> stack.`;
            break;
        }
        case 48336: {
            string1 = "Emits a fetid stench.";
            string1 = `${string1}<br>- ${script17721(48336 as struct, 15, 8, (8 + 4), 0, int2)} every <col=ffffff>${script14945(3, 1)}</col> to enemies within ${script17709(1)}.`;
            break;
        }
        case 48337: {
            string1 = "Drains the vigour of enemies.";
            string1 = `${string1}<br>- Heals you for <col=ffffff>${inttostring(140, 10)}%</col> of the damage dealt.`;
            break;
        }
        case 32349: {
            string1 = "Protects against harm.";
            string1 = `${string1}<br>- Reduces damage taken from core damage types by up to <col=ffffff>${inttostring(5, 10)}%</col>, capped at <col=ffffff>${script18566(31820 as struct, 10, int2)}.`;
            string1 = `${string1}<br>- Generates <col=ffffff>${inttostring(1, 10)} Valour</col> ${script4583(1, "stack", "stacks")} with each incoming hit.`;
            break;
        }
    };
    if ((STRING_LENGTH(string1) > 0)) {
        string0 = `${string0}<br>${string1}`;
    };
    return string0;
}