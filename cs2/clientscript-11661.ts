//
function script11661(int0: int, int1: unknown_int): void {
    IF_SETHIDE(true, comp(1562, 10));
    IF_SETHIDE(true, comp(1562, 11));
    IF_SETHIDE(true, comp(1562, 12));
    IF_SETHIDE(true, comp(1562, 13));
    CC_DELETEALL(comp(1562, 140));
    var int2 = comp(1562, 8);
    CC_DELETEALL(int2);
    if ((int0 == -1)) {
        if ((int1 == 1)) {
            if ((varclient_4661 == 1)) {
                varclient_4661 = 0;
            };
            script10804();
        };
        return;
    };
    if ((varplayer_5006 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(varplayer_5006, 4419);
    if ((int3 == -1 as struct)) {
        int3 = varplayer_5006;
    };
    var int4 = script10813(varbitplayer_26175);
    var int5 = script10814(varbitplayer_26176);
    var int6 = -1;
    var int7 = 195;
    var int8 = (varclient_4968 + varclient_4969);
    var string0 = "Confirm Purchase";
    var string1 = "You wish to buy";
    var string2 = script11659(int3, 0);
    var string3 = "for";
    var string4 = "";
    var string5 = "(Your balance: ";
    var int9 = 0;
    var int10 = 0;
    switch (int0) {
        case 0: {
            if ((int4 > -1)) {
                IF_SETHIDE(false, comp(1562, 10));
                if ((int4 == 0)) {
                    string1 = "You wish to claim";
                    string4 = "Free";
                    string5 = "";
                } else {
                    string4 = `${TOSTRING_LOCALISED(int4, 1)} RuneCoins`;
                    switch (script16763()) {
                        case 161:
                        case 15:
                        case 22:
                        case 97:
                        case 54:
                        case 63:
                        case 69:
                        case 74:
                        case 56:
                        case 88:
                        case 101:
                        case 108:
                        case 132:
                        case 130:
                        case 131:
                        case 148:
                        case 179:
                        case 196:
                        case 194:
                        case 67: {
                            string4 = strconcat(string4, ` ${script16760(0, int4)}`);
                            break;
                        }
                        case 77: {
                            string4 = strconcat(string4, ` ${script16760(1, int4)}`);
                            break;
                        }
                        case 225: {
                            string4 = strconcat(string4, ` ${script16760(2, int4)}`);
                            break;
                        }
                    };
                    string5 = `${string5}${TOSTRING_LOCALISED(varclient_4659, 1)})`;
                };
            };
            break;
        }
        case 1: {
            if ((int5 > -1)) {
                IF_SETHIDE(false, comp(1562, 11));
                if ((int5 == 0)) {
                    string1 = "You wish to claim";
                    string4 = "Free";
                    string5 = "";
                } else {
                    string4 = `${TOSTRING_LOCALISED(int5, 1)} Loyalty Points`;
                    string5 = `${string5}${TOSTRING_LOCALISED(varclient_4660, 1)})`;
                };
            };
            break;
        }
        case 2: {
            if ((int6 > -1)) {
                IF_SETHIDE(false, comp(1562, 12));
                if ((int6 == 1)) {
                    string4 = `${TOSTRING_LOCALISED(int6, 1)} Bond`;
                } else {
                    string4 = `${TOSTRING_LOCALISED(int6, 1)} Bonds`;
                };
                string5 = `${string5}${TOSTRING_LOCALISED(int8, 1)})`;
            };
            break;
        }
        case 3: {
            if ((((int4 > 0) && (int4 > varclient_4659)) && (int8 > 0))) {
                string0 = "Redeem Bonds";
                string1 = "You wish to top up";
                string3 = "by redeeming";
                int4 = (int4 - varclient_4659);
                int6 = ((int4 / 195) + MIN(1, MODULO(int4, 195)));
                if (((int8 < int6) || (ENUM_GETOUTPUTCOUNT(8808 as cs2enum) < int6))) {
                    int6 = MIN(MIN(int8, int6), ENUM_GETOUTPUTCOUNT(8808 as cs2enum));
                    string5 = "Please note that you will still need additional RuneCoins to purchase this item.";
                    int9 = 1;
                } else {
                    string5 = `${string5}${TOSTRING_LOCALISED(int8, 1)}`;
                    if ((int8 == 1)) {
                        string5 = `${string5} Bond)`;
                    } else {
                        string5 = `${string5} Bonds)`;
                    };
                };
                string2 = `${TOSTRING_LOCALISED((int6 * 195), 1)} RuneCoins`;
                if ((int6 == 1)) {
                    string4 = `${TOSTRING_LOCALISED(int6, 1)} Bond`;
                } else {
                    string4 = `${TOSTRING_LOCALISED(int6, 1)} Bonds`;
                };
                while ((int10 < int6)) {
                    CC_CREATE(comp(1562, 140), 5, int10);
                    int10 = (int10 + 1);
                };
                CC_CREATE(comp(1562, 140), 5, int10);
                CC_SETSIZE(0, 0, 1, 1);
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script11660, 1, 2));
                IF_SETHIDE(0, 102367245);
            };
            break;
        }
    };
    if ((STRING_LENGTH(string4) == 0)) {
        if ((int1 == 1)) {
            if ((varclient_4661 == 1)) {
                varclient_4661 = 0;
            };
            script10804();
        };
        return;
    };
    if ((int1 == 1)) {
        varclient_4661 = 1;
        script10804();
    };
    int10 = 0;
    var int11 = 8;
    var int12 = 0;
    var int13 = IF_GETWIDTH(int2);
    var int14 = 57 as fontmetrics;
    var int15 = 29 as fontmetrics;
    var int16 = 26 as fontmetrics;
    var int17 = script10495(0);
    var int18 = script10495(3);
    var int19 = script10495(6);
    var int20 = script10495(0);
    var int21 = 16777215;
    CC_CREATE(int2, 4, int10);
    CC_SETTEXTFONT(int14);
    CC_SETCOLOUR(int17);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(0, int12, 1, 0);
    CC_SETTEXT(string0);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int13, CC_GETFONTMETRICS(), 0), 1, 0);
    int10 = (int10 + 1);
    int12 = ((int12 + CC_GETHEIGHT()) + (2 * int11));
    CC_CREATE(int2, 4, int10);
    CC_SETTEXTFONT(int16);
    CC_SETCOLOUR(int18);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(0, int12, 1, 0);
    CC_SETTEXT(string1);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int13, CC_GETFONTMETRICS(), 0), 1, 0);
    int10 = (int10 + 1);
    int12 = ((int12 + CC_GETHEIGHT()) + int11);
    CC_CREATE(int2, 4, int10);
    CC_SETTEXTFONT(int15);
    CC_SETCOLOUR(int20);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(0, int12, 1, 0);
    CC_SETTEXT(string2);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int13, CC_GETFONTMETRICS(), 0), 1, 0);
    int10 = (int10 + 1);
    int12 = ((int12 + CC_GETHEIGHT()) + int11);
    CC_CREATE(int2, 4, int10);
    CC_SETTEXTFONT(int16);
    CC_SETCOLOUR(int18);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(0, int12, 1, 0);
    CC_SETTEXT(string3);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int13, CC_GETFONTMETRICS(), 0), 1, 0);
    int10 = (int10 + 1);
    int12 = ((int12 + CC_GETHEIGHT()) + int11);
    CC_CREATE(int2, 4, int10);
    CC_SETTEXTFONT(int15);
    CC_SETCOLOUR(int21);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(0, int12, 1, 0);
    CC_SETTEXT(string4);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int13, CC_GETFONTMETRICS(), 0), 1, 0);
    int10 = (int10 + 1);
    int12 = ((int12 + CC_GETHEIGHT()) + int11);
    if ((strcmp(string5, "") != 0)) {
        CC_CREATE(int2, 4, int10);
        CC_SETTEXTFONT(int16);
        if ((int9 == 1)) {
            CC_SETCOLOUR(int19);
        } else {
            CC_SETCOLOUR(int18);
        };
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETPOSITION(0, int12, 1, 0);
        CC_SETTEXT(string5);
        CC_SETSIZE(0, script7593(CC_GETTEXT(), int13, CC_GETFONTMETRICS(), 0), 1, 0);
        int10 = (int10 + 1);
        int12 = ((int12 + CC_GETHEIGHT()) + int11);
    };
    return;
}