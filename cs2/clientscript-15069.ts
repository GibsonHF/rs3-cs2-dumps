//
function script15069(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int1, int3, int2, int4] = script2956();
    IF_SETPOSITION(int1, int3, 0, 0, comp(1621, 21));
    IF_SETSIZE((int1 + int2), (int3 + int4), 1, 1, comp(1621, 21));
    if (((int0 == 0) && (varclient_6682 <= CLIENTCLOCK()))) {
        script11391();
        script11398(-1);
        varclient_6682 = (CLIENTCLOCK() + 10);
    };
    return;
}