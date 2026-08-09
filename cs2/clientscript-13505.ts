//
function script13505(int0: number, int1: number, int2: number): void {
    var int3 = INV_GETVAR(93 as inv, int2, 1091);
    if (((int2 == -1) || (int3 == 0))) {
        stack(OC_IOP(int0, 1));
        OC_ICURSOR(int0, 1);
        stack("");
        stack(-1);
        stack("");
        stack(-1);
        stack("");
        stack(-1);
        stack(OC_IOP(int0, 5));
        OC_ICURSOR(int0, 5);
        script2410(item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), int1);
        return;
    };
    var int4 = -1;
    var int5 = -1;
    [int4, int5] = script13504(int3);
    stack(OC_IOP(int0, 1));
    OC_ICURSOR(int0, 1);
    stack(enum_getvalue(17, 36, 680, int4));
    OC_ICURSOR(int0, 2);
    stack(enum_getvalue(17, 36, 680, int5));
    OC_ICURSOR(int0, 3);
    stack("");
    stack(-1);
    stack(OC_IOP(int0, 5));
    OC_ICURSOR(int0, 5);
    script2410(item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), int1);
    CC_SETONVARTRANSMIT(callback());
    return;
}