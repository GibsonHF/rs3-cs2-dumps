//
function script8120(int0: component): void {
    var int1 = 0;
    if ((IF_GETWIDTH(int0) < IF_GETHEIGHT(int0))) {
        int1 = 1;
    };
    if (((int0 != comp(1506, 4)) && (varclient_6909 != varbitplayer_28628))) {
        varclient_6909 = varbitplayer_28628;
        if ((varbitplayer_28628 == 1)) {
            script8117(int0, 0, 0, -1, -1, 65280, int1);
        } else {
            script8117(int0, 0, 0, -1, -1, 65535, int1);
        };
    };
    script8124(int0, 1);
    return;
}