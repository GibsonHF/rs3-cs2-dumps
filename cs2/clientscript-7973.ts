//
function script7973(int0: component, int1: unknown_int): void {
    var string0 = "Action bars are locked.<br>Click to unlock.";
    var string1 = "Unlock action bars";
    if ((varbitplayer_1892 == 1)) {
        if ((int1 == 1)) {
            script6739(12);
        };
        if ((IF_GETGRAPHIC(int0) == 18862 as graphic)) {
        } else if ((IF_GETGRAPHIC(int0) == 18860 as graphic)) {
            stack(18862);
            stack(int0);
            IF_SETGRAPHIC();
        } else if ((IF_GETGRAPHIC(int0) == 18859 as graphic)) {
            stack(18861);
            stack(int0);
            IF_SETGRAPHIC();
        };
    } else {
        string0 = "Action bars are unlocked.<br>Click to lock.";
        string1 = "Lock action bars";
        if ((int1 == 1)) {
            script6739(13);
        };
        if ((IF_GETGRAPHIC(int0) == 18862 as graphic)) {
            stack(18860);
            stack(int0);
            IF_SETGRAPHIC();
        } else if ((IF_GETGRAPHIC(int0) == 18860 as graphic)) {
        } else if ((IF_GETGRAPHIC(int0) == 18859 as graphic)) {
        } else {
            stack(18859);
            stack(int0);
            IF_SETGRAPHIC();
        };
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 93716748);
    IF_SETONMOUSELEAVE(callback(script8805), 93716748);
    script8808();
    IF_SETOP(1, string1, 93716748);
    script6993(0, 0, 0, -1);
    return;
}