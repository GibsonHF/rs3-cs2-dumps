//
function script12466(int0: int, int1: int, int2: int, int3: int, int4: int, int5: unknown_int): void {
    var int6 = script12452(int0, int2, int3, int4, int5);
    var int7 = script12452(int1, int2, int3, (int4 * 2), int5);
    script12464(int6, (int7 - 1600));
    if ((int0 > int2)) {
        if ((varbitplayer_31196 == 0)) {
            script7545();
            script8079(0);
            return;
        };
        var int0 = -1;
    };
    if ((int1 > int2)) {
        var int1 = -1;
    };
    int0 = (int0 + 1);
    int1 = (int1 + 1);
    IF_SETONTIMER(callback(script12466, int0, int1, int2, int3, int4, int5), 102432768);
    return;
}