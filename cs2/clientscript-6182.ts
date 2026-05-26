//
function script6182(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = comp(-1, 65535);
    while ((int2 < ENUM_GETOUTPUTCOUNT(5840))) {
        int3 = enum_getvalue(0, 9, 5840 as cs2enum, int2);
        if (((int3 != comp(-1, 65535)) && (CC_FIND(int3, 1) == 1))) {
            if ((int1 == int2)) {
                CC_SETGRAPHIC(2289);
            } else {
                CC_SETGRAPHIC(2288);
            };
        };
        int2 = (int2 + 1);
        int3 = comp(-1, 65535);
    };
    var int4 = enum_getvalue(0, 73, 5841 as cs2enum, int1);
    if ((int4 == -1 as struct)) {
        return;
    };
    IF_SETRECOL(1, 62904, struct_getparam(int4, 2396), 83427349);
    IF_SETRECOL(2, 62894, struct_getparam(int4, 2397), 83427349);
    IF_SETRECOL(3, 62884, struct_getparam(int4, 2398), 83427349);
    IF_SETRECOL(4, 62874, struct_getparam(int4, 2399), 83427349);
    IF_SETRECOL(1, 62904, struct_getparam(int4, 2396), 83427350);
    IF_SETRECOL(2, 62894, struct_getparam(int4, 2397), 83427350);
    IF_SETRECOL(3, 62884, struct_getparam(int4, 2398), 83427350);
    IF_SETRECOL(4, 62874, struct_getparam(int4, 2399), 83427350);
    IF_SETRECOL(1, 62904, struct_getparam(int4, 2396), 83427351);
    IF_SETRECOL(2, 62894, struct_getparam(int4, 2397), 83427351);
    IF_SETRECOL(3, 62884, struct_getparam(int4, 2398), 83427351);
    IF_SETRECOL(4, 62874, struct_getparam(int4, 2399), 83427351);
    IF_SETRECOL(1, 62904, struct_getparam(int4, 2396), 83427352);
    IF_SETRECOL(2, 62894, struct_getparam(int4, 2397), 83427352);
    IF_SETRECOL(3, 62884, struct_getparam(int4, 2398), 83427352);
    IF_SETRECOL(4, 62874, struct_getparam(int4, 2399), 83427352);
    return;
}