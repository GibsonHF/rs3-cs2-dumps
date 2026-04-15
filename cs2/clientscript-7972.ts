//
function script7972(int0: unknown_int, int1: unknown_int, int2: int, int3: int, int4: int, int5: int): void {
    var int6 = -1 as obj;
    var int7 = -1 as obj;
    var int8 = -1;
    var int9 = -1;
    [int6, int8] = script11789(int2, int3);
    [int7, int9] = script11789(int4, int5);
    script11790(int2, int3, int7, int9);
    script11790(int4, int5, int6, int8);
    var int10 = script7974(int0, int3);
    var int11 = script7974(int1, int5);
    var int12 = false;
    var int13 = false;
    var int14 = -1 as struct;
    var int15 = -1 as struct;
    if (((IF_FIND(int10) == 1) && (IF_FIND[1](int11) == 1))) {
        int12 = cc_getparam(5313);
        int13 = cc_getparam(5314);
        int14 = cc_getparam(3438);
        int15 = cc_getparam[1](3438);
        cc_setparam(5313, cc_getparam[1](5313));
        cc_setparam(5314, cc_getparam[1](5314));
        cc_setparam(3438, int15);
        cc_setparam[1](5313, int12);
        cc_setparam[1](5314, int13);
        cc_setparam[1](3438, int14);
    };
    script11818(int0, int15);
    script11818(int1, int14);
    return;
}