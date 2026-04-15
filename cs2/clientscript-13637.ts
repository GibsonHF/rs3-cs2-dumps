//
function script13637(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: struct, int6: component, string0: string): void {
    var int7 = (int3 * struct_getparam(int5, 7276));
    var int8 = 0;
    var int9 = script7593(string0, int4, struct_getparam(int5, 7275), 0);
    if (((MODULO(int3, 2) == 0) && (struct_getparam(int5, 7260) != struct_getparam(int5, 7261)))) {
        script10066(int6, IF_GETNEXTSUBID(int6), (int4 - (2 * struct_getparam(int5, 7266))), (struct_getparam(int5, 7276) + int8), struct_getparam(int5, 7266), int7, struct_getparam(int5, 7261), 1, struct_getparam(int5, 7262));
        CC_SETONMOUSELEAVE(callback(script13867, -2147483645, -2147483643, struct_getparam(int5, 7261), int0));
    } else {
        script10066(int6, IF_GETNEXTSUBID(int6), (int4 - (2 * struct_getparam(int5, 7266))), (struct_getparam(int5, 7276) + int8), struct_getparam(int5, 7266), int7, struct_getparam(int5, 7260), 1, struct_getparam(int5, 7262));
        CC_SETONMOUSELEAVE(callback(script13867, -2147483645, -2147483643, struct_getparam(int5, 7260), int0));
    };
    CC_SETONMOUSEREPEAT(callback(script13855, -2147483645, -2147483643, int0));
    if ((int0 == 1)) {
        cc_setparam(7258, int1);
        cc_setparam(7259, int2);
    } else {
        CC_SETONMOUSEOVER(callback(script14223, -2147483645, -2147483643, int2, int7));
    };
    script10629(int6, IF_GETNEXTSUBID(int6), (int4 - (2 * struct_getparam(int5, 7266))), (struct_getparam(int5, 7276) + int8), (struct_getparam(int5, 7266) + 3), int7, string0, struct_getparam(int5, 7273), struct_getparam(int5, 7275), 0, 1, 15, false);
    if ((varclient_6403 != 0)) {
        CC_SETMAXLINES(2);
    };
    CC_SETONMOUSEREPEAT(callback(script13888, -2147483645, -2147483643));
    CC_SETONMOUSELEAVE(callback(script13897, -2147483645, -2147483643));
    return;
}