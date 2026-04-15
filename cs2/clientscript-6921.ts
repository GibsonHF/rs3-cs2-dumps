//
function script6921(int0: component, int1: int, int2: unknown_int): void {
    if ((int2 == 1)) {
        if ((TESTBIT(varplayer_1587, int1) == 1)) {
            CC_SETGRAPHIC(5925 as graphic);
        } else {
            CC_SETGRAPHIC(5929 as graphic);
        };
        CC_SETCOLOUR[1](script10495(5));
    } else {
        if ((TESTBIT(varplayer_1587, int1) == 1)) {
            CC_SETGRAPHIC(5924 as graphic);
        } else {
            CC_SETGRAPHIC(5928 as graphic);
        };
        CC_SETCOLOUR[1](script10495(0));
    };
    IF_SETONVARTRANSMIT(callback(script6920, -2147483645, CC_GETID(), CC_GETID[1](), int1, int2, 0, 1587, 1), int0);
    IF_SETONOP(callback(script6922, -2147483645, CC_GETID(), CC_GETID[1](), int1, int2, -2147483644), int0);
    return;
}