//
function script10276(string0: string): int {
    if ((strcmp(string0, "") == 0)) {
        return -1;
    };
    var int0 = 0;
    var int1 = -1;
    var int2 = PLAYER_GROUP_MEMBER_COUNT();
    while ((int0 < int2)) {
        if ((strcmp(PLAYER_GROUP_MEMBER_GET_DISPLAYNAME(int0), string0) == 0)) {
            int1 = int0;
            int0 = int2;
        };
        int0 = (int0 + 1);
    };
    return int1;
}