//
function script11572(int0: stat, int1: component): void {
    var int2 = enum_getvalue(17, 0, 1482 as cs2enum, int0);
    var int3 = 371;
    var int4 = 21363;
    var int5 = 29006;
    var int6 = 0;
    CC_DELETEALL(int1);
    if ((int0 == -1 as stat)) {
        int3 = 3495;
        switch (int0) {
            case 27: {
                IF_SETHIDE(false, comp(1632, 55));
                break;
            }
            case 28: {
                IF_SETHIDE(false, comp(1632, 56));
                break;
            }
        };
    } else if (((int0 == 26 as stat) && (script12654() == 0))) {
        int3 = 3495;
        IF_SETHIDE(false, comp(1632, 54));
    };
    CC_CREATE(int1, 3, int6);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETOP(1, "Toggle");
    CC_SETOPBASE(enum_getvalue(17, 36, 680 as cs2enum, int0));
    CC_SETONOP(callback(script11574, int0, int1, 11));
    script10764(int1, int4, 0, 0, 45, 45, -1);
    IF_SETONMOUSEREPEAT(callback(script11573, int5, int1, int0), int1);
    IF_SETONMOUSELEAVE(callback(script11573, int4, int1, -1), int1);
    int6 = IF_GETNEXTSUBID(int1);
    CC_CREATE(int1, 5, int6);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(enum_getvalue(0, 23, int3, int2));
    var string0 = `You haven't reached the maximum level in ${enum_getvalue(17, 36, 680, int0)}.`;
    int6 = (int6 + 1);
    CC_CREATE(int1, 5, int6);
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    if ((varbitplayer_45287 == 1)) {
        if ((TESTBIT(varplayer_5703, int2) == 1)) {
            CC_SETGRAPHIC(1908 as graphic);
        };
    } else if (((varbitplayer_45287 == 2) && (TESTBIT(varplayer_9013, int2) == 1))) {
        CC_SETGRAPHIC(1908 as graphic);
    };
    return;
}