//
function script18655(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 1;
    var int3 = 7;
    var int4 = 65;
    var int5 = 30;
    var string0 = `${string0}<br>- Attack <col=ffffff>${inttostring((int3 + 1), 10)}</col> times over <col=ffffff>${script15973(((int2 * int3) + 1), 1)}</col>.`;
    string0 = `${string0}<br>- ${script17720(int0, int4, (int4 + int5), 0, int1)} per hit.`;
    string0 = `${string0}<br>- <col=ffffff>Channelled</col>.`;
    string0 = `${string0}<br>- Deals an additional ${script17721(int0, -1, 10, (10 + 10), 0, int1)} with each hit.`;
    return string0;
}