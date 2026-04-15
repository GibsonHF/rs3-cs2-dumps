//
function script20706(int0: int, int1: boolean, int2: component, int3: int, string0: string): void {
    var int4 = 1;
    var int5 = script10076();
    if (((((IF_FIND[1](int5) == 1) && (cc_getparam[1](4145) == 9)) && (CC_FIND(int5, 0) == 1)) && (strcmp(cc_getparam(4262), string0) == 0))) {
        int4 = 0;
    };
    if ((int4 == 1)) {
        CC_DELETEALL(int5);
        CC_CREATE(int5, 5, 0);
        cc_setparam(7773, int1);
        cc_setparam(4261, int0);
        CC_SETPARAM_STRING(4262, string0);
    };
    script9566("", -1, 9, 1000, 25, int2, int3, -1 as fontmetrics, 16777215, int4, 0);
    return;
}