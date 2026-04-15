//
function script18590(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 65, (65 + 10), 0, int1)}.`;
    string0 = `${string0}<br>- Heals you for <col=ffffff>${inttostring(25, 10)}%</col> (<col=ffffff>On killing blow:</col> <col=ffffff>${inttostring(100, 10)}%</col>) of the damage dealt.`;
    string0 = `${string0}<br>- <col=ffffff>PvP:</col> ${script18575(8)}.`;
    return string0;
}