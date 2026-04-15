//
function script18684(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 1;
    var int3 = 7;
    var int4 = 75;
    var int5 = 10;
    var string0 = `${string0}<br>- Attack <col=ffffff>${inttostring((int3 + 1), 10)}</col> times over <col=ffffff>${script15973(((int2 * int3) + 1), 1)}</col>.`;
    string0 = `${string0}<br>- ${script17720(int0, int4, (int4 + int5), 0, int1)} per hit.`;
    string0 = `${string0}<br>- <col=ffffff>Channelled</col>.`;
    string0 = `${string0}<br>- ${script17725(10)}.`;
    string0 = `${string0}<br>- Each attack extends the duration of <sprite=23877><nbsp><col=ffffff>${struct_getparam(52801, 2794)}</col> by <col=ffffff>${script15973(1, 1)}</col>.`;
    return string0;
}