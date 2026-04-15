//
function script10334(): void {
    var int0 = 0;
    if ((PLAYER_GROUP_FIND() == 1)) {
        int0 = script10275();
        if ((int0 != -1)) {
            script10335(PLAYER_GROUP_MEMBER_GET_STATUS(int0));
        };
    };
    return;
}