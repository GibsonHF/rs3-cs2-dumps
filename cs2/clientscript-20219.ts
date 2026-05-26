//
function script20219(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    if ((int1 < 100)) {
        script20223(SCALE(255, 100, int1));
    } else if ((int1 < 200)) {
        if ((int1 == 100)) {
            IF_SETTEXT("", 91815978);
            script20225();
        };
        int1 = (int1 - 100);
        script20222((255 - SCALE(255, 100, int1)));
    } else {
        IF_SETPARAM_INT(8058, 0, 91815939);
        IF_SETONTIMER(callback(), 91815939);
    };
    return;
}