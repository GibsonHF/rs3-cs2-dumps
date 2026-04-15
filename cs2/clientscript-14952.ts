//
function script14952(): void {
    var int0 = comp(477, 7);
    var int1 = comp(477, 8);
    if (((IF_GETNEXTSUBID(int0) == 0) && (IF_GETNEXTSUBID(int1) == 0))) {
        script14953();
        return;
    };
    var int2 = ENUM_GETOUTPUTCOUNT(14058 as cs2enum);
    var int3 = -1;
    while ((++int3 < int2)) {
        if ((CC_FIND(int1, int3) == 1)) {
            script14955(enum_getvalue(0, 33, 14058 as cs2enum, int3));
        };
    };
    return;
}