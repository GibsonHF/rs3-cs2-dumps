//
function script7080(int0: quest, int1: component, int2: int): void {
    var int3 = 1;
    var int4 = script10076();
    if (((((IF_FIND[1](int4) == 1) && (cc_getparam[1](4145) == 0)) && (CC_FIND(int4, 0) == 1)) && (cc_getparam(8225) == int0))) {
        int3 = 0;
    };
    if ((int3 == 1)) {
        CC_DELETEALL(int4);
        CC_CREATE(int4, 5, 0);
        cc_setparam(8225, int0);
    };
    script9566("", -1, 0, 1000, 25, int1, int2, -1 as fontmetrics, 14931919, int3, 0);
    return;
}