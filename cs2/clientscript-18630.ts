//
function script18630(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 120;
    var int3 = 20;
    var int4 = INV_GETOBJ(94 as inv, 3);
    var int5 = 0;
    if ((item_getparam(int4, 2825) == 1)) {
        int5 = script7460(int4);
    };
    switch (int5) {
        case 2: {
            var string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)} to the target and up to ${script18561(8)} in a <col=ffffff>cone</col> in the attack direction.`;
            break;
        }
        case 1: {
            string0 = `${string0}<br>- ${script17720(int0, 60, (60 + 15), 0, int1)} per hit.`;
            string0 = `${string0}<br>- <col=ffffff>${inttostring(2, 10)}</col> hits.`;
            break;
        }
        default: {
            string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)}.`;
            break;
        }
    };
    if ((script7495() == 1)) {
        string0 = `${string0}<br>- ${script15734(1)}`;
    };
    return string0;
}