//
function script18636(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 60;
    var int3 = 10;
    var int4 = 1;
    var int5 = 7;
    switch (int0) {
        case 40936:
        case 52785: {
            int2 = 60;
            int3 = 10;
            break;
        }
    };
    var string0 = `${string0}<br>- Attack <col=ffffff>${inttostring((int5 + 1), 10)}</col> times over <col=ffffff>${script15973(((int4 * int5) + 1), 1)}</col>.`;
    string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)} per hit to up to ${script18560(8)} within ${script17709(1)} of you.`;
    string0 = `${string0}<br>- <col=ffffff>Channelled</col>.`;
    string0 = `${string0}<br>- ${script17724(6, 6)}.`;
    switch (int0) {
        case 40936:
        case 52785: {
            string0 = `${string0}<br>- Each attack extends the duration of <sprite=14264><nbsp><col=ffffff>${struct_getparam(52793, 2794)}</col> by <col=ffffff>${script15973(1, 1)}</col>.`;
            break;
        }
    };
    string0 = script15735(string0);
    return string0;
}