//
function script18625(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 55;
    var int3 = 10;
    var int4 = 2;
    var int5 = 3;
    var string0 = `${string0}<br>- Attack <col=ffffff>${inttostring((int5 + 1), 10)}</col> times over <col=ffffff>${script15973(((int4 * int5) + 1), 1)}</col>.`;
    string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)} per hit.`;
    string0 = `${string0}<br>- Deals an additional ${script17721(int0, -1, 10, (10 + 5), 0, int1)} per hit.`;
    string0 = `${string0}<br>- ${script17721(int0, -1, 35, (35 + 5), 0, int1)} to self per hit.`;
    string0 = `${string0}<br>- <col=ffffff>Channelled</col>.`;
    return string0;
}