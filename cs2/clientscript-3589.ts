//
function script3589(int0: number): void {
    var int1 = enum_getvalue(9, 0, 15793 as cs2enum, int0);
    var string0 = enum_getvalue(9, 36, 15794 as cs2enum, int0);
    IF_SETCOLOUR(13158600, int0);
    IF_SETHIDE(0, 40108036);
    IF_SETTEXT(`Rank: ${enum_getvalue(0, 36, 15780 as cs2enum, int1)}<br>Reputation required: ${TOSTRING_LOCALISED((enum_getvalue(0, 0, 15779 as cs2enum, int1) / 10), 1)}`, 40108033);
    IF_SETTEXT(string0, 40108034);
    IF_SETPARAM_INT(3863, int1, int0);
    return;
}