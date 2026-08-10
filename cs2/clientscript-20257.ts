//
function script20257(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): number {
    var int7 = dbrow_getfield(int0, 1343504, int2);
    var int8 = script20144(int7);
    var int9 = script12585(script20142(int1));
    stack(int0);
    stack(int2);
    stack(int9);
    script21095();
    int9 = [];
    var int10 = 1;
    var string0 = dbrow_getfield(int7, 1347584, 0);
    var int11 = dbrow_getfield(int7, 1347696, 0);
    stack(int0);
    stack(int2);
    script21089();
    var int12 = [];
    stack(int0);
    stack(int2);
    script21090();
    var int13 = [];
    var int14 = 17064;
    var int15 = 0;
    if ((int6 == 0)) {
        int15 = 12;
    };
    if ((int8 == 1)) {
        stack(int0);
        stack(int2);
        script21091();
        int12 = [];
        stack(int0);
        stack(int2);
        script21092();
        int13 = [];
    } else {
        int10 = 0;
        if ((int9 == 1)) {
            int11 = dbrow_getfield(int7, 1347712, 0);
        };
    };
    if (((int9 == 1) && (int8 == 0))) {
        stack(int0);
        stack(int2);
        script21093();
        int12 = [];
        stack(int0);
        stack(int2);
        script21094();
        int13 = [];
    };
    script7918((int1 + 100), int2, 0, 4, 1, 0, 66, 60, 0, 0, int12);
    script20258(string0, int1, int2, int6);
    CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, int13));
    CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, int12));
    stack(0);
    stack(int3);
    var int3 = (int3 + 1);
    script7918(0, 14, 1, 0, 40, 40, 0, 0, int11);
    if (((int9 == 1) && (int8 == 0))) {
        CC_SETTRANS(128);
    };
    switch (int6) {
        case 2: {
            stack(0);
            stack(int3);
            int3 = (int3 + 1);
            script7918(4, -10, 2, 1, 24, 24, 0, 0, 9408);
            break;
        }
        case 3: {
            stack(0);
            stack(int3);
            int3 = (int3 + 1);
            script7918(4, -10, 0, 1, 24, 24, 0, 0, 9403);
            break;
        }
    };
    stack(0);
    stack(int3);
    int3 = (int3 + 1);
    script10485(0, 2, 1, 2, (int15 + 4), 32, 1, 0, 2141, string0);
    CC_SETTEXTALIGN(1, 1, 16);
    CC_SETMAXLINES(2);
    script20259(int8, int9);
    return int3;
}