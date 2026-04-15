//
function script18598(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- Stores <col=ffffff>${inttostring(100, 10)}%</col> of damage taken over <col=ffffff>${script15973(10, 1)}</col>.`;
    string0 = `${string0}<br>- After the duration, deals <col=ffffff>${inttostring(100, 10)}%</col> of the damage stored.`;
    string0 = `${string0}<br>- Can be <col=ffffff>recast</col> within its duration.`;
    return string0;
}