//
function script11154(int0: number, int1: number): number {
    var int2 = 0;
    if ((STAT_BASE(9) < 10)) {
        int2 = 180;
    } else if ((STAT_BASE(9) < 20)) {
        int2 = 370;
    } else if ((STAT_BASE(9) < 25)) {
        int2 = 610;
    } else if ((STAT_BASE(9) < 35)) {
        int2 = 920;
    } else if ((STAT_BASE(9) < 40)) {
        int2 = 1110;
    } else if ((STAT_BASE(9) < 50)) {
        int2 = 1380;
    } else if ((STAT_BASE(9) < 55)) {
        int2 = 1670;
    } else if ((STAT_BASE(9) < 65)) {
        int2 = 1940;
    } else if ((STAT_BASE(9) < 70)) {
        int2 = 2250;
    } else if ((STAT_BASE(9) < 80)) {
        int2 = 2500;
    } else if ((STAT_BASE(9) < 85)) {
        int2 = 2780;
    } else if ((STAT_BASE(9) < 90)) {
        int2 = 3050;
    } else if ((STAT_BASE(9) < 95)) {
        int2 = 3370;
    } else {
        int2 = 3880;
    };
    if ((int0 == 1)) {
        int2 = (int2 / 2);
    };
    if ((int1 == 1)) {
        int2 = (int2 + SCALE(int2, 100, 10));
    };
    return int2;
}