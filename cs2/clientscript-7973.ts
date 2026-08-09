//
function script7973(int0: number, int1: number): void {
    var string0 = "Action bars are locked.<br>Click to unlock.";
    var string1 = "Unlock action bars";
    if ((varbitplayer_1892 == 1)) {
        if ((int1 == 1)) {
            script6739(12);
        };
        if ((IF_GETGRAPHIC(int0) == 18862 as graphic)) {
        } else if ((IF_GETGRAPHIC(int0) == 18860 as graphic)) {
            IF_SETGRAPHIC(18862 as graphic, int0);
        } else if ((IF_GETGRAPHIC(int0) == 18859 as graphic)) {
            IF_SETGRAPHIC(18861 as graphic, int0);
        };
    } else {
        string0 = "Action bars are unlocked.<br>Click to lock.";
        string1 = "Lock action bars";
        if ((int1 == 1)) {
            script6739(13);
        };
        if ((IF_GETGRAPHIC(int0) == 18862 as graphic)) {
            IF_SETGRAPHIC(18860 as graphic, int0);
        } else if ((IF_GETGRAPHIC(int0) == 18860 as graphic)) {
        } else if ((IF_GETGRAPHIC(int0) == 18859 as graphic)) {
        } else {
            IF_SETGRAPHIC(18859 as graphic, int0);
        };
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1430, 270));
    IF_SETONMOUSELEAVE(callback(script8805), comp(1430, 270));
    script8808();
    IF_SETOP(1, string1, comp(1430, 270));
    script6993(0, 0, 0, -1);
    return;
}