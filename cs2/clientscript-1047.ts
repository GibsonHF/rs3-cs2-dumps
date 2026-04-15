//[proc,quickchat_phrase_countdialog]
function script1047(int0: chatphrase, int1: int): void {
    script8543(int1);
    script8622(int1, 0);
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
    IF_SETHIDE(0, script8588(int1));
    IF_SETHIDE(1, script8590(int1));
    IF_SETHIDE(1, script8594(int1));
    IF_SETHIDE(1, script8598(int1));
    IF_SETHIDE(1, script8599(int1));
    IF_SETHIDE(0, script8600(int1));
    IF_SETCOLOUR(16777215, script8600(int1));
    IF_SETTEXTFONT(26, script8600(int1));
    IF_SETTEXTALIGN(0, 1, 0, script8600(int1));
    IF_SETTEXT(string0, script8600(int1));
    IF_SETTEXTSHADOW(1, script8600(int1));
    CC_DELETEALL(script8588(int1));
    IF_SETCOLOUR(15732752, script8589(int1));
    IF_SETTEXT("Please enter a value: *", script8589(int1));
    IF_SETTEXTSHADOW(1, script8589(int1));
    if ((IF_FIND(script8589(int1)) == 1)) {
        cc_setparam(3648, int0);
    };
    if ((IF_FIND(script8586(int1)) == 1)) {
        cc_setparam(3651, 1);
    };
    return;
}