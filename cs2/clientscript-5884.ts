//
function script5884(int0: unknown_int): void {
    if ((script19320() == 1)) {
        return;
    };
    var int1 = -1;
    if ((PLAYER_GROUP_FIND() == 1)) {
        int1 = script10275();
        if (((int1 != -1) && operator("==", PLAYER_GROUP_GET_OWNER_SLOT(int1)))) {
            varbitplayer_25836 = (1 - varbitplayer_25836);
            script5894();
        };
    };
    return;
}