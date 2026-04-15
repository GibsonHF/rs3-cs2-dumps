//
function script12894(int0: struct, int1: int, int2: int, int3: obj, int4: obj, int5: component, int6: int, int7: int): void {
    if ((struct_getparam(int0, 4926) > 1)) {
        var int1 = (int1 / struct_getparam(int0, 4926));
    };
    var int8 = 1;
    var int9 = script10076();
    if (((((((((IF_FIND[1](int9) == 1) && (cc_getparam[1](4145) == int7)) && (CC_FIND(int9, 0) == 1)) && (cc_getparam(4146) == int0)) && (cc_getparam(4261) == int1)) && (cc_getparam(6169) == int2)) && (cc_getparam(4009) == int3)) && (cc_getparam(4680) == int4))) {
        int8 = 0;
    };
    if ((int8 == 1)) {
        CC_DELETEALL(int9);
        CC_CREATE(int9, 5, 0);
        cc_setparam(4146, int0);
        cc_setparam(4261, int1);
        cc_setparam(6169, int2);
        cc_setparam(4009, int3);
        cc_setparam(4680, int4);
        cc_setparam(6402, 1);
        cc_setparam(4145, int7);
    };
    script9566("", -1, int7, 1000, 0, int5, int6, -1 as fontmetrics, 14931919, int8, 0);
    return;
}