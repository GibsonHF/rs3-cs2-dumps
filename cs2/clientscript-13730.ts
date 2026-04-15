//
function script13730(int0: int, int1: int, int2: component, int3: int): void {
    var int4 = 1;
    var int5 = script10076();
    if (((((IF_FIND[1](int5) == 1) && (cc_getparam[1](4145) == int1)) && (CC_FIND(int5, 0) == 1)) && (cc_getparam(4261) == int0))) {
        int4 = 0;
    };
    if ((int4 == 1)) {
        CC_DELETEALL(int5);
        CC_CREATE(int5, 5, 0);
        cc_setparam(4261, int0);
    };
    script9566("", -1, int1, 1000, 25, int2, int3, -1 as fontmetrics, 14931919, int4, 0);
    return;
}