//
function script13321(int0: int): void {
    var int1 = 0;
    var int2 = (CLIENTCLOCK() - int0);
    if ((int2 < 50)) {
        int2 = SCALE(255, 50, int2);
        IF_SETTRANS(int2, comp(1853, 3));
    } else if (((int2 >= 50) && (int2 < 150))) {
        IF_SETHIDE(true, comp(1853, 3));
    } else if (((int2 >= 150) && (int2 < 200))) {
        int2 = (255 - SCALE(255, 50, (200 - int2)));
        while ((int1 < IF_GETNEXTSUBID(comp(1853, 4)))) {
            if ((CC_FIND(comp(1853, 4), int1) == 1)) {
                CC_SETTRANS(int2);
            };
            int1 = (int1 + 1);
        };
        int1 = 0;
        while ((int1 < IF_GETNEXTSUBID(comp(1853, 10)))) {
            if ((CC_FIND(comp(1853, 10), int1) == 1)) {
                CC_SETTRANS(int2);
            };
            int1 = (int1 + 1);
        };
        IF_SETTRANS(int2, comp(1853, 7));
        IF_SETTRANS(int2, comp(1853, 6));
        IF_SETTRANS(int2, comp(1853, 8));
        IF_SETTRANS(int2, comp(1853, 9));
    };
    return;
}