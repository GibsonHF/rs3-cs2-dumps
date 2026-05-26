//
function script20186(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = IF_GETWIDTH(91488262);
    var int3 = SCALE(int2, 500, 456);
    var int4 = 0;
    if ((int1 < 50)) {
        if ((int1 < 1)) {
            script4161(91488281, 255);
            script4161(91488282, 255);
        };
        IF_SETTRANS(SCALE(255, 50, int1), 91488275);
    } else if ((int1 < 150)) {
        int1 = (int1 - 50);
        IF_SETTRANS(255, 91488275);
        IF_SETGRAPHIC(35284, 91488274);
        IF_SETTRANS((255 - SCALE(255, 100, int1)), 91488274);
        IF_SETTRANS((255 - SCALE(255, 100, int1)), 91488260);
    } else if ((int1 < 250)) {
        IF_SETTRANS(0, 91488274);
        IF_SETTRANS(0, 91488260);
        int1 = (int1 - 150);
        int4 = (255 - SCALE(255, 100, int1));
        IF_SETTRANS(int4, 91488266);
        script4161(91488281, int4);
        script4161(91488282, int4);
    } else if ((int1 < 350)) {
        IF_SETTRANS(0, 91488266);
        script4161(91488281, 0);
        script4161(91488282, 0);
        int1 = (int1 - 250);
        int2 = (500 - SCALE(500, 200, int1));
    } else if ((int1 < 450)) {
        if ((int1 == 351)) {
            script20188();
        };
        int1 = (int1 - 350);
        script20187((255 - SCALE(255, 100, int1)));
    } else {
        script20187(0);
        IF_SETONTIMER(callback(), 91488258);
    };
    IF_SETSIZE(700, (int3 - 20), 0, 1, 91488263);
    IF_SETSIZE(int2, int3, 0, 0, 91488262);
    IF_SETPOSITION(0, int3, 1, 0, 91488264);
    int3 = ((int3 + IF_GETHEIGHT(91488264)) + (4 * 2));
    IF_SETPOSITION(0, int3, 1, 0, 91488265);
    IF_SETSIZE(640, int3, 0, 1, 91488265);
    return;
}