//
function script595(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int1, int3, int2, int4] = script2956();
    IF_SETPOSITION(int1, int3, 0, 0, 90898432);
    IF_SETSIZE((int1 + int2), (int3 + int4), 1, 1, 90898432);
    if (((int0 == 0) && (varclient_6682 <= CLIENTCLOCK()))) {
        script829();
        varclient_6682 = (CLIENTCLOCK() + 10);
    };
    return;
}