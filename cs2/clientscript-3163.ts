//
function script3163(): void {
    if ((CLAN_GETCHATCOUNT() > 0)) {
        CLAN_LEAVECHAT();
    } else {
        script3015("Join Chat Channel", "", 8, "", "");
    };
    return;
}