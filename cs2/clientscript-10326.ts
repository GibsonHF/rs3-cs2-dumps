//
function script10326(int0: component): void {
    var int1 = comp(1520, 10);
    stack(10326);
    stack(int0);
    stack("i");
    stack(int1);
    IF_SETONPLAYERGROUPTRANSMIT();
    if ((PLAYER_GROUP_FIND() == 1)) {
        script10327(int1, int0);
    } else {
        script10328(int1, int0);
    };
    return;
}