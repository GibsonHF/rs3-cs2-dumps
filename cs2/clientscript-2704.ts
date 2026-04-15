//
function script2704(): void {
    if ((script6431() == false)) {
        IF_SETONTIMER(callback(), comp(137, 1));
        return;
    };
    if (((IF_GETHIDE(comp(276, 27)) == false) || (varclient_6798 == 0))) {
        return;
    };
    if ((varbitclient_41275 != 0)) {
        varclient_6798 = 0;
        script6060(0);
    };
    var int0 = IF_GETTRANS(comp(137, 2));
    var int1 = 0;
    if ((varclient_6798 < CLIENTCLOCK())) {
        int1 = MIN(255, SCALE(255, 40, (CLIENTCLOCK() - varclient_6798)));
        script6060(int1);
        if ((int1 == 255)) {
            varclient_6798 = 0;
        };
    } else if ((int0 > 0)) {
        int1 = MAX(0, (int0 - (255 / 10)));
        script6060(int1);
    };
    return;
}