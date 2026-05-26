//
function script20704(): void {
    var int0 = 0;
    var int1 = INV_SIZE(93);
    while ((int0 < int1)) {
        if (((TESTBIT(varplayer_8606, int0) == 1) && (CC_FIND(12058639, int0) == 1))) {
            CC_SETTRANS(175);
        };
        int0 = (int0 + 1);
    };
    return;
}