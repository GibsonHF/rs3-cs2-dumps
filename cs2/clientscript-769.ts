//[clientscript,lore_pouch_counter]
function script769(): void {
    if ((varplayer_1831 == -1 as obj)) {
        return;
    };
    var int0 = enum_getvalue(33, 33, 1283 as cs2enum, varplayer_1831);
    var int1 = 0;
    var int2 = 0;
    if ((int0 != 526 as obj)) {
        int1 = INV_TOTAL(93 as inv, int0);
    };
    if ((varplayer_4824 == int0)) {
        int2 = varbitplayer_25412;
    };
    IF_SETTEXT(script361(int1, 0), comp(662, 82));
    IF_SETTEXT(script361(int2, 0), comp(662, 84));
    var string0 = script361((int1 + int2), 0);
    IF_SETTEXT(string0, comp(662, 122));
    IF_SETSIZE(PARAWIDTH(string0, 1000, IF_GETFONTMETRICS(comp(662, 122))), IF_GETHEIGHT(comp(662, 122)), 0, 0, comp(662, 122));
    script11728();
    script11688();
    return;
}