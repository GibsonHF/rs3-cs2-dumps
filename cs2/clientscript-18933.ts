//
function script18933(int0: component, int1: component, int2: component, int3: struct, int4: int, int5: int, int6: int, int7: int, int8: int, int9: boolean): int {
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 1;
    var int20 = struct_getparam(int3, 7513);
    var string0 = struct_getparam(int3, 7528);
    var string1 = struct_getparam(int3, 7527);
    var int21 = script2973(int3);
    int21 = script2524(int3, int21);
    switch (int20) {
        case 3: {
            int10 = (int8 - 25);
            int16 = (int10 - 8);
            int15 = script20478(string0, int16, 2100 as dbrow, 0);
            int17 = script20478(string1, int16, 17514 as dbrow, 0);
            int14 = (int15 + MAX((int17 + 8), 25));
            int13 = 18;
            int12 = 18;
            int11 = ((int7 + (int14 / 2)) - 9);
            int18 = 1;
            break;
        }
        case 4:
        case 9: {
            int10 = ((int8 - 200) - 7);
            int16 = (int10 - 8);
            int15 = script20478(string0, int16, 2100 as dbrow, 0);
            int17 = script20478(string1, int16, 17514 as dbrow, 0);
            int14 = MAX((int15 + MAX((int17 + 8), 25)), 28);
            int13 = 200;
            int12 = 24;
            int11 = ((int7 + (int14 / 2)) - 11);
            int18 = 0;
            break;
        }
        case 5: {
            int10 = 5;
            int16 = (int8 - 10);
            int15 = script20478(string0, int16, 2100 as dbrow, 0);
            int17 = script20478(string1, int16, 17514 as dbrow, 0);
            int14 = ((int15 + 24) + MAX((int17 + 8), 26));
            int13 = int16;
            int12 = 24;
            int11 = ((int7 + 25) + int15);
            int18 = 0;
            break;
        }
        case 1000:
        case 1001:
        case 1002:
        case 10: {
            int10 = ((int8 - 200) - 7);
            int16 = (int10 - 8);
            int15 = script20478(string0, int16, 2100 as dbrow, 0);
            int17 = script20478(string1, int16, 17514 as dbrow, 0);
            int14 = MAX((int15 + MAX((int17 + 8), 24)), 28);
            int13 = 200;
            int12 = 24;
            int11 = ((int7 + (int14 / 2)) - 12);
            int18 = 0;
            break;
        }
        case 6:
        case 7:
        case 8: {
            int10 = 5;
            int16 = (int8 - 10);
            int15 = script20478(string0, int16, 2100 as dbrow, 0);
            int17 = script20478(string1, int16, 17514 as dbrow, 0);
            int14 = ((int15 + MAX((int17 + 8), 22)) + 30);
            int13 = int16;
            int12 = 30;
            int11 = ((int7 + MAX((int17 + 8), 22)) + int15);
            int18 = 0;
            break;
        }
        case 11: {
            int10 = 5;
            int16 = (int8 - 10);
            int15 = script20478(struct_getparam(int3, 5390), int16, 2196 as dbrow, 0);
            int14 = (5 + int15);
            int13 = int16;
            int12 = int15;
            int11 = (int7 + 5);
            int18 = 0;
            break;
        }
        case 2: {
            int10 = 5;
            int16 = (int8 - 10);
            int15 = script20478(struct_getparam(int3, 7518), int16, 2100 as dbrow, 0);
            int14 = (5 + int15);
            int13 = int16;
            int12 = int15;
            int11 = (int7 + 5);
            int18 = 0;
            break;
        }
        default: {
            int18 = 0;
            break;
        }
    };
    if (((int20 != 11) && (int20 != 2))) {
        if ((int9 == false)) {
            script2682(int0, int8, int14, 0, int7, 1, int6);
            script2995(int0, IF_GETNEXTSUBID(int0), 4, (int7 + 4), 0, 0, int16, int17, 0, 0, 17514 as dbrow, string1);
            script2995(int0, IF_GETNEXTSUBID(int0), 4, ((int7 + 4) + int17), 0, 0, int16, int15, 0, 0, 2100 as dbrow, string0);
        } else {
            script6204(int0, int8, int14, 0, int7, 1, 28683 as struct);
            script2995(int0, IF_GETNEXTSUBID(int0), 4, (int7 + 4), 0, 0, int16, int17, 0, 0, 17514 as dbrow, string1);
            CC_SETCOLOUR(script10495(5));
            script2995(int0, IF_GETNEXTSUBID(int0), 4, ((int7 + 4) + int17), 0, 0, int16, int15, 0, 0, 2100 as dbrow, string0);
            CC_SETCOLOUR(script10495(5));
        };
        var int6 = (int6 + 1);
    };
    script2830(int0, int1, int2, int3, int10, int11, int13, int12, int4, int5, int21, int9);
    if (((int18 == 1) && (CC_FINDBYCATEGORY(int1, int4, int5) == 1))) {
        CC_SETSIZE((int8 - (2 * 4)), int14, 0, 0);
        CC_SETPOSITION(4, int7, 0, 0);
    };
    return ((int7 + int14) + 10);
}