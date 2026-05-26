//
function script13135(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = KEYHELD_CTRL();
    var int5 = KEYHELD_ALT();
    var int6 = KEYHELD_SHIFT();
    switch (int3) {
        case 0:
        case 1: {
            if (((int0 != -1) && (int4 == 1))) {
                int5 = 0;
                int6 = 0;
            };
            break;
        }
        case 2:
        case 3: {
            if (((int1 != -1) && (int5 == 1))) {
                int4 = 0;
                int6 = 0;
            };
            break;
        }
        case 4:
        case 5: {
            if (((int2 != -1) && (int6 == 1))) {
                int4 = 0;
                int5 = 0;
            };
            break;
        }
    };
    switch (int3) {
        case 2:
        case 4: {
            if (((int0 != -1) && (int4 == 1))) {
                int5 = 0;
                int6 = 0;
            };
            break;
        }
        case 0:
        case 5: {
            if (((int1 != -1) && (int5 == 1))) {
                int4 = 0;
                int6 = 0;
            };
            break;
        }
        case 1:
        case 3: {
            if (((int2 != -1) && (int6 == 1))) {
                int4 = 0;
                int5 = 0;
            };
            break;
        }
    };
    if ((int0 != -1)) {
        IF_SETHIDE(script12585(int4), int0);
    };
    if ((int1 != -1)) {
        IF_SETHIDE(script12585(int5), int1);
    };
    if ((int2 != -1)) {
        IF_SETHIDE(script12585(int6), int2);
    };
    return;
}