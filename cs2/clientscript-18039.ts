//
function script18039(): number {
    if ((varplayer_11339 == -1 as dbrow)) {
        return 0;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = script18040(7906);
    IF_SETTEXT(`Level ${TOSTRING_LOCALISED(int0, 1)}`, 80412720);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int1, 1)}/${TOSTRING_LOCALISED(int2, 1)}`, 80412699);
    script17927();
    IF_SETTEXT(`Level ${TOSTRING_LOCALISED(int0, 1)}`, 80347147);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int1, 1)}/${TOSTRING_LOCALISED(int2, 1)}`, 80347190);
    return SCALE(int1, int2, 100);
}