//
function script11220(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as struct;
    var int4 = 0;
    while ((int1 <= int0)) {
        int2 = enum_getvalue(0, 0, 9909 as cs2enum, int1);
        int3 = enum_getvalue(0, 73, 9908 as cs2enum, int2);
        if ((int3 != -1 as struct)) {
            script10410(comp(1139, 9), comp(-1, 65535), 28556 as struct, 0, (int4 * 40), IF_GETWIDTH(comp(1139, 9)), 40, int2, false, "");
            script10764(comp(1139, 9), 21361 as struct, 4, (4 + (int4 * 40)), (IF_GETWIDTH(comp(1139, 10)) - 8), (40 - 8), -1);
            int4 = (int4 + 1);
        };
        int1 = (int1 + 1);
    };
    return;
}