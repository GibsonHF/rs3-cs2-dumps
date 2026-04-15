//
function script16014(int0: component, int1: int, int2: int, int3: int, int4: unknown_int): void {
    var int1 = (int1 * -1);
    script16016(int0, SCALE((500 * int1), 100, int3));
    if ((int4 == 0)) {
        return;
    };
    var int5 = MODULO((CLIENTCLOCK() + int2), 200);
    if ((int5 < 100)) {
        IF_SETCOLOUR(script16017(13923046, 2683126, int5), int0);
    } else {
        IF_SETCOLOUR(script16017(2683126, 13923046, (int5 - 100)), int0);
    };
    return;
}