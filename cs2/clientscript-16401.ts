//
function script16401(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int2, int3, int4, int5] = script14244();
    var int6 = IF_GETWIDTH(comp(955, 8));
    var int7 = IF_GETHEIGHT(comp(955, 8));
    var int8 = ((int2 + ((int4 - int2) / 2)) - (int6 / 2));
    var int9 = (int3 + 33);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        int10 = script6355();
        int11 = script6356();
        int13 = CC_GETWIDTH();
        int12 = CC_GETHEIGHT();
    };
    var int14 = 1;
    var int15 = 0;
    while ((int14 == 1)) {
        switch (int15) {
            case 0: {
                break;
            }
            case 1: {
                int9 = (int5 - int7);
                break;
            }
            case 2: {
                int8 = int2;
                int9 = int3;
                break;
            }
            case 3: {
                int8 = (int4 - int6);
                int9 = int3;
                break;
            }
            case 4: {
                int8 = int2;
                int9 = (int5 - int7);
                break;
            }
            case 5: {
                int8 = (int4 - int6);
                int9 = (int5 - int7);
                break;
            }
            default: {
                if ((int10 <= ((int4 - int2) / 2))) {
                    if ((int11 <= ((int5 - int3) / 2))) {
                        IF_SETPOSITION((int4 - int6), (int5 - int7), 0, 0, comp(955, 8));
                    } else {
                        IF_SETPOSITION((int4 - int6), int3, 0, 0, comp(955, 8));
                    };
                } else if ((int11 <= ((int5 - int3) / 2))) {
                    IF_SETPOSITION(int2, (int5 - int7), 0, 0, comp(955, 8));
                } else {
                    IF_SETPOSITION(int2, int3, 0, 0, comp(955, 8));
                };
                IF_SETONTIMER(callback(script16403, int0, int1, int2, int3, int4, int5), 62586885);
                return;
            }
        };
        if ((((int8 + int6) >= int10) && ((int9 + int7) >= int11))) {
            int14 = 1;
        } else {
            int14 = 0;
        };
        int15 = (int15 + 1);
    };
    IF_SETPOSITION(int8, int9, 0, 0, comp(955, 8));
    IF_SETONTIMER(callback(script16403, int0, int1, int2, int3, int4, int5), 62586885);
    return;
}