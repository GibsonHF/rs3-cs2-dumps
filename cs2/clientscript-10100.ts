//
function script10100(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = IF_GETX(int1);
    var int5 = IF_GETY(int1);
    var int6 = 1;
    if ((int1 == comp(1515, 11))) {  // sb_overlay:big_spider
        int6 = 2;
    };
    switch (int0) {
        case 0: {
            if ((int4 > -30)) {
                int4 = (int4 - int6);
            } else {
                IF_SETONTIMER(callback(), comp(1515, 15));  // sb_overlay:spider_controller
            };
            break;
        }
        case 1: {
            if ((int4 < int2)) {
                int4 = (int4 + int6);
            } else {
                IF_SETONTIMER(callback(), comp(1515, 15));  // sb_overlay:spider_controller
            };
            break;
        }
        case 2: {
            if ((int5 > -30)) {
                int5 = (int5 - int6);
            } else {
                IF_SETONTIMER(callback(), comp(1515, 15));  // sb_overlay:spider_controller
            };
            break;
        }
        case 3: {
            if ((int5 < int3)) {
                int5 = (int5 + int6);
            } else {
                IF_SETONTIMER(callback(), comp(1515, 15));  // sb_overlay:spider_controller
            };
            break;
        }
    };
    IF_SETPOSITION(int4, int5, 0, 0, int1);
    return;
}