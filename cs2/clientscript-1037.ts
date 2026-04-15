//[proc,quickchat_phrase_objdialog]
function script1037(int0: chatphrase, int1: boolean, int2: int): void {
    script8543(int2);
    script8620(int2, int1);
    script8618(int2, -1);
    script8622(int2, 0);
    script8612(int2, "");
    var string0 = CHATPHRASE_GETTEXT(int0);
    if ((script8613(int2) == 1)) {
        string0 = `To ${script8605(int2)}: <col=10F010>${string0}`;
    } else if ((script8613(int2) == 2)) {
        string0 = `[<col=6464A0>${CLAN_GETCHATDISPLAYNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
    } else if ((script8613(int2) == 8)) {
        if ((unk10993(0) == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else if ((script8613(int2) == 10)) {
        if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
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
            string0 = `[<col=6464A0>${ACTIVECLANCHANNEL_GETCLANNAME()}<col=FFFFFF>]: <col=10F010>${string0}`;
        };
    } else {
        string0 = string0;
    };
    IF_SETHIDE(true, script8585(int2));
    IF_SETONKEY(callback(), script8556(int2));
    IF_SETHIDE(0, script8586(int2));
    IF_SETHIDE(1, script8588(int2));
    IF_SETHIDE(1, script8590(int2));
    IF_SETHIDE(0, script8594(int2));
    IF_SETHIDE(1, script8598(int2));
    IF_SETHIDE(1, script8599(int2));
    IF_SETHIDE(0, script8600(int2));
    IF_SETCOLOUR(16777215, script8600(int2));
    IF_SETTEXTFONT(26, script8600(int2));
    IF_SETTEXTALIGN(0, 1, 0, script8600(int2));
    IF_SETTEXT(string0, script8600(int2));
    IF_SETTEXTSHADOW(1, script8600(int2));
    CC_DELETEALL(script8595(int2));
    IF_SETCOLOUR(15732752, script8596(int2));
    IF_SETTEXT("Search for: *", script8596(int2));
    IF_SETTEXTSHADOW(1, script8596(int2));
    IF_SETSCROLLSIZE(0, 0, script8595(int2));
    CC_DELETEALL(script8597(int2));
    if ((IF_FIND(script8596(int2)) == 1)) {
        cc_setparam(3648, int0);
    };
    if ((IF_FIND(script8586(int2)) == 1)) {
        cc_setparam(3651, 2);
    };
    return;
}