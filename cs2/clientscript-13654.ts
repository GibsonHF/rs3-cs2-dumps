//
function script13654(): void {
    var int0 = 0;
    var int1 = INV_SIZE(93 as inv);
    while ((int0 < int1)) {
        if (((TESTBIT(varplayer_7255, int0) == 1) && (CC_FIND(comp(1900, 2), int0) == 1))) {
            CC_SETTRANS(175);
        };
        int0 = (int0 + 1);
    };
    return;
}