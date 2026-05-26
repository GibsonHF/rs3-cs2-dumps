//
function script16395(int0: number, int1: number): void {
    if ((int1 <= 1)) {
        IF_SETHIDE(1, 62586896);
        if ((IF_GETHIDE(62586897) == 1)) {
            IF_SETSIZE(20, 20, 1, 1, 62586892);
        } else {
            IF_SETSIZE(20, 65, 1, 1, 62586892);
        };
        return;
    };
    IF_SETSIZE(20, 65, 1, 1, 62586892);
    CC_DELETEALL(62586881);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 26;
    if ((script6431() == 1)) {
        int5 = 35;
    };
    while ((int2 < int0)) {
        script7852(62586881, int2, int4, 0, 0, 1, int5, int5, 0, 0, 14908, inttostring((int3 + 1), 10));
        if ((script16384(varplayer_8745, int2) == 1)) {
            CC_SETHIDE(1);
        } else {
            CC_SETOP(1, `Page ${inttostring((int3 + 1), 10)}`);
            CC_SETONOP(callback(script16397, -2147483643));
            int4 = (int4 + (int5 + 5));
            int3 = (int3 + 1);
        };
        int2 = (int2 + 1);
    };
    IF_SETSIZE((--int4 + 80), 35, 0, 0, 62586896);
    script16398();
    return;
}