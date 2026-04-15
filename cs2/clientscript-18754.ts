//
function script18754(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 125, (125 + 20), 0, int1)}.`;
    string0 = `${string0}<br>- Restores <sprite=18857><nbsp><col=967AC0>Prayer Points</col> equal to <col=ffffff>${inttostring(10, 10)}%</col> of the damage dealt.`;
    string0 = `${string0}<br>- <col=ffffff>PvP:</col> Ignores the target's <col=ffffff>Protection Prayers</col>.`;
    string0 = `${string0}<br>- <col=ffffff>PvP:</col> Reduces the target's prayer points by <col=ffffff>${inttostring(10, 10)}%</col> of the damage dealt.`;
    return string0;
}