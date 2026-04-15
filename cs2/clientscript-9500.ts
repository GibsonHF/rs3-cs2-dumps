//
function script9500(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3984, 1), comp(749, 51));
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3985, 1), comp(749, 50));
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3983, 1), comp(749, 42));
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
    var int2 = STRINGWIDTH(string1, IF_GETFONTMETRICS(comp(749, 49)));
    IF_SETSIZE((int2 + 30), IF_GETHEIGHT(comp(749, 49)), 0, 0, comp(749, 49));
    IF_SETTEXT(string1, comp(749, 49));
    if ((int0 == 3)) {
        IF_SETCOLOUR(14474198, comp(749, 49));
    } else if ((int0 == 4)) {
        IF_SETCOLOUR(14052895, comp(749, 49));
    } else {
        IF_SETCOLOUR(16777215, comp(749, 49));
    };
    var int3 = (varplayer_3984 + varplayer_3985);
    if ((int3 == 0)) {
        return;
    };
    var int4 = SCALE(varplayer_3984, int3, 100);
    var int5 = SCALE(int4, 100, 352);
    IF_SETSIZE(int5, 32, 0, 0, comp(749, 14));
    IF_SETSIZE(int5, 32, 0, 0, comp(749, 12));
    IF_SETSIZE(int5, 32, 0, 0, comp(749, 16));
    var int6 = (352 - int5);
    IF_SETSIZE(int6, 32, 0, 0, comp(749, 21));
    IF_SETSIZE(int6, 32, 0, 0, comp(749, 19));
    IF_SETSIZE(int6, 32, 0, 0, comp(749, 23));
    return;
}