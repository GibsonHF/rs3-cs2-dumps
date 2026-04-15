//
function script18743(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 185, (185 + 30), 0, int1)}.`;
    string0 = `${string0}<br>- Heals you for <col=ffffff>${inttostring(50, 10)}%</col> of the damage dealt.`;
    string0 = `${string0}<br>- Restores <sprite=18857><nbsp><col=967AC0>Prayer Points</col> equal to <col=ffffff>${script7653(25, 1, 1, 0, 1)}%</col> of the damage dealt.`;
    return string0;
}