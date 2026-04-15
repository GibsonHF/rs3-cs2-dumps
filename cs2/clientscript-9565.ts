//
function script9565(int0: obj, int1: obj, int2: inv, int3: component, int4: int, int5: int, int6: unknown_int, string0: string): void {
    var int7 = 1;
    var int8 = script10076();
    var int9 = 3;
    if ((((((((IF_FIND[1](int8) == 1) && (cc_getparam[1](4145) == int9)) && (CC_FIND(int8, 0) == 1)) && (cc_getparam(4009) == int0)) && (cc_getparam(4680) == int1)) && (cc_getparam(6319) == int2)) && (cc_getparam(6402) == int5))) {
        int7 = 0;
    };
    if ((int7 == 1)) {
        CC_DELETEALL(int8);
        CC_CREATE(int8, 5, 0);
        cc_setparam(4009, int0);
        cc_setparam(4680, int1);
        cc_setparam(6319, int2);
        cc_setparam(6402, int5);
        cc_setparam(4145, int9);
    };
    script9566(string0, -1, int9, 1000, 0, int3, int4, -1 as fontmetrics, 14931919, int7, int6);
    return;
}