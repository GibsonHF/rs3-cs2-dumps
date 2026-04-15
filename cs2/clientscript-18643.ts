//
function script18643(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>Target has higher life points percentage:`;
    string0 = `${string0}<br>- Deals damage to the target equal to <col=ffffff>${inttostring(100, 10)}%</col> of the percentage difference multiplied by your maximum life points.`;
    string0 = `${string0}<br>- Heals you for <col=ffffff>${inttostring(50, 10)}%</col> of the damage dealt.`;
    string0 = `${string0}<br>Caster has higher life points percentage:`;
    string0 = `${string0}<br>- Deals damage to self equal to <col=ffffff>${inttostring(100, 10)}%</col> of the percentage difference multiplied by your maximum life points.`;
    string0 = `${string0}<br>- Heals the target for <col=ffffff>${inttostring(50, 10)}%</col> of the damage dealt.`;
    return string0;
}