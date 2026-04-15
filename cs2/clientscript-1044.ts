//
function script1044(int0: chatphrase, int1: int): void {
    script8543(int1);
    script8618(int1, -1);
    var string0 = CHATPHRASE_GETTEXT(int0);
    if ((script8613(int1) == 1)) {
        string0 = `To ${script8605(int1)}: <col=10F010>${string0}`;
    } else if ((script8613(int1) == 2)) {
        string0 = `[<col=6464A0>${CLAN_GETCHATDISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
    } else if ((script8613(int1) == 8)) {
        if ((unk10993(0) == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int1) == 10)) {
        if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int1) == 13)) {
        if ((PLAYER_GROUP_FIND() == 1)) {
            string0 = `[<col=6464A0>${PLAYER_GROUP_GET_DISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int1) == 15)) {
        if ((PLAYER_GROUP_FIND() == 1)) {
            string0 = `[<col=6464A0>(Team)${PLAYER_GROUP_GET_DISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int1) == 17)) {
        if ((unk10993(1) == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else {
        string0 = string0;
    };
    IF_SETHIDE(true, script8585(int1));
    IF_SETONKEY(callback(), script8556(int1));
    IF_SETHIDE(0, script8586(int1));
    IF_SETHIDE(1, script8588(int1));
    IF_SETHIDE(0, script8590(int1));
    IF_SETHIDE(1, script8594(int1));
    IF_SETHIDE(1, script8598(int1));
    IF_SETHIDE(1, script8599(int1));
    IF_SETHIDE(0, script8600(int1));
    IF_SETCOLOUR(16777215, script8600(int1));
    IF_SETTEXTFONT(26, script8600(int1));
    IF_SETTEXTALIGN(0, 1, 0, script8600(int1));
    IF_SETTEXT(string0, script8600(int1));
    IF_SETTEXTSHADOW(1, script8600(int1));
    IF_SETCOLOUR(15732752, script8591(int1));
    IF_SETTEXTSHADOW(1, script8591(int1));
    CC_DELETEALL(script8592(int1));
    stack(int0);
    stack(script8631(int1));
    stack(0);
    unk11125();
    var int2 = stack();
    CC_CREATE(script8592(int1), 3, 0);
    var int3 = IF_GETWIDTH(script8592(int1));
    var int4 = (int3 - 8);
    var int5 = 1;
    var int6 = 0;
    define_array(250);
    var int7 = 0;
    stack(0);
    stack(36);
    stack(int2);
    stack(0);
    enum_getvalue();
    string0 = stack();
    while (((strcmp("", string0) != 0) && (int5 < 250))) {
        CC_CREATE(script8592(int1), 4, int5);
        CC_SETPOSITION(4, (14 * int6), 0, 0);
        CC_SETSIZE(int4, 14, 0, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETONMOUSEOVER(callback(script1045, int5, script8592(int1), int6, int1));
        CC_SETONCLICK(callback(script1073, script8599(int1), int0, (int5 - 1), int1));
        pop_array(int6, int6);
        string0 = enum_getvalue(0, 36, int2, int5);
        int5 = (int5 + 1);
        int6 = (int6 + 1);
    };
    int7 = (int6 - 1);
    if ((strcmp(enum_getvalue(0, 36, int2, 1000), "non-alpha") != 0)) {
        script520(0, 0, int7, int2);
        int6 = 0;
        while ((int6 <= int7)) {
            if ((CC_FIND(script8592(int1), (push_array(int6) + 1)) == 1)) {
                CC_SETPOSITION(4, (14 * int6), 0, 0);
                CC_SETONMOUSEOVER(callback(script1045, (push_array(int6) + 1), script8592(int1), int6, int1));
            };
            int6 = (int6 + 1);
        };
    };
    int6 = 0;
    while ((int6 < 250)) {
        script1384(int6, push_array(int6));
        int6 = (int6 + 1);
    };
    IF_SETSCROLLSIZE(0, (14 * (int5 - 1)), script8592(int1));
    script8541(script8592(int1), script8593(int1));
    if ((IF_FIND(script8592(int1)) == 1)) {
        cc_setparam(3648, int0);
    };
    if ((IF_FIND(script8586(int1)) == 1)) {
        cc_setparam(3651, 4);
    };
    return;
}