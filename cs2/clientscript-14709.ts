//
function script14709(int0: number): void {
    var int1 = -1;
    var int2 = (CLIENTCLOCK() - int0);
    if ((int2 < 50)) {
        IF_SETTRANS(SCALE(255, 50, int2), 33554444);
    } else if (((int2 >= 50) && (int2 < 150))) {
        IF_SETHIDE(1, 33554444);
    } else if (((int2 >= 150) && (int2 < 200))) {
        int2 = (255 - SCALE(255, 50, (200 - int2)));
        while ((++int1 < IF_GETNEXTSUBID(33554433))) {
            if ((CC_FIND(33554433, int1) == 1)) {
                CC_SETTRANS(int2);
            };
        };
        int1 = -1;
        while ((++int1 < IF_GETNEXTSUBID(33554441))) {
            if ((CC_FIND(33554441, int1) == 1)) {
                CC_SETTRANS(int2);
            };
        };
        IF_SETTRANS(int2, 33554439);
        IF_SETTRANS(int2, 33554440);
        IF_SETTRANS(int2, 33554436);
        IF_SETTRANS(int2, 33554437);
        IF_SETTRANS(int2, 33554443);
    };
    return;
}