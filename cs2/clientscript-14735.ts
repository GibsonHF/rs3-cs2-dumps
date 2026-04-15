//
function script14735(int0: int, int1: component, int2: int, string0: string, string1: string): void {
    var int3 = 1;
    var int4 = script10076();
    if (((((((IF_FIND[1](int4) == 1) && (cc_getparam[1](4145) == 12)) && (CC_FIND(int4, 0) == 1)) && (cc_getparam(4261) == int0)) && (strcmp(cc_getparam(4262), string0) == 0)) && (strcmp(cc_getparam(4263), string1) == 0))) {
        int3 = 0;
    };
    if ((int3 == 1)) {
        CC_DELETEALL(int4);
        CC_CREATE(int4, 5, 0);
        cc_setparam(4261, int0);
        CC_SETPARAM_STRING(4262, string0);
        CC_SETPARAM_STRING(4263, string1);
    };
    script9566("", -1, 12, 1000, 25, int1, int2, -1 as fontmetrics, 14931919, int3, 0);
    return;
}