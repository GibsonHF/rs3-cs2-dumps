//
function script19867(string0: string): string {
    var int0 = script19865();
    if ((int0 == 0)) {
        var string0 = `${string0}<br>- Gain <col=ffffff>${script7653(125, 1, 1, 0, 1)}%</col> of magic power armour damage bonus as chance to reset the cooldown of a magic ability when cast against a target.`;
    } else {
        string0 = `${string0}<br>- <col=ffffff>${script7653(script19865(), 1, 1, 0, 1)}%</col> (<col=ffffff>${script7653(125, 1, 1, 0, 1)}%</col> of magic power armour damage bonus) chance to reset the cooldown of a magic ability when cast against a target.`;
    };
    return string0;
}