//
function script194(int0: number): void {
    if ((int0 == 1)) {
        if ((CLAN_GETCHATCOUNT() > 0)) {
            CLAN_LEAVECHAT();
        } else {
            script111();
        };
    };
    return;
}