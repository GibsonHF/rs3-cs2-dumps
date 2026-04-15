//
function script4638(int0: component, int1: component): void {
    var int2 = -1;
    var int3 = ENUM_GETOUTPUTCOUNT(14627 as cs2enum);
    var int4 = IF_GETWIDTH(int0);
    var int5 = 0;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    while ((++int2 < int3)) {
        int5 = script13998(int0, int1, 28556 as struct, 0, (int2 * 26), int4, 24, int5, false, enum_getvalue(0, 36, 14627 as cs2enum, int2), script9670(int2, varclient_3709));
        if ((CC_FIND(int1, (int5 - 1)) == 1)) {
            CC_SETONOP(callback(script4639, (int5 - 1)));
        };
    };
    return;
}