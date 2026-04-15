//
function script18651(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 2;
    var int3 = 3;
    var int4 = 130;
    var int5 = 20;
    var string0 = `${string0}<br>- Attack <col=ffffff>${inttostring((int3 + 1), 10)}</col> times over <col=ffffff>${script15973(((int2 * int3) + 1), 1)}</col>.`;
    string0 = `${string0}<br>- ${script17720(int0, int4, (int4 + int5), 0, int1)} per hit.`;
    string0 = `${string0}<br>- <col=ffffff>Channelled</col>.`;
    string0 = script15737(int0, string0, int1);
    return string0;
}