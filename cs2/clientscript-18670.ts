//
function script18670(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 22;
    var int3 = 6;
    var int4 = 2;
    var int5 = 4;
    var string0 = `${string0}<br>- Attack <col=ffffff>${inttostring((int5 + 1), 10)}</col> times over <col=ffffff>${script15973(((int4 * int5) + 1), 1)}</col>.`;
    string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)} per hit to up to ${script18560(25)} within ${script17709(2)} of you.`;
    string0 = `${string0}<br>- <col=ffffff>Channelled</col>.`;
    string0 = `${string0}<br>- Heals you for <col=ffffff>${inttostring(70, 10)}%</col> of the damage dealt.`;
    string0 = `${string0}<br>- The final attack instead deals ${script17720(48309 as struct, 117, (117 + 26), 0, int1)} to the target plus <col=ffffff>${inttostring(100, 10)}%</col> of the total heal value.`;
    return string0;
}