//
function script2955(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: unknown_int, int10: graphic, int11: graphic, int12: graphic, int13: graphic): void {
    var int14 = -1;
    var int15 = -1;
    var int16 = 0;
    var int17 = 0;
    var int18 = -1 as graphic;
    var int19 = int4;
    var int20 = int3;
    switch (int7) {
        case 0: {
            int15 = 0;
            int17 = int5;
            int18 = int10;
            int19 = int3;
            int20 = int4;
            break;
        }
        case 1: {
            int14 = 2;
            int16 = int6;
            int18 = int11;
            break;
        }
        case 2: {
            int15 = 2;
            int17 = int5;
            int18 = int12;
            int19 = int3;
            int20 = int4;
            break;
        }
        case 3: {
            int14 = 0;
            int16 = int6;
            int18 = int13;
            break;
        }
    };
    switch (int8) {
        case 0: {
            int15 = 0;
            int17 = 0;
            break;
        }
        case 1: {
            int14 = 2;
            int16 = 0;
            break;
        }
        case 2: {
            int15 = 2;
            int17 = 0;
            break;
        }
        case 3: {
            int14 = 0;
            int16 = 0;
            break;
        }
    };
    if (((int14 == -1) || (int15 == -1))) {
        script12478(`Align X and Y or both -1, direction is ${inttostring(int7, 10)}, position is ${inttostring(int8, 10)}`);
    };
    if ((CC_FINDBYCATEGORY[1](int0, int1, int2) == 1)) {
        CC_SETPOSITION[1](int16, int17, int14, int15);
        if ((int9 == 1)) {
            CC_SETGRAPHIC[1](int18);
            CC_SETSIZE[1](int19, int20, 0, 0);
        };
    };
    return;
}