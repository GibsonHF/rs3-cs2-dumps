//
function script10650(): void {
    if ((varclient_2699 == -1)) {
        return;
    };
    var int0 = enum_getvalue(0, 9, 5961 as cs2enum, varclient_2699);
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = 1;
    if ((varbitplayer_673 == 5)) {
        int1 = 0;
    };
    if ((IF_GETHIDE(int0) == false)) {
        script7493(varclient_2699);
        script7491(varclient_2699, varbitplayer_678, int1, varclient_6786);
    };
    return;
}