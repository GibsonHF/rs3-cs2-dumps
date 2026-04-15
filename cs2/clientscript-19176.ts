//
function script19176(int0: obj, int1: int, int2: int, int3: obj, int4: int, int5: int, int6: obj, int7: int, int8: int, int9: unknown_int, int10: unknown_int): void {
    IF_SETPOSITION(0, 25, 1, 2, comp(1288, 108));
    IF_SETHIDE(true, comp(1288, 107));
    var string0 = "";
    if ((int9 == 1)) {
        string0 = "Milestone Level Reward";
        switch (int10) {
            case 50263: {
                IF_SETPOSITION(0, 0, 1, 1, comp(1288, 87));
                break;
            }
            case 2951: {
                IF_SETPOSITION(0, 0, 1, 1, comp(1288, 87));
                break;
            }
            default: {
                IF_SETPOSITION(-15, 0, 2, 1, comp(1288, 87));
                break;
            }
        };
    } else {
        string0 = script19177(int10);
        switch (int10) {
            case 50263: {
                IF_SETPOSITION(0, 0, 1, 1, comp(1288, 87));
                break;
            }
            case 2951: {
                IF_SETPOSITION(0, 0, 1, 1, comp(1288, 87));
                break;
            }
            default: {
                IF_SETPOSITION(-15, 0, 0, 1, comp(1288, 87));
                break;
            }
        };
    };
    IF_SETTEXT(string0, comp(1288, 91));
    var int11 = 0;
    if ((script19178(1, int0, int1, int2) == 1)) {
        int11 = (int11 + 1);
    };
    if ((script19178(2, int3, int4, int5) == 1)) {
        int11 = (int11 + 1);
    };
    if ((script19178(3, int6, int7, int8) == 1)) {
        int11 = (int11 + 1);
    };
    var int12 = -5;
    var int13 = comp(-1, 65535);
    var int14 = -1;
    var int15 = -1;
    var int16 = comp(-1, 65535);
    switch (int11) {
        case 0: {
            IF_SETHIDE(true, comp(1288, 83));
            script6574(1);
            return;
        }
        case 1: {
            [int13, int14, int15, int16] = script19179(1);
            switch (int10) {
                case 32986: {
                    if (((int9 == 1) && (varbitplayer_51594 >= 138))) {
                        script17136(int16);
                    } else {
                        IF_SETPOSITION(0, int12, 1, 1, int16);
                    };
                    break;
                }
                default: {
                    IF_SETPOSITION(0, int12, 1, 1, int16);
                    break;
                }
            };
            break;
        }
        case 2: {
            [int13, int14, int15, int16] = script19179(1);
            IF_SETPOSITION(-90, int12, 1, 1, int16);
            [int13, int14, int15, int16] = script19179(2);
            IF_SETPOSITION(90, int12, 1, 1, int16);
            break;
        }
        case 3: {
            [int13, int14, int15, int16] = script19179(1);
            IF_SETPOSITION(30, int12, 0, 1, int16);
            [int13, int14, int15, int16] = script19179(2);
            IF_SETPOSITION(0, int12, 1, 1, int16);
            [int13, int14, int15, int16] = script19179(3);
            IF_SETPOSITION(30, int12, 2, 1, int16);
            break;
        }
    };
    IF_SETHIDE(false, comp(1288, 83));
    return;
}