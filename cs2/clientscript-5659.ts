//
function script5659(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = comp(-1, 65535);
    if ((script6431() == true)) {
        int0 = ENUM_GETOUTPUTCOUNT(9458 as cs2enum);
        while ((++int1 < int0)) {
            int2 = enum_getvalue(0, 9, 9568 as cs2enum, int1);
            IF_SETOP(1, "", int2);
        };
    };
    script5653();
    if ((varbitplayer_19964 == 1)) {
        IF_SETHIDE(true, comp(1477, 600));
    } else {
        IF_SETHIDE(false, comp(1477, 600));
    };
    return;
}