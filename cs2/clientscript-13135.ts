//
function script13135(int0: component, int1: component, int2: component, int3: unknown_int): void {
    var int4 = KEYHELD_CTRL();
    var int5 = KEYHELD_ALT();
    var int6 = KEYHELD_SHIFT();
    switch (int3) {
        case 0:
        case 1: {
            if (((int0 != comp(-1, 65535)) && (int4 == true))) {
                int5 = false;
                int6 = false;
            };
            break;
        }
        case 2:
        case 3: {
            if (((int1 != comp(-1, 65535)) && (int5 == true))) {
                int4 = false;
                int6 = false;
            };
            break;
        }
        case 4:
        case 5: {
            if (((int2 != comp(-1, 65535)) && (int6 == true))) {
                int4 = false;
                int5 = false;
            };
            break;
        }
    };
    switch (int3) {
        case 2:
        case 4: {
            if (((int0 != comp(-1, 65535)) && (int4 == true))) {
                int5 = false;
                int6 = false;
            };
            break;
        }
        case 0:
        case 5: {
            if (((int1 != comp(-1, 65535)) && (int5 == true))) {
                int4 = false;
                int6 = false;
            };
            break;
        }
        case 1:
        case 3: {
            if (((int2 != comp(-1, 65535)) && (int6 == true))) {
                int4 = false;
                int5 = false;
            };
            break;
        }
    };
    if ((int0 != comp(-1, 65535))) {
        IF_SETHIDE(script12585(int4), int0);
    };
    if ((int1 != comp(-1, 65535))) {
        IF_SETHIDE(script12585(int5), int1);
    };
    if ((int2 != comp(-1, 65535))) {
        IF_SETHIDE(script12585(int6), int2);
    };
    return;
}