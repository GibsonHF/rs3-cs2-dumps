//
function script6264(): [number, number, number, number, number, number, number, number] {
    var int0 = -1;
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    var int4 = varbitplayer_4662;
    var int5 = -1;
    var int6 = -1;
    if ((STAT_BASE(10 as stat) >= 76)) {
        int0 = 384;
        int5 = 383;
        int2 = 372;
        int6 = 371;
    } else if ((STAT_BASE(10 as stat) >= 50)) {
        int0 = 372;
        int5 = 371;
        int2 = 378;
        int6 = 377;
    } else if ((STAT_BASE(10 as stat) >= 40)) {
        int0 = 378;
        int5 = 377;
        int2 = 360;
        int6 = 359;
    } else if ((STAT_BASE(10 as stat) >= 35)) {
        int0 = 360;
        int5 = 359;
        int2 = 332;
        int6 = 331;
    } else if ((STAT_BASE(10 as stat) >= 30)) {
        int0 = 332;
        int5 = 331;
        int2 = 350;
        int6 = 349;
    } else if ((STAT_BASE(10 as stat) >= 25)) {
        int0 = 350;
        int5 = 349;
        int2 = 336;
        int6 = 335;
    } else if ((STAT_BASE(10 as stat) >= 20)) {
        int0 = 336;
        int5 = 335;
        int2 = 346;
        int6 = 345;
    } else if ((STAT_BASE(10 as stat) >= 10)) {
        int0 = 346;
        int5 = 345;
        int2 = 328;
        int6 = 345;
    } else if ((STAT_BASE(10 as stat) >= 5)) {
        int0 = 328;
        int5 = 327;
        int2 = 318;
        int6 = 317;
    } else {
        int0 = 318;
        int5 = 317;
        int2 = -1;
        int6 = -1;
    };
    if ((int2 == -1)) {
        int1 = (varbitplayer_4662 / 2);
    } else {
        int1 = (((varbitplayer_4662 * 2) / 3) / 2);
        int3 = ((varbitplayer_4662 / 3) / 2);
        int4 = (int4 - ((int1 + int3) * 2));
    };
    return [int0, int1, int2, int3, (2 * (int1 + int3)), int4, int5, int6];
}