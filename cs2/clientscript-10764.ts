//
function script10764(int0: component, int1: struct, int2: int, int3: int, int4: int, int5: int, int6: int): void {
    var int7 = struct_getparam(int1, 3797);
    var int8 = struct_getparam(int1, 4405);
    if ((int8 != -1 as struct)) {
        var int1 = int8;
    };
    int1 = script9984(int1, int7);
    var int9 = struct_getparam(int1, 3799);
    var int10 = struct_getparam(int1, 3798);
    var int11 = struct_getparam(int1, 3800);
    var int12 = struct_getparam(int1, 3801);
    var int13 = struct_getparam(int1, 3802);
    var int14 = struct_getparam(int1, 3803);
    var int15 = struct_getparam(int1, 3805);
    var int16 = struct_getparam(int1, 3804);
    var int17 = struct_getparam(int1, 3806);
    var int18 = struct_getparam(int1, 3808);
    var int19 = int18;
    var int20 = MAX(0, (int4 - (2 * int18)));
    var int21 = MAX(0, (int5 - (2 * int19)));
    if ((int6 == -1)) {
        var int6 = 16777215;
    };
    var int22 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int22);
    CC_SETSIZE(int18, int19, 0, 0);
    CC_SETPOSITION(int2, int3, 0, 0);
    CC_SETGRAPHIC(int9);
    CC_SETCOLOUR(int6);
    int22 = (int22 + 1);
    CC_CREATE(int0, 5, int22);
    CC_SETSIZE(int20, int19, 0, 0);
    CC_SETPOSITION((int2 + int18), int3, 0, 0);
    CC_SETGRAPHIC(int10);
    CC_SETCOLOUR(int6);
    CC_SETTILING(true);
    int22 = (int22 + 1);
    CC_CREATE(int0, 5, int22);
    CC_SETSIZE(int18, int19, 0, 0);
    CC_SETPOSITION(((int2 + int18) + int20), int3, 0, 0);
    if ((int11 == -1 as graphic)) {
        CC_SETGRAPHIC(int9);
        CC_SETHFLIP(true);
    } else {
        CC_SETGRAPHIC(int11);
    };
    CC_SETCOLOUR(int6);
    int22 = (int22 + 1);
    CC_CREATE(int0, 5, int22);
    CC_SETSIZE(int18, int21, 0, 0);
    CC_SETPOSITION(int2, (int3 + int19), 0, 0);
    CC_SETGRAPHIC(int12);
    CC_SETCOLOUR(int6);
    CC_SETTILING(true);
    int22 = (int22 + 1);
    CC_CREATE(int0, 5, int22);
    CC_SETSIZE(int20, int21, 0, 0);
    CC_SETPOSITION((int2 + int18), (int3 + int19), 0, 0);
    CC_SETGRAPHIC(int13);
    CC_SETCOLOUR(int6);
    CC_SETTILING(true);
    int22 = (int22 + 1);
    CC_CREATE(int0, 5, int22);
    CC_SETSIZE(int18, int21, 0, 0);
    CC_SETPOSITION(((int2 + int18) + int20), (int3 + int19), 0, 0);
    if ((int14 == -1 as graphic)) {
        CC_SETGRAPHIC(int12);
        CC_SETHFLIP(true);
    } else {
        CC_SETGRAPHIC(int14);
    };
    CC_SETCOLOUR(int6);
    CC_SETTILING(true);
    int22 = (int22 + 1);
    CC_CREATE(int0, 5, int22);
    CC_SETSIZE(int18, int19, 0, 0);
    CC_SETPOSITION(int2, ((int3 + int19) + int21), 0, 0);
    CC_SETGRAPHIC(int15);
    CC_SETCOLOUR(int6);
    int22 = (int22 + 1);
    CC_CREATE(int0, 5, int22);
    CC_SETSIZE(int20, int19, 0, 0);
    CC_SETPOSITION((int2 + int18), ((int3 + int19) + int21), 0, 0);
    CC_SETGRAPHIC(int16);
    CC_SETCOLOUR(int6);
    CC_SETTILING(true);
    int22 = (int22 + 1);
    CC_CREATE(int0, 5, int22);
    CC_SETSIZE(int18, int19, 0, 0);
    CC_SETPOSITION(((int2 + int18) + int20), ((int3 + int19) + int21), 0, 0);
    if ((int17 == -1 as graphic)) {
        CC_SETGRAPHIC(int15);
        CC_SETHFLIP(true);
    } else {
        CC_SETGRAPHIC(int17);
    };
    CC_SETCOLOUR(int6);
    int22 = (int22 + 1);
    return;
}