//
function script9500(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3984, 1), comp(749, 51));  // 6awe2_hud:armadyl_score
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3985, 1), comp(749, 50));  // 6awe2_hud:bandos_score
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3983, 1), comp(749, 42));  // 6awe2_hud:player_score
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
    var int2 = STRINGWIDTH(string1, IF_GETFONTMETRICS(comp(749, 49)));  // 6awe2_hud:difference_score
    IF_SETSIZE((int2 + 30), IF_GETHEIGHT(comp(749, 49)), 0, 0, comp(749, 49));  // 6awe2_hud:difference_score
    IF_SETTEXT(string1, comp(749, 49));  // 6awe2_hud:difference_score
    if ((int0 == 3)) {
        IF_SETCOLOUR(14474198, comp(749, 49));  // 6awe2_hud:difference_score
    } else if ((int0 == 4)) {
        IF_SETCOLOUR(14052895, comp(749, 49));  // 6awe2_hud:difference_score
    } else {
        IF_SETCOLOUR(16777215, comp(749, 49));  // 6awe2_hud:difference_score
    };
    var int3 = (varplayer_3984 + varplayer_3985);
    if ((int3 == 0)) {
        return;
    };
    var int4 = SCALE(varplayer_3984, int3, 100);
    var int5 = SCALE(int4, 100, 352);
    IF_SETSIZE(int5, 32, 0, 0, comp(749, 14));  // 6awe2_hud:armadyl_fill
    IF_SETSIZE(int5, 32, 0, 0, comp(749, 12));  // 6awe2_hud:armadyl_dark
    IF_SETSIZE(int5, 32, 0, 0, comp(749, 16));  // 6awe2_hud:armadyl_glow
    var int6 = (352 - int5);
    IF_SETSIZE(int6, 32, 0, 0, comp(749, 21));  // 6awe2_hud:bandos_fill
    IF_SETSIZE(int6, 32, 0, 0, comp(749, 19));  // 6awe2_hud:bandos_dark
    IF_SETSIZE(int6, 32, 0, 0, comp(749, 23));  // 6awe2_hud:bandos_glow
    return;
}