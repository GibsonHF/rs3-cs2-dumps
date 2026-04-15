//
function script12260(int0: unknown_int, int1: int, int2: int): void {
    var int3 = (int2 - int1);
    var int4 = (CLIENTCLOCK() - int1);
    var int5 = 0;
    var int6 = -1 as graphic;
    if ((int4 >= int3)) {
        int6 = 14659 as graphic;
    } else {
        int5 = SCALE(int4, int3, 138);
        int5 = MAX(int5, 0);
        int5 = MIN(int5, 138);
        int6 = script7988(int5);
    };
    stack(int6);
    stack(int0);
    IF_SETGRAPHIC();
    IF_SETONTIMER(callback(script12260, int0, int1, int2), int0);
    return;
}