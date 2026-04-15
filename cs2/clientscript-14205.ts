//
function script14205(int0: unknown_int, int1: int, int2: unknown_int): void {
    if ((WORLDMAP_ISLOADED() == 0)) {
        return;
    };
    var int3 = script8101();
    var int4 = 1;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = varclient_172;
    var int16 = varclient_172;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    if ((script13749() == false)) {
        if ((int1 > 0)) {
            switch (varclient_172) {
                case 37: {
                    int16 = 25;
                    break;
                }
                case 50: {
                    int16 = 37;
                    break;
                }
                case 75: {
                    int16 = 50;
                    break;
                }
                case 100: {
                    int16 = 75;
                    break;
                }
                case 200: {
                    int16 = 100;
                    break;
                }
                default: {
                    int16 = 25;
                    int4 = 0;
                    break;
                }
            };
        } else {
            switch (varclient_172) {
                case 25: {
                    int16 = 37;
                    break;
                }
                case 37: {
                    int16 = 50;
                    break;
                }
                case 50: {
                    int16 = 75;
                    break;
                }
                case 75: {
                    int16 = 100;
                    break;
                }
                case 100: {
                    int16 = 200;
                    break;
                }
                default: {
                    int16 = 200;
                    int4 = 0;
                    break;
                }
            };
        };
    } else if ((int2 == 1)) {
        if ((varclient_172 < 50)) {
            int21 = 1;
        } else {
            int21 = 2;
        };
        int16 = (int15 - (int1 * int21));
    } else if ((int1 > 0)) {
        if (((varclient_172 <= 200) && (varclient_172 > 100))) {
            int16 = 100;
        } else if (((varclient_172 <= 100) && (varclient_172 > 75))) {
            int16 = 75;
        } else if (((varclient_172 <= 75) && (varclient_172 > 50))) {
            int16 = 50;
        } else if (((varclient_172 <= 50) && (varclient_172 > 37))) {
            int16 = 37;
        } else if (((varclient_172 <= 37) && (varclient_172 > 25))) {
            int16 = 25;
        } else {
            int16 = 25;
            int4 = 0;
        };
    } else if (((varclient_172 >= 25) && (varclient_172 < 37))) {
        int16 = 37;
    } else if (((varclient_172 >= 37) && (varclient_172 < 50))) {
        int16 = 50;
    } else if (((varclient_172 >= 50) && (varclient_172 < 75))) {
        int16 = 75;
    } else if (((varclient_172 >= 75) && (varclient_172 < 100))) {
        int16 = 100;
    } else if (((varclient_172 >= 100) && (varclient_172 < 200))) {
        int16 = 200;
    } else {
        int16 = 200;
        int4 = 0;
    };
    if ((((script13749() == false) && (int2 == 1)) && (int4 == 1))) {
        [int5, int6] = WORLDMAP_GETSIZE();
        [int9, int10] = [IF_GETWIDTH(int3), IF_GETHEIGHT(int3)];
        if (((int5 > 0) && (int6 > 0))) {
            [int7, int8] = WORLDMAP_GETDISPLAYPOSITION();
            int11 = ((GET_MOUSEX() - script3365(int3)) - (int9 / 2));
            int12 = ((GET_MOUSEY() - script3366(int3)) - (int10 / 2));
            [int13, int14] = [SCALE(int5, int9, int11), SCALE(int6, int10, int12)];
            int13 = (int7 + int13);
            int14 = (int8 - int14);
            IF_SETONTIMER(callback(script9643, int0, int11, int12, int13, int14, int5, int6, 0), int0);
        };
    };
    script1372(int16, 0);
    script12843(int4);
    return;
}