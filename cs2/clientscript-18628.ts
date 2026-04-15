//
function script18628(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 95;
    var int3 = 20;
    var string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)}.`;
    string0 = `${string0}<br>- Damage is increased by <col=ffffff>${inttostring(40, 10)}%</col> if the target is <col=ffffff>Stunned</col> or <col=ffffff>Bound</col>.`;
    return string0;
}