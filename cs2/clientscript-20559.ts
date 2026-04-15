//
function script20559(): void {
    IF_SETTEXT(`Radiant Stars Available : ${TOSTRING_LOCALISED(varplayer_12582, 1)}`, comp(1485, 36));
    if ((varplayer_12583 == 0)) {
        return;
    };
    var int0 = enum_getvalue(0, 17, 681 as cs2enum, varplayer_12583);
    var int1 = script20456(int0);
    if ((varplayer_12583 > 0)) {
        if ((script20569(int0) == 0)) {
            varplayer_12584 = 0;
        } else if ((script11151(int0) >= 50000000)) {
            varplayer_12584 = 0;
        } else if ((STAT_VISIBLE_XP(int0) >= 200000000)) {
            varplayer_12584 = 0;
        } else if ((varplayer_12584 == 0)) {
            if ((varplayer_12582 > 0)) {
                varplayer_12584 = 1;
            };
        } else if ((varplayer_12584 > int1)) {
            varplayer_12584 = int1;
        };
    } else {
        varplayer_12584 = 0;
    };
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_12584, 1), comp(1485, 82));
    script20576();
    return;
}