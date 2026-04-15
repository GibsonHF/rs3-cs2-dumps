//
function script11574(int0: stat, int1: component, int2: int): void {
    if (((int0 == 26 as stat) && (script12654() == 0))) {
        return;
    };
    if ((int0 == -1 as stat)) {
        script426("You cannot select this option right now.", int1, int2, 1);
        return;
    };
    var int3 = enum_getvalue(17, 0, 1482 as cs2enum, int0);
    if ((varbitplayer_45287 == 1)) {
        if ((TESTBIT(varplayer_5703, int3) == 0)) {
            varplayer_5703 = SETBIT(varplayer_5703, int3);
        } else {
            varplayer_5703 = CLEARBIT(varplayer_5703, int3);
        };
        if ((CC_FIND(int1, int2) == 1)) {
            if ((TESTBIT(varplayer_5703, int3) == 0)) {
                CC_SETGRAPHIC(-1 as graphic);
            } else {
                CC_SETGRAPHIC(1908 as graphic);
            };
        };
    } else if ((varbitplayer_45287 == 2)) {
        if ((TESTBIT(varplayer_9013, int3) == 0)) {
            varplayer_9013 = SETBIT(varplayer_9013, int3);
        } else {
            varplayer_9013 = CLEARBIT(varplayer_9013, int3);
        };
        if ((CC_FIND(int1, int2) == 1)) {
            if ((TESTBIT(varplayer_9013, int3) == 0)) {
                CC_SETGRAPHIC(-1 as graphic);
            } else {
                CC_SETGRAPHIC(1908 as graphic);
            };
        };
    };
    IF_CALLONRESIZE(int1);
    return;
}