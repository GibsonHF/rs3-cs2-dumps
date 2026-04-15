//
function script18039(): int {
    if ((varplayer_11339 == -1 as dbrow)) {
        return 0;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = script18040(7906 as dbrow);
    IF_SETTEXT(`Level ${TOSTRING_LOCALISED(int0, 1)}`, comp(1227, 48));
    IF_SETTEXT(`${TOSTRING_LOCALISED(int1, 1)}/${TOSTRING_LOCALISED(int2, 1)}`, comp(1227, 27));
    script17927();
    IF_SETTEXT(`Level ${TOSTRING_LOCALISED(int0, 1)}`, comp(1226, 11));
    IF_SETTEXT(`${TOSTRING_LOCALISED(int1, 1)}/${TOSTRING_LOCALISED(int2, 1)}`, comp(1226, 54));
    return SCALE(int1, int2, 100);
}