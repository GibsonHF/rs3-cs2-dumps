//
function script5671(): void {
    CC_DELETEALL(comp(556, 7));
    var int0 = struct_getparam(varplayer_8242, 7689);
    var int1 = 0;
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    int1 = enum_getvalue(0, 0, int0, varplayer_8243);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    while ((int2 < int1)) {
        if (((int2 + 1) == varplayer_8244)) {
            int6 = 1;
        } else {
            int6 = 0;
        };
        int5 = script13998(comp(556, 7), comp(556, 8), 28557 as struct, int3, int4, 36, 46, int5, false, "", int6);
        if ((CC_FIND(comp(556, 8), int2) == 1)) {
            CC_SETONOP(callback(script5672, varplayer_8242, varplayer_8243, (int2 + 1), -2147483644));
            if ((script5647(varplayer_8242, varplayer_8243, (int2 + 1)) == 1)) {
                CC_SETOP(2, "Replay");
                CC_SETONMOUSEREPEAT(callback(script8799, script5688(varplayer_8242, varplayer_8243, (int2 + 1)), -2147483645, -2147483643));
                script4512(36438023, 28, 41, (int3 + 4), (int4 + 2), script5685(varplayer_8242, varplayer_8243, (int2 + 1)));
            } else {
                CC_SETONMOUSEREPEAT(callback(script8799, "???", -2147483645, -2147483643));
                script4512(36438023, 18, 18, (int3 + 8), (int4 + 13), 27213);
            };
        };
        if ((MODULO(++int2, 8) == 0)) {
            int3 = 0;
            int4 = (int4 + 48);
        } else {
            int3 = (int3 + 38);
        };
    };
    return;
}