//
function script3440(int0: number, int1: number, int2: number): void {
    IF_SETGRAPHIC(int1, comp(1625, 5));
    IF_SETCOLOUR(int2, comp(1625, 5));
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script5243, 255), comp(1625, 5));
    } else {
        IF_SETONTIMER(callback(script5243, 0), comp(1625, 5));
    };
    return;
}