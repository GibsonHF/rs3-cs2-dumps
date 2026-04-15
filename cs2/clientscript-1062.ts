//[proc,quickchat_menu_add]
function script1062(int0: component, int1: int, int2: chatcat, int3: chatcat, int4: unknown_int, int5: int): void {
    var int6 = enum_getvalue(0, 9, script8602(int5), int1);
    var int7 = enum_getvalue(0, 9, script8603(int5), int1);
    CC_DELETEALL(int6);
    CC_DELETEALL(int7);
    if ((int6 == comp(-1, 65535))) {
        return;
    };
    CC_CREATE(int0, 4, int1);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    unk11164(int2);
    var string0 = stack();
    CC_SETOPBASE(string0);
    CC_SETONOP(callback(script1067, int0, int1, int5));
    CC_SETOP(1, "Return to: ");
    if ((int1 > 0)) {
        string0 = ` ${string0} <img=2>`;
    } else if ((script8613(int5) == 1)) {
        string0 = ` To ${script8605(int5)}: <col=10F010>${string0} <img=2>`;
    } else if ((script8613(int5) == 2)) {
        string0 = ` [<col=6464A0>${CLAN_GETCHATDISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0} <img=2>`;
    } else if ((script8613(int5) == 8)) {
        if ((unk10993(0) == 1)) {
            string0 = ` [<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0} <img=2>`;
        };
    } else if ((script8613(int5) == 10)) {
        if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
            string0 = ` [<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0} <img=2>`;
        };
    } else if ((script8613(int5) == 13)) {
        if ((PLAYER_GROUP_FIND() == 1)) {
            string0 = `[<col=6464A0>${PLAYER_GROUP_GET_DISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int5) == 15)) {
        if ((PLAYER_GROUP_FIND() == 1)) {
            string0 = `[<col=6464A0>(Team)${PLAYER_GROUP_GET_DISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int5) == 17)) {
        if ((unk10993(1) == 1)) {
            string0 = ` [<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0} <img=2>`;
        };
    } else {
        string0 = ` ${string0} <img=2>`;
    };
    CC_SETTEXT(string0);
    CC_SETTEXTSHADOW(true);
    CC_SETSIZE((PARAWIDTH(string0, IF_GETWIDTH(int0), 26 as fontmetrics) + 4), IF_GETHEIGHT(int0), 0, 0);
    CC_SETONMOUSEOVER(callback(script1080, script8601(int5), int1));
    CC_SETONMOUSELEAVE(callback(script1081, script8601(int5), int1));
    CC_CREATE[1](script8601(int5), 3, int1);
    CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
    CC_SETCOLOUR[1](5733957);
    CC_SETFILL[1](1);
    CC_SETHIDE[1](1);
    IF_SETHIDE(0, int6);
    CHATCAT_GETSUBCATCOUNT(int2);
    var int8 = stack();
    stack(int2);
    var int9 = CHATCAT_GETPHRASECOUNT();
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1;
    var int17 = 0;
    while ((int10 < int8)) {
        CC_CREATE(int6, 4, int11);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        int14 = CHATCAT_GETSUBCAT(int2, int10);
        unk11164(int14);
        string0 = stack();
        CC_SETONOP(callback(script1060, int6, int7, int11, int0, (int1 + 1), int14, int5));
        CC_SETOPBASE(string0);
        CC_SETOP(1, "Select: ");
        CC_SETONMOUSEOVER(callback(script1082, int1, int7, int11, int5));
        CC_SETONMOUSELEAVE(callback(script1083, int1, int7, int11, int5));
        int16 = CHAR_TOUPPERCASE(CHATCAT_GETSUBCATSHORTCUT(int2, int10));
        if ((CHAR_ISALPHANUMERIC(int16) == 1)) {
            string0 = `<col=F01010>${APPEND_CHAR("", int16)}. <col=FFFFFF>${string0} <img=2>`;
        } else {
            string0 = `${string0} <img=2>`;
        };
        CC_SETTEXT(string0);
        CC_SETTEXTSHADOW(true);
        int12 = PARAWIDTH(string0, IF_GETWIDTH(int0), 26 as fontmetrics);
        if ((int12 > int13)) {
            int13 = int12;
        };
        int10 = (int10 + 1);
        int11 = (int11 + 1);
    };
    int10 = 0;
    while ((int10 < int9)) {
        CC_CREATE(int6, 4, int11);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        int15 = CHATCAT_GETPHRASE(int2, int10);
        string0 = CHATPHRASE_GETTEXT(int15);
        CC_SETONOP(callback(script1070, int0, int15, int1, int5));
        CC_SETOPBASE(string0);
        CC_SETOP(1, "Send: ");
        CC_SETONMOUSEOVER(callback(script1082, int1, int7, int11, int5));
        CC_SETONMOUSELEAVE(callback(script1083, int1, int7, int11, int5));
        if ((int10 < 10)) {
            string0 = `<col=F01010>${inttostring(MODULO((int10 + 1), 10), 10)}. <col=FFFFFF>${string0}`;
        };
        CC_SETTEXT(string0);
        CC_SETTEXTSHADOW(true);
        int12 = PARAWIDTH(string0, IF_GETWIDTH(int0), 26 as fontmetrics);
        if ((int12 > int13)) {
            int13 = int12;
        };
        int10 = (int10 + 1);
        int11 = (int11 + 1);
    };
    if ((int3 != -1 as chatcat)) {
        CC_CREATE(int6, 4, int11);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        unk11164(int3);
        string0 = stack();
        CC_SETONOP(callback(script1060, int6, int7, int11, int0, (int1 + 1), int3, int5));
        CC_SETOPBASE(string0);
        CC_SETOP(1, "Select: ");
        CC_SETONMOUSEOVER(callback(script1082, int1, int7, int11, int5));
        CC_SETONMOUSELEAVE(callback(script1083, int1, int7, int11, int5));
        string0 = `<col=F01010>X. <col=FFFFFF>${string0} <img=2>`;
        CC_SETTEXT(string0);
        CC_SETTEXTSHADOW(1);
        int12 = PARAWIDTH(string0, IF_GETWIDTH(int0), 26);
        if ((int12 > int13)) {
            int13 = int12;
        };
        int11 = (int11 + 1);
    };
    if ((int4 == 1)) {
        CC_CREATE(int6, 4, int11);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETONOP(callback(script1877, int6, int7, int11, int1, int5));
        CC_SETOPBASE("Search phrases");
        CC_SETOP(1, "Select: ");
        CC_SETONMOUSEOVER(callback(script1082, int1, int7, int11, int5));
        CC_SETONMOUSELEAVE(callback(script1083, int1, int7, int11, int5));
        CC_SETTEXT(`<col=F01010>Enter. <col=FFFFFF>Search <img=2>`);
        CC_SETTEXTSHADOW(1);
        int12 = PARAWIDTH(string0, IF_GETWIDTH(int0), 26);
        if ((int12 > int13)) {
            int13 = int12;
        };
        int11 = (int11 + 1);
    };
    if ((IF_FIND(int6) == 1)) {
        cc_setparam(3647, int2);
        cc_setparam(3648, -1);
    };
    int10 = 0;
    var int18 = 0;
    while ((CC_FIND(int6, int10) == 1)) {
        if ((((int17 * 14) + 14) > IF_GETHEIGHT(int6))) {
            int18 = ((int18 + int13) + 4);
            int17 = 0;
        };
        CC_SETSIZE(int13, 14, 0, 0);
        CC_SETPOSITION((int18 + 2), (int17 * 14), 0, 0);
        CC_CREATE[1](int7, 3, int10);
        CC_SETSIZE[1]((CC_GETWIDTH() + 4), CC_GETHEIGHT(), 0, 0);
        CC_SETPOSITION[1]((CC_GETX() - 2), CC_GETY(), 0, 0);
        CC_SETCOLOUR[1](5733957);
        CC_SETFILL[1](1);
        CC_SETHIDE[1](true);
        int10 = (int10 + 1);
        int17 = (int17 + 1);
    };
    int18 = ((int18 + int13) + 4);
    var int19 = IF_GETLAYER(int6);
    IF_SETSIZE(int18, 0, 0, 1, int6);
    IF_SETSIZE(int18, 0, 0, 1, int7);
    IF_SETPOSITION((IF_GETX(int6) + int18), 0, 0, 0, enum_getvalue(0, 9, script8602(int5), (int1 + 1)));
    script1068(int0, int1, int5);
    return;
}