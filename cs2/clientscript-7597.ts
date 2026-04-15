//
function script7597(int0: int, int1: component): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 126;
    var int5 = 99;
    if ((int0 == 0)) {
        IF_SETONTIMER(callback(script7983, 0, int1), int1);
    } else if ((int0 < 61)) {
        int2 = SCALE(int0, 61, 100);
        int3 = SCALE(int4, 100, int2);
        if ((int3 == 0)) {
            IF_SETSIZE(IF_GETWIDTH(int1), 1, 0, 0, int1);
        } else {
            IF_SETONTIMER(callback(script7982, int3, int1), int1);
        };
    } else {
        int2 = SCALE(--int0, 140, 100);
        int3 = (int4 + SCALE(int5, 100, int2));
        IF_SETONTIMER(callback(script7982, int3, int1), int1);
    };
    return;
}