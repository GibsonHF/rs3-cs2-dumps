//
function script2244(): int {
    if ((varbitplayer_42079 < varbitplayer_42078)) {
        return script12422(1, 1, 65536);
    };
    var int0 = enum_getvalue(0, 0, 14541 as cs2enum, varbitplayer_42079);
    var int1 = enum_getvalue(0, 0, 14541 as cs2enum, (varbitplayer_42079 - 1));
    return script12422((varplayer_1297 - int1), (int0 - int1), 65536);
}