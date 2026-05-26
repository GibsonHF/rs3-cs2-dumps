//
function script13321(int0: number): void {
    var int1 = 0;
    var int2 = (CLIENTCLOCK() - int0);
    if ((int2 < 50)) {
        int2 = SCALE(255, 50, int2);
        IF_SETTRANS(int2, 121438211);
    } else if (((int2 >= 50) && (int2 < 150))) {
        IF_SETHIDE(1, 121438211);
    } else if (((int2 >= 150) && (int2 < 200))) {
        int2 = (255 - SCALE(255, 50, (200 - int2)));
        while ((int1 < IF_GETNEXTSUBID(121438212))) {
            if ((CC_FIND(121438212, int1) == 1)) {
                CC_SETTRANS(int2);
            };
            int1 = (int1 + 1);
        };
        int1 = 0;
        while ((int1 < IF_GETNEXTSUBID(121438218))) {
            if ((CC_FIND(121438218, int1) == 1)) {
                CC_SETTRANS(int2);
            };
            int1 = (int1 + 1);
        };
        IF_SETTRANS(int2, 121438215);
        IF_SETTRANS(int2, 121438214);
        IF_SETTRANS(int2, 121438216);
        IF_SETTRANS(int2, 121438217);
    };
    return;
}