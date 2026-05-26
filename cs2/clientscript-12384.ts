//
function script12384(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(114425888);
    if ((CLIENTCLOCK() >= int1)) {
        IF_SETSIZE(int2, 6, 0, 0, 114425889);
    } else {
        IF_SETSIZE((int2 - SCALE(int2, (int1 - int0), (CLIENTCLOCK() - int0))), 6, 0, 0, 114425889);
    };
    int2 = IF_GETWIDTH(114425925);
    if ((CLIENTCLOCK() >= int1)) {
        IF_SETSIZE(int2, 6, 0, 0, 114425926);
    } else {
        IF_SETSIZE((int2 - SCALE(int2, (int1 - int0), (CLIENTCLOCK() - int0))), 6, 0, 0, 114425926);
    };
    if ((varclient_5209 == true)) {
        if ((CLIENTCLOCK() >= int1)) {
            IF_SETONTIMER(callback(), 114425856);
        } else {
            IF_SETONTIMER(callback(script12384, int0, int1), 114425856);
        };
    } else if ((CLIENTCLOCK() >= int1)) {
        IF_SETONTIMER(callback(), 114425856);
    } else {
        IF_SETONTIMER(callback(script12384, int0, int1), 114425856);
    };
    return;
}