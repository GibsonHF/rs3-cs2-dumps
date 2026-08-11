//
function script10197(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number, int16: number, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string, string10: string, string11: string, string12: string, string13: string, string14: string, string15: string, string16: string, string17: string, string18: string): void {
    var int17 = comp(751, 37);  // trh_dialog_select:root_layer
    var int18 = 49217553;
    var int19 = 49217571;
    var int20 = 49217554;
    var int21 = 49217572;
    var int22 = comp(751, 19);  // trh_dialog_select:info_layer
    var int23 = comp(751, 24);  // trh_dialog_select:info_text
    var int24 = comp(751, 25);  // trh_dialog_select:select_panel
    var int25 = comp(751, 20);  // trh_dialog_select:checkbox_layer
    var int26 = comp(751, 22);  // trh_dialog_select:checkbox_text
    if ((int16 == 1)) {
        int17 = comp(1148, 37);  // trh_dialog_select_overlay:root_layer
        int18 = 75235345;
        int19 = 75235363;
        int20 = 75235346;
        int21 = 75235364;
        int22 = comp(1148, 19);  // trh_dialog_select_overlay:info_layer
        int23 = comp(1148, 24);  // trh_dialog_select_overlay:info_text
        int24 = comp(1148, 25);  // trh_dialog_select_overlay:select_panel
        int25 = comp(1148, 20);  // trh_dialog_select_overlay:checkbox_layer
        int26 = comp(1148, 22);  // trh_dialog_select_overlay:checkbox_text
    };
    script10200();
    var int27 = 8;
    var int28 = 1;
    var int29 = 0;
    var int30 = 0;
    var int31 = -1;
    var int32 = -1;
    var int33 = 0;
    var string19 = "";
    var int34 = -1;
    var string20 = "";
    var string21 = "";
    var int35 = -1;
    var int36 = -1;
    var int37 = 0;
    var int38 = -1;
    while ((int28 <= int27)) {
        [int31, int36, int34, int38] = script10199(int28, int16);
        switch (int28) {
            case 1: {
                string21 = string3;
                int35 = int0;
                string20 = string4;
                int37 = int1;
                break;
            }
            case 2: {
                string21 = string5;
                int35 = int2;
                string20 = string6;
                int37 = int3;
                break;
            }
            case 3: {
                string21 = string7;
                int35 = int4;
                string20 = string8;
                int37 = int5;
                break;
            }
            case 4: {
                string21 = string9;
                int35 = int6;
                string20 = string10;
                int37 = int7;
                break;
            }
            case 5: {
                string21 = string11;
                int35 = int8;
                string20 = string12;
                int37 = int9;
                break;
            }
            case 6: {
                string21 = string13;
                int35 = int10;
                string20 = string14;
                int37 = int11;
                break;
            }
            case 7: {
                string21 = string15;
                int35 = int12;
                string20 = string16;
                int37 = int13;
                break;
            }
            case 8: {
                string21 = string17;
                int35 = int14;
                string20 = string18;
                int37 = int15;
                break;
            }
        };
        if ((STRING_LENGTH(string21) > 0)) {
            script10198(int31, int36, int34, int38, int29, string21, string20, int35, int37);
            int29 = (int29 + 1);
        };
        int28 = (int28 + 1);
    };
    var int39 = 420;
    var int40 = ((int29 * 40) + 10);
    IF_SETSIZE(int39, int40, 0, 0, int24);
    var int41 = 0;
    var int42 = 0;
    var int43 = 10;
    if ((STRING_LENGTH(string1) == 0)) {
        IF_SETHIDE(true, int22);
    } else {
        int42 = (int39 - 10);
        int41 = (PARAHEIGHT(string1, int42, 27 as fontmetrics) * 13);
        IF_SETTEXT(string1, int23);
        int41 = (int41 + 10);
        IF_SETSIZE(int39, int41, 0, 0, int22);
        int43 = ((int43 + int41) + 10);
        IF_SETHIDE(false, int22);
    };
    if ((STRING_LENGTH(string2) == 0)) {
        IF_SETHIDE(true, int25);
    } else {
        IF_SETTEXT(string2, int26);
        IF_SETPOSITION(10, (int43 - 5), 0, 0, int25);
        int43 = (int43 + IF_GETHEIGHT(int25));
        IF_SETHIDE(false, int25);
    };
    int40 = (int40 + int43);
    IF_SETPOSITION(10, int43, 0, 0, int24);
    int39 = (int39 + 20);
    int40 = (int40 + 4);
    var int44 = 21218;
    int40 = ((int40 + struct_getparam(int44, 3547)) + struct_getparam(int44, 3549));
    int39 = ((int39 + struct_getparam(int44, 3550)) + struct_getparam(int44, 3551));
    IF_SETSIZE(int39, int40, 0, 0, int17);
    script8421(int18, int19, int20, int21, string0, int44, -1, 1, -1, -1);
    script14164();
    return;
}