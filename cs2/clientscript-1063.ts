//[proc,quickchat_response_add]
function script1063(int0: component, int1: chatphrase, int2: int): void {
    var int3 = enum_getvalue(0, 9, script8602(int2), 0);
    var int4 = enum_getvalue(0, 9, script8603(int2), 0);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_CREATE(int0, 4, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    var string0 = CHATPHRASE_GETTEXT(int1);
    if ((script8613(int2) == 1)) {
        string0 = `From ${script8605(int2)}: <col=10F010>${string0}`;
    } else if ((script8613(int2) == 2)) {
        string0 = `[<col=6464A0>${CLAN_GETCHATDISPLAYNAME()}<col=FFFFFF>] ${script8605(int2)}: <col=10F010>${string0}`;
    } else if ((script8613(int2) == 8)) {
        if ((unk10993(0) == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>] ${script8605(int2)}: <col=10F010>${string0}`;
        };
    } else if ((script8613(int2) == 10)) {
        if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>] ${script8605(int2)}: <col=10F010>${string0}`;
        };
    } else if ((script8613(int2) == 13)) {
        if ((PLAYER_GROUP_FIND() == 1)) {
            string0 = `[<col=6464A0>${PLAYER_GROUP_GET_DISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int2) == 15)) {
        if ((PLAYER_GROUP_FIND() == 1)) {
            string0 = `[<col=6464A0>(Team)${PLAYER_GROUP_GET_DISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int2) == 17)) {
        if ((unk10993(1) == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>] ${script8605(int2)}: <col=10F010>${string0}`;
        };
    } else {
        string0 = `${script8605(int2)}: <col=10F010>${string0}`;
    };
    CC_SETTEXT(string0);
    CC_SETTEXTSHADOW(true);
    CC_SETSIZE(PARAWIDTH(string0, IF_GETWIDTH(int0), 26 as fontmetrics), IF_GETHEIGHT(int0), 0, 0);
    IF_SETHIDE(false, int3);
    var int5 = CHATPHRASE_GETAUTORESPONSECOUNT(int1);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1 as chatphrase;
    var int11 = 0;
    while ((int6 < int5)) {
        CC_CREATE(int3, 4, int7);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        int10 = CHATPHRASE_GETAUTORESPONSE(int1, int6);
        string0 = CHATPHRASE_GETTEXT(int10);
        CC_SETONOP(callback(script1070, int0, int10, 0, int2));
        CC_SETOPBASE(string0);
        CC_SETOP(1, "Send: ");
        CC_SETONMOUSEOVER(callback(script1082, 0, int4, int7, int2));
        CC_SETONMOUSELEAVE(callback(script1083, 0, int4, int7, int2));
        if ((int6 < 10)) {
            string0 = `<col=F01010>${inttostring(MODULO((int6 + 1), 10), 10)}. <col=FFFFFF>${string0}`;
        };
        CC_SETTEXT(string0);
        CC_SETTEXTSHADOW(true);
        int8 = PARAWIDTH(string0, IF_GETWIDTH(int0), 26 as fontmetrics);
        if ((int8 > int9)) {
            int9 = int8;
        };
        int6 = (int6 + 1);
        int7 = (int7 + 1);
    };
    if ((IF_FIND(int3) == 1)) {
        cc_setparam(3647, -1);
        cc_setparam(3648, int1);
    };
    int6 = 0;
    var int12 = 0;
    while ((CC_FIND(int3, int6) == 1)) {
        if ((((int11 * 14) + 14) > IF_GETHEIGHT(int3))) {
            int12 = ((int12 + int9) + 4);
            int11 = 0;
        };
        CC_SETSIZE(int9, 14, 0, 0);
        CC_SETPOSITION((int12 + 2), (int11 * 14), 0, 0);
        CC_CREATE[1](int4, 3, int6);
        CC_SETSIZE[1]((CC_GETWIDTH() + 4), CC_GETHEIGHT(), 0, 0);
        CC_SETPOSITION[1]((CC_GETX() - 2), CC_GETY(), 0, 0);
        CC_SETCOLOUR[1](5733957);
        CC_SETFILL[1](1);
        CC_SETHIDE[1](true);
        int6 = (int6 + 1);
        int11 = (int11 + 1);
    };
    int12 = ((int12 + int9) + 4);
    var int13 = IF_GETLAYER(int3);
    IF_SETSIZE(int12, 0, 0, 1, int3);
    IF_SETSIZE(int12, 0, 0, 1, int4);
    script1068(int0, 0, int2);
    return;
}