//
function script10805(): void {
    var int0 = comp(1562, 25);
    CC_DELETEALL(int0);
    var string0 = "";
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    if ((varclient_4662 >= 0)) {
        int2 = (varclient_4662 / 20);
        int3 = MODULO(varclient_4662, 20);
    } else {
        int3 = varclient_4662;
    };
    switch (int2) {
        case 0:
        case 1: {
            switch (int3) {
                case 3: {
                    string0 = enum_getstring(10132, varclient_4663);
                    if ((strcmp(string0, "") != 0)) {
                        string0 = ` ${string0}`;
                    };
                    string0 = `${enum_getstring(10131, varclient_4663)}${string0}`;
                    switch (varclient_4663) {
                        case 2: {
                            int1 = 2;
                            break;
                        }
                        case 3: {
                            int1 = 2;
                            break;
                        }
                        case 6: {
                            int1 = 1;
                            break;
                        }
                    };
                    break;
                }
                case 16: {
                    string0 = enum_getstring(10130, int3);
                    int1 = 1;
                    break;
                }
                default: {
                    string0 = enum_getstring(10130, int3);
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (int3) {
                case 3: {
                    string0 = enum_getstring(10129, varclient_4663);
                    if ((strcmp(string0, "") != 0)) {
                        string0 = ` ${string0}`;
                    };
                    string0 = `${enum_getstring(10128, varclient_4663)}${string0}`;
                    switch (varclient_4663) {
                        case 2: {
                            int1 = 3;
                            break;
                        }
                        case 3: {
                            int1 = 3;
                            break;
                        }
                    };
                    break;
                }
                default: {
                    string0 = enum_getstring(10127, int3);
                    break;
                }
            };
            break;
        }
        case -1: {
            string0 = enum_getstring(10126, int3);
            break;
        }
        default: {
            string0 = "Unexpected error.";
            break;
        }
    };
    var int4 = 0;
    var int5 = 8;
    var int6 = 0;
    var int7 = IF_GETWIDTH(int0);
    var int8 = 57 as fontmetrics;
    var int9 = 29;
    var int10 = 26 as fontmetrics;
    var int11 = script10495(0);
    var int12 = script10495(3);
    var int13 = script10495(0);
    var int14 = 16777215;
    CC_CREATE(int0, 4, int4);
    CC_SETTEXTFONT(int8);
    CC_SETCOLOUR(int11);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(0, int6, 1, 0);
    if ((int1 > 1)) {
        CC_SETTEXT("Thank you!");
    } else {
        CC_SETTEXT("Oops!");
    };
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int7, CC_GETFONTMETRICS(), 0), 1, 0);
    int4 = (int4 + 1);
    int6 = ((int6 + CC_GETHEIGHT()) + (2 * int5));
    CC_CREATE(int0, 4, int4);
    CC_SETTEXTFONT(int10);
    CC_SETCOLOUR(int12);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(0, int6, 1, 0);
    CC_SETTEXT(string0);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int7, CC_GETFONTMETRICS(), 0), 1, 0);
    int4 = (int4 + 1);
    int6 = ((int6 + CC_GETHEIGHT()) + int5);
    IF_SETHIDE(true, comp(1562, 26));
    IF_SETHIDE(true, comp(1562, 28));
    IF_SETHIDE(true, comp(1562, 27));
    switch (int1) {
        case 1: {
            IF_SETTEXT("Close", comp(1562, 111));
            IF_SETHIDE(false, comp(1562, 28));
            break;
        }
        case 2: {
            IF_SETTEXT("Done", comp(1562, 111));
            IF_SETHIDE(false, comp(1562, 28));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1562, 27));
            break;
        }
        default: {
            IF_SETHIDE(false, comp(1562, 26));
            break;
        }
    };
    return;
}