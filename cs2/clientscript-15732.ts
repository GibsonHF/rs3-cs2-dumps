//
function script15732(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 135;
    var int3 = 30;
    var int4 = INV_GETOBJ(94 as inv, 3);
    var int5 = 0;
    if ((item_getparam(int4, 2825) == 1)) {
        int5 = script7460(int4);
    };
    switch (int5) {
        default: {
            break;
        }
    };
    var string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)}.`;
    if ((script7495() == 1)) {
        string0 = `${string0}<br>- ${script15734(2)}`;
    };
    return string0;
}