//
function script10615(): void {
    var int0 = enum_getvalue(0, 17, 681 as cs2enum, varbitplayer_25235);
    IF_SETTEXT(`Cost: ${TOSTRING_LOCALISED((script212(int0, STAT_BASE_ACTUAL(int0), 4, varbitplayer_25239) / 10), 1)} ${enum_getvalue(0, 36, 108 as cs2enum, varbitplayer_25235)} XP.`, 100728840);
    return;
}