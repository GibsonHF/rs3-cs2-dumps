//
function script13742(int0: component, int1: component, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: int, int12: int, int13: int, string0: string): void {
    var int14 = 27 as fontmetrics;
    if ((script6431() == true)) {
        int14 = 28 as fontmetrics;
    };
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = STRING_LENGTH(string0);
    var int20 = script10495(0);
    var string1 = "";
    CC_DELETEALL(int0);
    IF_SETSIZE(IF_GETWIDTH(int1), IF_GETHEIGHT(int1), 0, 0, int0);
    IF_SETPOSITION(IF_GETX(int1), IF_GETY(int1), 0, 0, int0);
    while ((int16 < 12)) {
        switch (int16) {
            case 0: {
                if ((int2 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 1: {
                if ((int3 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 2: {
                if ((int4 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 3: {
                if ((int5 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 4: {
                if ((int6 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 5: {
                if ((int7 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 6: {
                if ((int8 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 7: {
                if ((int9 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 8: {
                if ((int10 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 9: {
                if ((int11 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 10: {
                if ((int12 > -1)) {
                    int15 = 1;
                };
                break;
            }
            case 11: {
                if ((int13 > -1)) {
                    int15 = 1;
                };
                break;
            }
        };
        if ((int15 == 1)) {
            int18 = STRING_INDEXOF_STRING(string0, "<br>", int17);
            if (((int17 < int19) && (int18 != -1))) {
                string1 = SUBSTRING(string0, int17, MIN(int18, int19));
                CC_CREATE(int0, 4, int16);
                CC_SETPOSITION(0, (15 * int16), 0, 0);
                CC_SETSIZE(0, 15, 1, 0);
                CC_SETTEXTFONT(int14);
                CC_SETCOLOUR(16777215);
                CC_SETTEXT(string1);
                CC_SETTEXTALIGN(0, 0, 0);
                CC_SETOP(1, "Go To");
                CC_SETOPCURSOR(1, 210);
                CC_SETONMOUSEOVER(callback(script13743, int20, -2147483645, CC_GETID()));
                CC_SETONMOUSELEAVE(callback(script13743, 16777215, -2147483645, CC_GETID()));
                int17 = (int18 + 4);
                int15 = 0;
            } else {
                return;
            };
        } else {
            return;
        };
        int16 = (int16 + 1);
    };
    return;
}