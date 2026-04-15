//
function script20186(int0: int): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = IF_GETWIDTH(comp(1396, 6));
    var int3 = SCALE(int2, 500, 456);
    var int4 = 0;
    if ((int1 < 50)) {
        if ((int1 < 1)) {
            script4161(comp(1396, 25), 255);
            script4161(comp(1396, 26), 255);
        };
        IF_SETTRANS(SCALE(255, 50, int1), comp(1396, 19));
    } else if ((int1 < 150)) {
        int1 = (int1 - 50);
        IF_SETTRANS(255, comp(1396, 19));
        stack(35284);
        stack(91488274);
        IF_SETGRAPHIC();
        IF_SETTRANS((255 - SCALE(255, 100, int1)), 91488274);
        IF_SETTRANS((255 - SCALE(255, 100, int1)), 91488260);
    } else if ((int1 < 250)) {
        IF_SETTRANS(0, comp(1396, 18));
        IF_SETTRANS(0, comp(1396, 4));
        int1 = (int1 - 150);
        int4 = (255 - SCALE(255, 100, int1));
        IF_SETTRANS(int4, comp(1396, 10));
        script4161(comp(1396, 25), int4);
        script4161(comp(1396, 26), int4);
    } else if ((int1 < 350)) {
        IF_SETTRANS(0, comp(1396, 10));
        script4161(comp(1396, 25), 0);
        script4161(comp(1396, 26), 0);
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
        IF_SETONTIMER(callback(), comp(1396, 2));
    };
    IF_SETSIZE(700, (int3 - 20), 0, 1, comp(1396, 7));
    IF_SETSIZE(int2, int3, 0, 0, comp(1396, 6));
    IF_SETPOSITION(0, int3, 1, 0, comp(1396, 8));
    int3 = ((int3 + IF_GETHEIGHT(comp(1396, 8))) + (4 * 2));
    IF_SETPOSITION(0, int3, 1, 0, comp(1396, 9));
    IF_SETSIZE(640, int3, 0, 1, comp(1396, 9));
    return;
}