//
function script113(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    if ((RANDOM(2) == 0)) {
        int1 = (5 + RANDOM(12));
    } else {
        int1 = (-5 - RANDOM(12));
    };
    if ((RANDOM(2) == 0)) {
        int2 = (5 + RANDOM(12));
    } else {
        int2 = (-5 - RANDOM(12));
    };
    var int3 = RANDOM(63);
    var int4 = RANDOM(127);
    IF_SETMODELTINT(int3, 4, 60, int4, int0);
    var int5 = (CLIENTCLOCK() + 100);
    IF_SETONTIMER(callback(script5612, int0, int3, int4, RANDOM(2), int5, int1, int2), int0);
    return;
}