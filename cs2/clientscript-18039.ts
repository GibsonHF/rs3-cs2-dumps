//
function script18039(): number {
    if ((varplayer_11339 == -1 as dbrow)) {
        return 0;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = script18040(7906);
    IF_SETTEXT(`Level ${TOSTRING_LOCALISED(int0, 1)}`, comp(1227, 48));  // bp3_track_tab:level_text
    IF_SETTEXT(`${TOSTRING_LOCALISED(int1, 1)}/${TOSTRING_LOCALISED(int2, 1)}`, comp(1227, 27));  // bp3_track_tab:progression_value_text
    script17927();
    IF_SETTEXT(`Level ${TOSTRING_LOCALISED(int0, 1)}`, comp(1226, 11));  // bp3_missions_tab:level_text
    IF_SETTEXT(`${TOSTRING_LOCALISED(int1, 1)}/${TOSTRING_LOCALISED(int2, 1)}`, comp(1226, 54));  // bp3_missions_tab:progression_value_text
    return SCALE(int1, int2, 100);
}