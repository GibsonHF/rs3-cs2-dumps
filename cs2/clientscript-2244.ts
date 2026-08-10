//
function script2244(): number {
    if ((varbitplayer_42079 < varbitplayer_42078)) {
        return script12422(1, 1, 65536);
    };
    var int0 = 14541 as cs2enum;
    if ((script3825() == 1)) {
        int0 = 13468 as cs2enum;
    };
    var int1 = enum_getvalue(0, 0, int0, varbitplayer_42079);
    var int2 = enum_getvalue(0, 0, int0, (varbitplayer_42079 - 1));
    return script12422((varplayer_1297 - int2), (int1 - int2), 65536);
}