//
function script6599(int0: component, int1: int, int2: int): void {
    var int3 = 0;
    int3 = SCALE(int1, int2, 100);
    var int4 = 96;
    var int5 = 0;
    var int6 = (INV_TOTAL(674 as inv, enum_getvalue(0, 33, 6063 as cs2enum, 0)) + INV_TOTAL(674 as inv, enum_getvalue(0, 33, 6063 as cs2enum, 1)));
    var int7 = (enum_getvalue(0, 0, 6060 as cs2enum, 0) + enum_getvalue(0, 0, 6060 as cs2enum, 1));
    if ((IF_FIND(int0) == 1)) {
        if ((int2 < 500)) {
            int5 = (int4 / int7);
            int4 = (int4 - (int5 * int6));
        };
        int3 = ((int4 * int3) / 100);
        CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
        if ((int2 < 500)) {
            IF_SETSIZE((int4 + 22), IF_GETHEIGHT(comp(1326, 77)), 0, 0, comp(1326, 77));
        };
    };
    return;
}