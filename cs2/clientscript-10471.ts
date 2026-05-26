//
function script10471(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    if ((varbitplayer_45192 == 1)) {
        int1 = IF_GETSCROLLY(33882280);
        int2 = IF_GETSCROLLHEIGHT(33882280);
    } else {
        int1 = IF_GETSCROLLX(33882280);
        int2 = IF_GETSCROLLWIDTH(33882280);
    };
    if ((MODULO(int1, 48) != 0)) {
        if ((int0 < 0)) {
            int1 = (int1 - MODULO(int1, 48));
        } else {
            int1 = (int1 + MODULO(int1, 48));
        };
    } else {
        int1 = MAX(0, MIN(int2, (int1 + (int0 * 48))));
    };
    if ((varbitplayer_45192 == 1)) {
        IF_SETSCROLLPOS(0, int1, 33882280);
        IF_SETSCROLLPOS(0, int1, 33882283);
    } else {
        IF_SETSCROLLPOS(int1, 0, 33882280);
        IF_SETSCROLLPOS(int1, 0, 33882283);
    };
    script10503();
    return;
}