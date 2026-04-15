//
function script3440(int0: unknown_int, int1: unknown_int, int2: unknown_int): void {
    stack(int1);
    stack(106496005);
    IF_SETGRAPHIC();
    IF_SETCOLOUR(int2, 106496005);
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script5243, 255), comp(1625, 5));
    } else {
        IF_SETONTIMER(callback(script5243, 0), comp(1625, 5));
    };
    return;
}