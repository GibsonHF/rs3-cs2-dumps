//
function script10547(int0: unknown_int, int1: struct): void {
    var int2 = enum_getvalue(0, 0, 13467 as cs2enum, (varbitplayer_39302 - 1));
    var int3 = varbitplayer_39303;
    var int4 = script12422(int3, int2, 184);
    IF_SETSIZE(int4, 17, 0, 0, struct_getparam(int1, 7417));
    IF_SETTEXT(`${inttostring(int3, 10)}/${inttostring(int2, 10)}`, struct_getparam(int1, 7418));
    IF_SETTEXT(inttostring(varbitplayer_39302, 10), comp(1930, 71));
    if ((varbitplayer_39302 < 10)) {
        IF_SETHIDE(true, comp(1930, 77));
        if ((varbitplayer_39302 < 5)) {
            IF_SETHIDE(true, comp(1930, 81));
            if ((varbitplayer_39302 < 2)) {
                IF_SETHIDE(true, comp(1930, 85));
            };
        };
    };
    var int5 = 0;
    var int6 = comp(-1, 65535);
    while ((int5 < 4)) {
        int6 = enum_getvalue(0, 9, 10920 as cs2enum, int5);
        CC_CREATE(int6, 5, 0);
        CC_SETSIZE(40, 40, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        switch (int5) {
            case 0: {
                CC_SETONMOUSEREPEAT(callback(script12893, 9802, 2, varbitplayer_39311, 41760, 41760, int6, 0));
                break;
            }
            case 1: {
                CC_SETONMOUSEREPEAT(callback(script12893, 9802, 5, varbitplayer_39312, 41761, 41761, int6, 0));
                break;
            }
            case 2: {
                CC_SETONMOUSEREPEAT(callback(script12893, 9802, 10, varbitplayer_39310, 41758, 41758, int6, 0));
                break;
            }
            case 3: {
                CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(36769 as obj), int6, 0));
                break;
            }
        };
        int5 = (int5 + 1);
    };
    IF_SETTEXT(`Next Reward<br>${script11901()}`, comp(1930, 176));
    return;
}