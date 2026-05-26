//
function script20218(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = 0;
    if ((int1 == 1)) {
        IF_SETENABLED(0, 91815972);
        IF_SETENABLED(0, 91815973);
        IF_SETHIDE(1, 91815974);
        IF_SETHIDE(1, 91815987);
    };
    if ((int1 < 100)) {
        script20222(SCALE(255, 100, int1));
    } else if ((int1 < 200)) {
        if ((int1 == 100)) {
            script20230();
        };
        int1 = (int1 - 100);
        script20223((255 - SCALE(255, 100, int1)));
    } else if ((varbitplayer_58385 == 3)) {
        int2 = ((int1 - 200) / 50);
        if ((int1 < 450)) {
            IF_SETENABLED(0, 91815972);
            IF_SETENABLED(0, 91815973);
            IF_SETHIDE(0, 91815972);
            IF_SETHIDE(0, 91815974);
            IF_SETHIDE(1, 91815973);
            IF_SETTEXT(`${inttostring((5 - int2), 10)}...`, 91815972);
        } else {
            IF_SETPARAM_INT(8058, 0, 91815939);
            IF_SETONTIMER(callback(), 91815939);
            IF_SETENABLED(1, 91815972);
            IF_SETHIDE(1, 91815973);
            IF_SETENABLED(0, 91815973);
            IF_SETHIDE(1, 91815974);
            IF_SETTEXT("Confirm this Account", 91815972);
        };
    } else {
        IF_SETPARAM_INT(8058, 0, 91815939);
        IF_SETONTIMER(callback(), 91815939);
    };
    return;
}