//
function script18622(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    var int5 = 2;
    var int6 = 5;
    switch (int0) {
        case 19343: {
            int2 = 30;
            int3 = 10;
            break;
        }
        case 45450: {
            int2 = 40;
            int3 = 10;
            int6 = 7;
            break;
        }
    };
    var string0 = `${string0}<br>- Attack <col=ffffff>${inttostring((int5 + 1), 10)}</col> times over <col=ffffff>${script15973(((int4 * int5) + 1), 1)}</col>.`;
    string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)} per hit.`;
    string0 = `${string0}<br>- <col=ffffff>Channelled</col>.`;
    string0 = `${string0}<br>- Each attack increases the <col=ffffff>Critical Strike Chance</col> of your next <col=3366FF>Magic attack</col> by <col=ffffff>${inttostring(int6, 10)}%</col>, stacking to a maximum of <col=ffffff>${inttostring((int6 * (int5 + 1)), 10)}%</col>.`;
    return string0;
}