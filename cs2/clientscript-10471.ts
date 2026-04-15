//
function script10471(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    if ((varbitplayer_45192 == 1)) {
        int1 = IF_GETSCROLLY(comp(517, 168));
        int2 = IF_GETSCROLLHEIGHT(comp(517, 168));
    } else {
        int1 = IF_GETSCROLLX(comp(517, 168));
        int2 = IF_GETSCROLLWIDTH(comp(517, 168));
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
        IF_SETSCROLLPOS(0, int1, comp(517, 168));
        IF_SETSCROLLPOS(0, int1, comp(517, 171));
    } else {
        IF_SETSCROLLPOS(int1, 0, comp(517, 168));
        IF_SETSCROLLPOS(int1, 0, comp(517, 171));
    };
    script10503();
    return;
}