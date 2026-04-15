//
function script20214(int0: int): void {
    var int1 = (CLIENTCLOCK() - int0);
    if ((int1 < 100)) {
        script20221(SCALE(255, 100, int1));
    } else if ((int1 < 200)) {
        if ((int1 == 100)) {
            script20225();
        };
        int1 = (int1 - 100);
        script20222((255 - SCALE(255, 100, int1)));
    } else {
        IF_SETPARAM_INT(8058, 1, comp(1401, 3));
        IF_SETONTIMER(callback(), comp(1401, 3));
    };
    return;
}