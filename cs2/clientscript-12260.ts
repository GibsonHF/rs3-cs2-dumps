//
function script12260(int0: number, int1: number, int2: number): void {
    var int3 = (int2 - int1);
    var int4 = (CLIENTCLOCK() - int1);
    var int5 = 0;
    var int6 = -1;
    if ((int4 >= int3)) {
        int6 = 14659;
    } else {
        int5 = SCALE(int4, int3, 138);
        int5 = MAX(int5, 0);
        int5 = MIN(int5, 138);
        int6 = script7988(int5);
    };
    IF_SETGRAPHIC(int6, int0);
    IF_SETONTIMER(callback(script12260, int0, int1, int2), int0);
    return;
}