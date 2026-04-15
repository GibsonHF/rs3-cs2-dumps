//
function script13482(int0: struct, int1: int, int2: int, int3: obj, int4: component, int5: int): void {
    var int6 = 1;
    var int7 = script10076();
    if ((((((((IF_FIND[1](int7) == 1) && (cc_getparam[1](4145) == 6)) && (CC_FIND(int7, 0) == 1)) && (cc_getparam(4146) == int0)) && (cc_getparam(4261) == int1)) && (cc_getparam(6169) == int2)) && (cc_getparam(4009) == int3))) {
        int6 = 0;
    };
    if ((int6 == 1)) {
        CC_DELETEALL(int7);
        CC_CREATE(int7, 5, 0);
        cc_setparam(4146, int0);
        cc_setparam(4261, int1);
        cc_setparam(6169, int2);
        cc_setparam(4009, int3);
    };
    script9566("", -1, 6, 1000, 0, int4, int5, -1 as fontmetrics, 14931919, int6, 0);
    return;
}