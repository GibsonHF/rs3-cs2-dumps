//[proc,quickchat_enter_search]
function script1900(int0: component, int1: component, int2: int, int3: int, int4: int): void {
    script8543(int4);
    script8676(int4, 0);
    script8674(int4, 0);
    var int5 = 0;
    while ((CC_FIND(int0, int5) == 1)) {
        if ((int5 == int2)) {
            CC_SETONMOUSEOVER(callback());
            CC_SETONMOUSELEAVE(callback());
            if ((CC_FIND[1](int1, int5) == 1)) {
                CC_SETHIDE[1](false);
                CC_SETCOLOUR[1](9869175);
            };
        } else {
            CC_SETONMOUSEOVER(callback(script1082, (int3 - 1), int1, int5, int4));
            CC_SETONMOUSELEAVE(callback(script1083, (int3 - 1), int1, int5, int4));
            if ((CC_FIND[1](int1, int5) == 1)) {
                CC_SETHIDE[1](true);
            };
        };
        int5 = (int5 + 1);
    };
    script8618(int4, -1);
    script8622(int4, 0);
    script8612(int4, "");
    var string0 = "Search phrases...";
    if ((script8613(int4) == 1)) {
        string0 = `To ${script8605(int4)}: <col=10F010>${string0}`;
    } else if ((script8613(int4) == 2)) {
        string0 = `[<col=6464A0>${CLAN_GETCHATDISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
    } else if ((script8613(int4) == 8)) {
        if ((unk10993(0) == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int4) == 10)) {
        if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int4) == 13)) {
        if ((PLAYER_GROUP_FIND() == 1)) {
            string0 = `[<col=6464A0>${PLAYER_GROUP_GET_DISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int4) == 15)) {
        if ((PLAYER_GROUP_FIND() == 1)) {
            string0 = `[<col=6464A0>(Team)${PLAYER_GROUP_GET_DISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int4) == 17)) {
        if ((unk10993(1) == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else {
        string0 = string0;
    };
    IF_SETHIDE(false, script8594(int4));
    IF_SETHIDE(true, script8598(int4));
    IF_SETHIDE(true, script8599(int4));
    IF_SETHIDE(false, script8600(int4));
    IF_SETCOLOUR(16777215, script8600(int4));
    IF_SETTEXTFONT(26 as fontmetrics, script8600(int4));
    IF_SETTEXTALIGN(0, 1, 0, script8600(int4));
    IF_SETTEXT(string0, script8600(int4));
    IF_SETTEXTSHADOW(1, script8600(int4));
    CC_DELETEALL(script8595(int4));
    IF_SETCOLOUR(15732752, script8596(int4));
    IF_SETTEXT("Search for: *", script8596(int4));
    IF_SETTEXTSHADOW(1, script8596(int4));
    IF_SETSCROLLSIZE(0, 0, script8595(int4));
    CC_DELETEALL(script8597(int4));
    if ((IF_FIND(script8586(int4)) == 1)) {
        cc_setparam(3651, 3);
    };
    return;
}