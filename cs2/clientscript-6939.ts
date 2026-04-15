//
function script6939(int0: obj, int1: unknown_int, int2: obj, int3: unknown_int, int4: obj, int5: unknown_int, int6: obj, int7: unknown_int, int8: obj, int9: unknown_int, int10: obj, int11: unknown_int, int12: obj, int13: unknown_int, int14: obj, int15: unknown_int, int16: unknown_int, int17: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string, string10: string, string11: string, string12: string, string13: string, string14: string, string15: string, string16: string, string17: string, string18: string): void {
    var int18 = comp(751, 37);
    var int19 = comp(751, 17);
    var int20 = comp(751, 35);
    var int21 = comp(751, 18);
    var int22 = comp(751, 36);
    var int23 = comp(751, 19);
    var int24 = comp(751, 24);
    var int25 = comp(751, 25);
    var int26 = comp(751, 20);
    var int27 = comp(751, 22);
    if ((int16 == 1)) {
        int18 = comp(1148, 37);
        int19 = comp(1148, 17);
        int20 = comp(1148, 35);
        int21 = comp(1148, 18);
        int22 = comp(1148, 36);
        int23 = comp(1148, 19);
        int24 = comp(1148, 24);
        int25 = comp(1148, 25);
        int26 = comp(1148, 20);
        int27 = comp(1148, 22);
    };
    script10200();
    var int28 = 8;
    var int29 = 1;
    var int30 = 0;
    var int31 = 0;
    var int32 = comp(-1, 65535);
    var int33 = -1;
    var int34 = 0;
    var string19 = "";
    var int35 = comp(-1, 65535);
    var int36 = -1;
    var int37 = -1;
    var string20 = "";
    var string21 = "";
    var int38 = -1 as obj;
    var int39 = comp(-1, 65535);
    var int40 = 0;
    var int41 = comp(-1, 65535);
    while ((int29 <= int28)) {
        [int32, int39, int35, int41] = script10199(int29, int16);
        switch (int29) {
            case 1: {
                string21 = string3;
                int38 = int0;
                string20 = string4;
                int40 = int1;
                break;
            }
            case 2: {
                string21 = string5;
                int38 = int2;
                string20 = string6;
                int40 = int3;
                break;
            }
            case 3: {
                string21 = string7;
                int38 = int4;
                string20 = string8;
                int40 = int5;
                break;
            }
            case 4: {
                string21 = string9;
                int38 = int6;
                string20 = string10;
                int40 = int7;
                break;
            }
            case 5: {
                string21 = string11;
                int38 = int8;
                string20 = string12;
                int40 = int9;
                break;
            }
            case 6: {
                string21 = string13;
                int38 = int10;
                string20 = string14;
                int40 = int11;
                break;
            }
            case 7: {
                string21 = string15;
                int38 = int12;
                string20 = string16;
                int40 = int13;
                break;
            }
            case 8: {
                string21 = string17;
                int38 = int14;
                string20 = string18;
                int40 = int15;
                break;
            }
        };
        if ((STRING_LENGTH(string21) > 0)) {
            script10465(int32, int39, int35, int41, int30, string21, string20, int38, int40, int36, int37, int17);
            int30 = (int30 + 1);
        };
        int29 = (int29 + 1);
    };
    var int42 = 420;
    var int43 = ((int30 * 40) + 20);
    IF_SETSIZE(int42, int43, 0, 0, int25);
    var int44 = 0;
    var int45 = 0;
    var int46 = 10;
    if ((STRING_LENGTH(string1) == 0)) {
        IF_SETHIDE(true, int23);
    } else {
        int45 = (int42 - 10);
        int44 = (PARAHEIGHT(string1, int45, 27 as fontmetrics) * 13);
        IF_SETTEXT(string1, int24);
        int44 = (int44 + 10);
        IF_SETSIZE(int42, int44, 0, 0, int23);
        int46 = ((int46 + int44) + 10);
        IF_SETHIDE(false, int23);
    };
    if ((STRING_LENGTH(string2) == 0)) {
        IF_SETHIDE(true, int26);
    } else {
        IF_SETTEXT(string2, int27);
        IF_SETPOSITION(10, (int46 - 5), 0, 0, int26);
        int46 = (int46 + IF_GETHEIGHT(int26));
        IF_SETHIDE(false, int26);
    };
    int43 = (int43 + int46);
    IF_SETPOSITION(10, int46, 0, 0, int25);
    int42 = (int42 + 20);
    int43 = (int43 + 10);
    var int47 = 21218 as struct;
    int43 = ((int43 + struct_getparam(int47, 3547)) + struct_getparam(int47, 3549));
    int42 = ((int42 + struct_getparam(int47, 3550)) + struct_getparam(int47, 3551));
    IF_SETSIZE(int42, int43, 0, 0, int18);
    script8421(int19, int20, int21, int22, string0, int47, -1, 1, -1 as graphic, -1 as struct);
    script14164();
    return;
}