//
function script9500(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3984, 1), 49086515);
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3985, 1), 49086514);
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3983, 1), 49086506);
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script9515();
    var string0 = "Armadyl leads by ";
    if ((int0 == 4)) {
        string0 = "Bandos leads by ";
    } else if ((int0 == 0)) {
        string0 = "";
    };
    var string1 = `${string0}${TOSTRING_LOCALISED(int1, 1)}`;
    var int2 = STRINGWIDTH(string1, IF_GETFONTMETRICS(49086513));
    IF_SETSIZE((int2 + 30), IF_GETHEIGHT(49086513), 0, 0, 49086513);
    IF_SETTEXT(string1, 49086513);
    if ((int0 == 3)) {
        IF_SETCOLOUR(14474198, 49086513);
    } else if ((int0 == 4)) {
        IF_SETCOLOUR(14052895, 49086513);
    } else {
        IF_SETCOLOUR(16777215, 49086513);
    };
    var int3 = (varplayer_3984 + varplayer_3985);
    if ((int3 == 0)) {
        return;
    };
    var int4 = SCALE(varplayer_3984, int3, 100);
    var int5 = SCALE(int4, 100, 352);
    IF_SETSIZE(int5, 32, 0, 0, 49086478);
    IF_SETSIZE(int5, 32, 0, 0, 49086476);
    IF_SETSIZE(int5, 32, 0, 0, 49086480);
    var int6 = (352 - int5);
    IF_SETSIZE(int6, 32, 0, 0, 49086485);
    IF_SETSIZE(int6, 32, 0, 0, 49086483);
    IF_SETSIZE(int6, 32, 0, 0, 49086487);
    return;
}