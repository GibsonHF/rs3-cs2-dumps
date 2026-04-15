//
function script5519(): void {
    if ((varbitplayer_20546 == 0)) {
        return;
    };
    var int0 = enum_getvalue(0, 26, 595 as cs2enum, varbitplayer_20546);
    var int1 = -1 as struct;
    var int2 = 1;
    while ((int2 <= 6)) {
        int1 = enum_getvalue(0, 73, int0, int2);
        IF_SETOBJECT_NONUM(struct_getparam(int1, 2213), 1, enum_getvalue(0, 9, 615 as cs2enum, int2));
        IF_SETTEXT(struct_getparam(int1, 2210), enum_getvalue(0, 9, 5361 as cs2enum, int2));
        script8800(`Requires ${inttostring(struct_getparam(int1, 2212), 10)} Dungeoneering`, enum_getvalue(0, 9, 7952 as cs2enum, int2), -1);
        int2 = (int2 + 1);
    };
    if ((varbitplayer_41365 == 1)) {
        IF_SETTEXT("Once per day you may choose the boss encountered in a dungeon.", comp(217, 4));
    } else {
        IF_SETTEXT("Your skillcape allows you to choose the next boss encountered in a dungeon.", comp(217, 4));
    };
    return;
}