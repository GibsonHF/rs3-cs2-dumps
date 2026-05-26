//
function script12565(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = IF_GETHEIGHT(int0);
    var int5 = IF_GETWIDTH(int0);
    IF_SETSIZE(SCALE(int5, 100, varbitplayer_32639), int4, 0, 0, int2);
    IF_SETONTIMER(callback(script12566, script12377((SCALE(int5, 100, varbitplayer_32639) - (IF_GETWIDTH(int3) / 2)), 0, int5), int5, IF_GETWIDTH(int3), int3), int3);
    return;
}