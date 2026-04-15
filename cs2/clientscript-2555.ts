//
function script2555(int0: boolean, int1: struct, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: component, int11: int, string0: string): void {
    var int12 = 1;
    var int13 = script10076();
    if (((((IF_FIND[1](int13) == 1) && (cc_getparam[1](4145) == 7)) && (CC_FIND(int13, 0) == 1)) && (strcmp(cc_getparam(4262), string0) == 0))) {
        int12 = 0;
    };
    if ((int12 == 1)) {
        CC_DELETEALL(int13);
        CC_CREATE(int13, 5, 0);
        cc_setparam(7773, int0);
        cc_setparam(7772, int1);
        cc_setparam(4261, int2);
        cc_setparam(6169, int3);
        cc_setparam(7766, int4);
        cc_setparam(7767, int5);
        cc_setparam(7768, int6);
        cc_setparam(7769, int7);
        cc_setparam(7770, int8);
        cc_setparam(7771, int9);
        CC_SETPARAM_STRING(4262, string0);
    };
    script9566("", -1, 7, 1000, 25, int10, int11, -1 as fontmetrics, 14931919, int12, 0);
    return;
}