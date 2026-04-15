//
function script10280(int0: int): unknown_int {
    if ((int0 == -1)) {
        return 0;
    };
    if ((PLAYER_GROUP_MEMBER_IS_OWNER(int0) == 1)) {
        return 1;
    };
    if ((PLAYER_GROUP_MEMBER_GET_RANK(int0) >= 20)) {
        return 1;
    };
    return 0;
}