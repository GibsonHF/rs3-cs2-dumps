//
function script19430(): void {
    var int0 = comp(1302, 105);
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(5984 as cs2enum);
    var int3 = 4;
    var int4 = -1 as achievement;
    while ((int1 < int2)) {
        int4 = enum_getvalue(0, 131, 5984 as cs2enum, int1);
        int3 = script19431(int0, int1, int3, int4);
        int1 = (int1 + 1);
    };
    script19620(comp(1302, 106), comp(1302, 105), int3, comp(-1, 65535), -1, 0, -1, -1);
    return;
}