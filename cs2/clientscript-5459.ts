//
function script5459(int0: unknown_int): int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((int0 == 1)) {
        int1 = enum_getvalue(0, 0, 5222 as cs2enum, varbitplayer_3654);
        int2 = enum_getvalue(0, 0, 5225 as cs2enum, varbitplayer_3655);
        int3 = script5460();
        int3 = (int3 + 150);
        int4 = ((int1 + int2) + int3);
        int4 = (varbitplayer_3661 + int4);
    } else {
        int1 = enum_getvalue(0, 0, 5223 as cs2enum, varbitplayer_3654);
        if ((varbitplayer_3656 < 30)) {
            int2 = enum_getvalue(0, 0, 5226 as cs2enum, varbitplayer_3656);
        } else {
            int2 = enum_getvalue(0, 0, 5226 as cs2enum, 15);
        };
        int4 = ((int1 + int2) + int3);
        int4 = (varbitplayer_3661 + int4);
    };
    return int4;
}