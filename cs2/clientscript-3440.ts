//
function script3440(int0: number, int1: number, int2: number): void {
    IF_SETGRAPHIC(int1, 106496005);
    IF_SETCOLOUR(int2, 106496005);
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script5243, 255), 106496005);
    } else {
        IF_SETONTIMER(callback(script5243, 0), 106496005);
    };
    return;
}