//
function script12644(int0: cs2enum, int1: unknown_int, int2: int, int3: int, int4: int): void {
    if (((int0 == -1 as cs2enum) || (ENUM_GETOUTPUTCOUNT(int0) < 1))) {
        cc_setparam(5843, -1);
        CC_SETGRAPHIC(-1 as graphic);
        return;
    };
    cc_setparam(5843, int0);
    cc_setparam(5842, int1);
    var int2 = MODULO(int2, ENUM_GETOUTPUTCOUNT(int0));
    cc_setparam(5844, int2);
    CC_SETGRAPHIC(enum_getvalue(0, 23, int0, int2));
    var int3 = MAX(0, int3);
    cc_setparam(5845, int3);
    var int4 = MODULO(MAX(0, int4), (int3 + 1));
    cc_setparam(5846, int4);
    return;
}