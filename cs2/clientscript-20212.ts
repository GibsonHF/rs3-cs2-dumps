//
function script20212(int0: int): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = IF_GETWIDTH(comp(1401, 8));
    var int3 = SCALE(int2, 500, 456);
    if ((int1 < 50)) {
        IF_SETTRANS(SCALE(255, 50, int1), comp(1401, 11));
    } else if ((int1 < 150)) {
        int1 = (int1 - 50);
        IF_SETTRANS(255, comp(1401, 11));
        stack(35284);
        stack(91815946);
        IF_SETGRAPHIC();
        IF_SETTRANS((255 - SCALE(255, 100, int1)), 91815946);
        IF_SETTRANS((255 - SCALE(255, 100, int1)), 91815942);
    } else if ((int1 < 250)) {
        IF_SETTRANS(0, comp(1401, 10));
        IF_SETTRANS(0, comp(1401, 6));
        int1 = (int1 - 150);
        IF_SETTRANS((255 - SCALE(255, 100, int1)), comp(1401, 13));
    } else if ((int1 < 350)) {
        IF_SETTRANS(0, comp(1401, 13));
        int1 = (int1 - 250);
        int2 = (500 - SCALE(500, 200, int1));
    } else if ((int1 < 450)) {
        if ((int1 == 351)) {
            script20224();
        };
        int1 = (int1 - 350);
        script20220((255 - SCALE(255, 100, int1)));
        script20221((255 - SCALE(255, 100, int1)));
    } else {
        script20220(0);
        script20221(0);
        IF_SETONTIMER(callback(), comp(1401, 3));
    };
    IF_SETSIZE(700, (int3 - 20), 0, 1, comp(1401, 9));
    IF_SETSIZE(int2, int3, 0, 0, comp(1401, 8));
    IF_SETPOSITION(0, int3, 1, 0, comp(1401, 12));
    int3 = ((int3 + IF_GETHEIGHT(comp(1401, 12))) + (4 * 2));
    IF_SETPOSITION(0, int3, 1, 0, comp(1401, 14));
    IF_SETSIZE(0, int3, 1, 1, comp(1401, 14));
    return;
}