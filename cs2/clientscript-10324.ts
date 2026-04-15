//
function script10324(int0: int, int1: int, int2: int, string0: string): void {
    if ((int0 == -1)) {
        return;
    };
    CC_SETOPBASE(string0);
    if ((int0 != int1)) {
        if ((int2 == MAP_WORLD())) {
            CC_SETOP(4, "Inspect");
        };
        if ((FRIEND_TEST(string0) == 1)) {
            CC_SETOP(1, "Message");
            CC_SETOP(9, "Remove friend");
        } else if ((IGNORE_TEST(string0) == 1)) {
            CC_SETOP(9, "Remove ignore");
        } else {
            CC_SETOP(9, "Add friend");
            CC_SETOP(10, "Add ignore");
        };
        if (((int2 != -1) && (int2 != MAP_WORLD()))) {
            CC_SETOP(5, "Switch world");
        };
    };
    if ((PLAYER_GROUP_MEMBER_IS_OWNER(int0) == 1)) {
        CC_SETOP(7, "Set team");
        if ((int0 != int1)) {
            CC_SETOP(6, "Set rank");
            CC_SETOP(8, "Kick/ban");
        };
    } else if ((script10279(int0) == 1)) {
        CC_SETOP(7, "Set team");
        if ((int0 != int1)) {
            CC_SETOP(8, "Kick/ban");
        };
    } else if ((script10280(int0) == 1)) {
        CC_SETOP(7, "Set team");
    };
    CC_SETONOP(callback(script10325, -2147483645, string0, -2147483644));
    return;
}