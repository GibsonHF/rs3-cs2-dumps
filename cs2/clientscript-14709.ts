//
function script14709(int0: int): void {
    var int1 = -1;
    var int2 = (CLIENTCLOCK() - int0);
    if ((int2 < 50)) {
        IF_SETTRANS(SCALE(255, 50, int2), comp(512, 12));
    } else if (((int2 >= 50) && (int2 < 150))) {
        IF_SETHIDE(true, comp(512, 12));
    } else if (((int2 >= 150) && (int2 < 200))) {
        int2 = (255 - SCALE(255, 50, (200 - int2)));
        while ((++int1 < IF_GETNEXTSUBID(comp(512, 1)))) {
            if ((CC_FIND(comp(512, 1), int1) == 1)) {
                CC_SETTRANS(int2);
            };
        };
        int1 = -1;
        while ((++int1 < IF_GETNEXTSUBID(comp(512, 9)))) {
            if ((CC_FIND(comp(512, 9), int1) == 1)) {
                CC_SETTRANS(int2);
            };
        };
        IF_SETTRANS(int2, comp(512, 7));
        IF_SETTRANS(int2, comp(512, 8));
        IF_SETTRANS(int2, comp(512, 4));
        IF_SETTRANS(int2, comp(512, 5));
        IF_SETTRANS(int2, comp(512, 11));
    };
    return;
}