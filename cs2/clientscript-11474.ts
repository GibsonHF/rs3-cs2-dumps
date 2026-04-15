//
function script11474(): string {
    var int0 = SCALE(60, 100, npc_getparam(enum_getvalue(0, 32, 1098 as cs2enum, varbitplayer_1669), 356));
    var int1 = (int0 / 60);
    var int2 = MODULO(int0, 60);
    if ((int2 >= 10)) {
        return `Gravestone:<br>${enum_getvalue(0, 36, 1099 as cs2enum, varbitplayer_1669)}<br><br>Initial duration:<br>${inttostring(int1, 10)}:${inttostring(int2, 10)}`;
    };
    if ((int2 > 0)) {
        return `Gravestone:<br>${enum_getvalue(0, 36, 1099 as cs2enum, varbitplayer_1669)}<br><br>Initial duration:<br>${inttostring(int1, 10)}:0${inttostring(int2, 10)}s`;
    };
    return `Gravestone:<br>${enum_getvalue(0, 36, 1099 as cs2enum, varbitplayer_1669)}<br><br>Initial duration:<br>${inttostring(int1, 10)}:00`;
}