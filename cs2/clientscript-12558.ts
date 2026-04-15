//
function script12558(int0: int, int1: unknown_int): void {
    var int2 = MAX(1, SCALE(470, 100, (int0 / 10)));
    if ((int1 == 1)) {
        IF_SETSIZE(int2, 13, 0, 0, comp(1768, 6));
    } else {
        IF_SETONTIMER(callback(script12559, int2), comp(1768, 6));
    };
    return;
}