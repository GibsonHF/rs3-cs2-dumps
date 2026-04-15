//
function script224(): void {
    var int0 = IF_GETHIDE(comp(594, 1));
    var string0 = REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED());
    var string1 = "";
    if ((int0 == true)) {
        IF_SETHIDE(false, comp(594, 1));
    };
    var int1 = script1960();
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var int5 = -1 as chatphrase;
    var string7 = "";
    var int6 = -1;
    var string8 = "";
    var int7 = MAX(0, (int1 - 100));
    var int8 = 0;
    var int9 = 1;
    var int10 = 0;
    var int11 = -1;
    var int12 = 0;
    CC_DELETEALL(comp(594, 12));
    CC_DELETEALL(comp(594, 11));
    CC_DELETEALL(comp(594, 10));
    IF_SETSCROLLSIZE(0, 0, comp(594, 12));
    IF_SETSCROLLPOS(0, 0, comp(594, 12));
    var int13 = -1;
    while ((int7 <= int1)) {
        stack(unk11059(int7));
        [int3, string2, int4, string3, string4, string5, string6, int5, string7, int6, int13] = stack();
        switch (int3) {
            case 0:
            case 4:
            case 27:
            case 28:
            case 29:
            case 43:
            case 103:
            case 104:
            case 26:
            case 30:
            case 31:
            case 125:
            case 115:
            case 137:
            case 138:
            case 139:
            case 136:
            case 140:
            case 143:
            case 146: {
                break;
            }
            default: {
                if (((strcmp(string3, "") != 0) && (strcmp(string7, "") != 0))) {
                    string1 = REMOVETAGS(string4);
                    if (((int3 != 6) && (int3 != 19))) {
                        if ((((int3 == 41) || (int3 == 44)) || (int3 == 9))) {
                            if ((((strcmp(string0, string1) != 0) && (int3 != 6)) && (int3 != 19))) {
                                int10 = 0;
                                stack(PUSH_CONSTANT_INT[16]("<col=", int10));
                                stack(inttostring());
                                stack(">[</col><col=0000FF>");
                                stack(string6);
                                stack(PUSH_CONSTANT_INT[16]("</col><col=", int10));
                                string8 = `${stack()}${inttostring()}>]${string3}: ${string7}`;
                            } else {
                                int10 = 7829367;
                                stack(PUSH_CONSTANT_INT[16]("<col=", int10));
                                string8 = `${stack()}${inttostring()}>[${string6}]${string3}: ${string7}`;
                            };
                        } else {
                            string8 = ` ${string3}: ${string7}`;
                        };
                    } else {
                        string8 = `To ${string3}: ${string7}`;
                    };
                    int9 = PARAHEIGHT(string8, (IF_GETWIDTH(comp(594, 12)) - 5), 26 as fontmetrics);
                    if ((((strcmp(REMOVETAGS(string3), CHAT_PLAYERNAME()) != 0) && (int3 != 6)) && (int3 != 19))) {
                        int12 = 1;
                        CC_CREATE(comp(594, 11), 3, IF_GETNEXTSUBID(comp(594, 11)));
                        CC_SETPOSITION(0, ((int8 * 15) + 2), 0, 0);
                        CC_SETSIZE(456, (int9 * 15), 0, 0);
                        CC_SETCOLOUR(6579300);
                        CC_SETTRANS(255);
                        CC_SETFILL(1);
                        CC_SETONMOUSEOVER(callback(script237, -2147483643));
                        CC_SETONMOUSELEAVE(callback(script238, -2147483643));
                        int11 = IF_GETNEXTSUBID(38928394);
                        CC_CREATE(38928394, 3, int11);
                        CC_SETPOSITION(0, ((int8 * 15) + 2), 0, 0);
                        CC_SETSIZE(456, (int9 * 15), 0, 0);
                        CC_SETCOLOUR(0);
                        CC_SETTRANS(255);
                        CC_SETFILL(1);
                    } else {
                        int11 = -1;
                    };
                    CC_CREATE(comp(594, 12), 4, IF_GETNEXTSUBID(comp(594, 12)));
                    CC_SETPOSITION(5, (int8 * 15), 0, 0);
                    CC_SETSIZE(5, (15 * int9), 1, 0);
                    CC_SETTEXT(string8);
                    CC_SETCOLOUR(11184810);
                    if ((((strcmp(string0, string1) != 0) && (int3 != 6)) && (int3 != 19))) {
                        CC_SETOPBASE(string1);
                        CC_SETOP(1, "Report");
                        CC_SETONOP(callback(script234, -2147483643, int11));
                        CC_SETCOLOUR(16777215);
                    };
                    CC_SETTEXTFONT(26 as fontmetrics);
                    CC_SETTEXTALIGN(0, 1, 15);
                    int8 = (int8 + int9);
                };
                break;
            }
        };
        int7 = (int7 + 1);
    };
    if ((int12 == 0)) {
        CC_CREATE(comp(594, 12), 4, IF_GETNEXTSUBID(comp(594, 12)));
        CC_SETPOSITION(5, (int8 * 15), 0, 0);
        CC_SETSIZE(16384, 15, 2, 0);
        CC_SETTEXT("There is no chat to report at the moment.");
        CC_SETCOLOUR(16711680);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 15);
        int8 = (int8 + 1);
    };
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(594, 9)), (2 + (int8 * 15)), comp(594, 9));
    script31(comp(594, 6), comp(594, 9), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    if ((CC_FIND(comp(594, 6), 1) == 1)) {
        script37(comp(594, 6), comp(594, 9), IF_GETSCROLLHEIGHT(comp(594, 9)), 1);
    };
    if ((int0 == true)) {
        IF_SETHIDE(true, comp(594, 1));
    };
    if ((int8 <= 11)) {
        IF_SETHIDE(true, comp(594, 6));
    };
    return;
}