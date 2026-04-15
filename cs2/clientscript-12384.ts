//
function script12384(int0: int, int1: int): void {
    var int2 = IF_GETWIDTH(comp(1746, 32));
    if ((CLIENTCLOCK() >= int1)) {
        IF_SETSIZE(int2, 6, 0, 0, comp(1746, 33));
    } else {
        IF_SETSIZE((int2 - SCALE(int2, (int1 - int0), (CLIENTCLOCK() - int0))), 6, 0, 0, comp(1746, 33));
    };
    int2 = IF_GETWIDTH(comp(1746, 69));
    if ((CLIENTCLOCK() >= int1)) {
        IF_SETSIZE(int2, 6, 0, 0, comp(1746, 70));
    } else {
        IF_SETSIZE((int2 - SCALE(int2, (int1 - int0), (CLIENTCLOCK() - int0))), 6, 0, 0, comp(1746, 70));
    };
    if ((varclient_5209 == true)) {
        if ((CLIENTCLOCK() >= int1)) {
            IF_SETONTIMER(callback(), comp(1746, 0));
        } else {
            IF_SETONTIMER(callback(script12384, int0, int1), comp(1746, 0));
        };
    } else if ((CLIENTCLOCK() >= int1)) {
        IF_SETONTIMER(callback(), comp(1746, 0));
    } else {
        IF_SETONTIMER(callback(script12384, int0, int1), comp(1746, 0));
    };
    return;
}