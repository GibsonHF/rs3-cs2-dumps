//
function script2557(int0: int): void {
    var int1 = enum_getvalue(0, 9, 9993 as cs2enum, int0);
    var int2 = enum_getvalue(0, 9, 9994 as cs2enum, int0);
    var int3 = script2531(int0);
    if ((int3 == varbitplayer_43078)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int2);
        return;
    };
    if ((varbitplayer_43078 == 0)) {
        script2573(int0, 0);
    } else if ((varbitplayer_43078 == 1)) {
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
        IF_SETCOLOUR(16777215, int2);
    } else if ((varbitplayer_43078 == 2)) {
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
        IF_SETCOLOUR(65280, int2);
    } else {
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
        IF_SETCOLOUR(65280, int2);
    };
    return;
}