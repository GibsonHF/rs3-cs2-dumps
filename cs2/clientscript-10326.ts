//
function script10326(int0: number): void {
    var int1 = 99614730;
    stack(callback(script10326, int0));
    stack(int1);
    IF_SETONPLAYERGROUPTRANSMIT();
    if ((PLAYER_GROUP_FIND() == 1)) {
        script10327(int1, int0);
    } else {
        script10328(int1, int0);
    };
    return;
}