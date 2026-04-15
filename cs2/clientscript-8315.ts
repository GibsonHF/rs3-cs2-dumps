//
function script8315(int0: int, int1: unknown_int, int2: int, int3: int): void {
    if ((script8874() == 0)) {
        script8306();
        return;
    };
    varclient_3467 = int0;
    var int4 = script10405(int0);
    var int5 = script8418(int4, 0);
    var int6 = struct_getparam(int4, 3503);
    var int7 = script1886(int0);
    IF_SENDTOFRONT(int6);
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = script8405(IF_GETPARENTLAYER(int6));
    var int10 = IF_GETWIDTH(int6);
    var int11 = IF_GETWIDTH(int6);
    var int12 = IF_GETHEIGHT(int6);
    var int13 = IF_GETX(int6);
    var int14 = IF_GETY(int6);
    var int15 = 0;
    var int16 = 0;
    [int15, int16] = script8405(int7);
    int15 = (int15 - int8);
    int16 = (int16 - int9);
    var int17 = struct_getparam(int4, 3494);
    var int18 = 0;
    var int19 = 0;
    if ((int17 != -1 as struct)) {
        [int18, int19] = script20539(int17);
    };
    switch (int1) {
        case 0:
        case 3:
        case 5: {
            int13 = (int2 - int8);
            int11 = ((IF_GETWIDTH(int6) + IF_GETX(int6)) - int13);
            if ((int11 < int18)) {
                int13 = (int13 - (int18 - int11));
                int11 = int18;
            };
            break;
        }
        case 2: {
            int11 = (((int2 - int8) - int13) + struct_getparam(int5, 3554));
            if ((int11 < int18)) {
                int11 = int18;
            };
            break;
        }
        case 4: {
            int11 = (((int2 - int8) - int13) + struct_getparam(int5, 3551));
            if ((int11 < int18)) {
                int11 = int18;
            };
            break;
        }
        case 7: {
            int11 = (((int2 - int8) - int13) + struct_getparam(int5, 3561));
            if ((int11 < int18)) {
                int11 = int18;
            };
            break;
        }
    };
    switch (int1) {
        case 0:
        case 1:
        case 2: {
            int14 = (int3 - int9);
            int12 = ((IF_GETHEIGHT(int6) + IF_GETY(int6)) - int14);
            if ((int12 < int19)) {
                int14 = (int14 - (int19 - int12));
                int12 = int19;
            };
            break;
        }
        case 5: {
            int12 = (((int3 - int9) - int14) + struct_getparam(int5, 3560));
            if ((int12 < int19)) {
                int12 = int19;
            };
            break;
        }
        case 6: {
            int12 = (((int3 - int9) - int14) + struct_getparam(int5, 3549));
            if ((int12 < int19)) {
                int12 = int19;
            };
            break;
        }
        case 7: {
            int12 = (((int3 - int9) - int14) + struct_getparam(int5, 3562));
            if ((int12 < int19)) {
                int12 = int19;
            };
            break;
        }
    };
    var int20 = ((int15 + IF_GETWIDTH(int7)) - int11);
    var int21 = ((int16 + IF_GETHEIGHT(int7)) - int12);
    int13 = MAX(int15, MIN(int13, int20));
    int14 = MAX(int16, MIN(int14, int21));
    int11 = MIN(int11, IF_GETWIDTH(int7));
    int12 = MIN(int12, IF_GETHEIGHT(int7));
    IF_SETSIZE(int11, int12, 0, 0, int6);
    IF_SETPOSITION(int13, int14, 0, 0, int6);
    script8688(script8379(int13, int14, int11, int12, int0, int1, 1));
    if (((int10 != int11) && (script12612(int4) == true))) {
        script8359(int0, script8374(struct_getparam(int4, 3509)), script8372(struct_getparam(int4, 3509), int0));
        script1847(int0);
    };
    script8308(int0, script8717(int0), int13, int14, int11, int12);
    script8390(int0);
    return;
}