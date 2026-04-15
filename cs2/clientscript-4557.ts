//
function script4557(): void {
    if ((CLAN_GETCHATCOUNT() > 0)) {
        CLAN_LEAVECHAT();
    } else {
        if ((varbitplayer_40523 == 0)) {
            MES_TYPED(11, 0, "You need to be a member or a minimum total level of 150 to join a Friends Chat.");
            return;
        };
        script3015("Join Chat Channel", "", 5, "", "");
    };
    return;
}