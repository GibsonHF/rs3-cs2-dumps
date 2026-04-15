//
function script6264(): [obj, int, obj, int, int, int, unknown_int, unknown_int] {
    var int0 = -1 as obj;
    var int1 = 0;
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = varbitplayer_4662;
    var int5 = -1;
    var int6 = -1;
    if ((STAT_BASE(10 as stat) >= 76)) {
        int0 = 384 as obj;
        int5 = 383;
        int2 = 372 as obj;
        int6 = 371;
    } else if ((STAT_BASE(10 as stat) >= 50)) {
        int0 = 372 as obj;
        int5 = 371;
        int2 = 378 as obj;
        int6 = 377;
    } else if ((STAT_BASE(10 as stat) >= 40)) {
        int0 = 378 as obj;
        int5 = 377;
        int2 = 360 as obj;
        int6 = 359;
    } else if ((STAT_BASE(10 as stat) >= 35)) {
        int0 = 360 as obj;
        int5 = 359;
        int2 = 332 as obj;
        int6 = 331;
    } else if ((STAT_BASE(10 as stat) >= 30)) {
        int0 = 332 as obj;
        int5 = 331;
        int2 = 350 as obj;
        int6 = 349;
    } else if ((STAT_BASE(10 as stat) >= 25)) {
        int0 = 350 as obj;
        int5 = 349;
        int2 = 336 as obj;
        int6 = 335;
    } else if ((STAT_BASE(10 as stat) >= 20)) {
        int0 = 336 as obj;
        int5 = 335;
        int2 = 346 as obj;
        int6 = 345;
    } else if ((STAT_BASE(10 as stat) >= 10)) {
        int0 = 346 as obj;
        int5 = 345;
        int2 = 328 as obj;
        int6 = 345;
    } else if ((STAT_BASE(10 as stat) >= 5)) {
        int0 = 328 as obj;
        int5 = 327;
        int2 = 318 as obj;
        int6 = 317;
    } else {
        int0 = 318 as obj;
        int5 = 317;
        int2 = -1 as obj;
        int6 = -1;
    };
    if ((int2 == -1 as obj)) {
        int1 = (varbitplayer_4662 / 2);
    } else {
        int1 = (((varbitplayer_4662 * 2) / 3) / 2);
        int3 = ((varbitplayer_4662 / 3) / 2);
        int4 = (int4 - ((int1 + int3) * 2));
    };
    return [int0, int1, int2, int3, (2 * (int1 + int3)), int4, int5, int6];
}