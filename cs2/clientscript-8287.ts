//
function script8287(int0: int, int1: int): void {
    if (((script8292(int0, int1) == 1) || (script8293(int0, int1) == 1))) {
        script8290(1);
        return;
    };
    if ((varbitplayer_19004 == 1)) {
        return;
    };
    varbitplayer_18994 = int0;
    if ((int1 >= 0)) {
        script445(int0, int1);
    } else if (((varbitplayer_33661 == 1) && (int0 == 4))) {
        script445(int0, 6);
    };
    script8288(int0);
    script8193();
    IF_SETHIDE(false, comp(1448, 1));
    return;
}