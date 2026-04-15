//
function script5948(int0: unknown_int, int1: component, int2: component, int3: unknown_int, int4: component, int5: component, int6: unknown_int, int7: component, int8: component, int9: unknown_int): void {
    var int10 = 0;
    var int11 = -1;
    var int12 = comp(-1, 65535);
    var int13 = comp(-1, 65535);
    while ((int10 < 3)) {
        switch (int10) {
            case 0: {
                int11 = int0;
                int12 = int1;
                int13 = int2;
                break;
            }
            case 1: {
                int11 = int3;
                int12 = int4;
                int13 = int5;
                break;
            }
            case 2: {
                int11 = int6;
                int12 = int7;
                int13 = int8;
                break;
            }
        };
        if ((int11 != -1)) {
            IF_SETONOP(callback(script6317, int1, int2, int4, int5, int7, int8, int9, int10), int11);
            IF_SETONVARTRANSMIT(callback(script6048, int12, int13, int9, int10, 627, 1), int11);
        };
        if ((int12 != comp(-1, 65535))) {
            script6057(int12, int9, int10);
        };
        if ((int13 != comp(-1, 65535))) {
            IF_SETONMOUSEOVER(callback(script5995, -2147483645), int13);
            IF_SETONMOUSELEAVE(callback(script5996, -2147483645, int9, int10), int13);
            script6056(int13, int9, int10);
        };
        int10 = (int10 + 1);
    };
    return;
}