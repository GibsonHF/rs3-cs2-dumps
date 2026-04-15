//
function script1595(int0: int, string0: string, string1: string): void {
    if ((CLAN_ISSELF(int0) == 0)) {
        CC_SETOPBASE(string0);
        if ((PLAYER_GROUP_FIND() == 1)) {
            CC_SETOP(4, "Invite to group");
        };
        CC_SETOP(10, "Join");
        if ((FRIEND_TEST(string1) == 1)) {
            CC_SETOP(5, "Message");
            CC_SETOP(7, "Remove friend");
        } else if ((IGNORE_TEST(string1) == 1)) {
            CC_SETOP(8, "Remove ignore");
        } else {
            CC_SETOP(5, "Add friend");
            CC_SETOP(6, "Add ignore");
        };
    };
    if ((operator(">=", CLAN_GETCHATMINKICK(CLAN_GETCHATRANK())) && (CLAN_GETCHATRANK() > CLAN_GETCHATUSERRANK(int0)))) {
        CC_SETOP(9, "Kick/ban user");
    };
    return;
}