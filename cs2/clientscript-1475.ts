//
function script1475(int0: number, int1: number, int2: number): void {
    if ((++int2 > 5)) {
        IF_SETGRAPHIC(int1, int0);
        IF_SETONTIMER(callback(), int0);
        return;
    };
    IF_SETONTIMER(callback(script1475, int0, int1, int2), int0);
    return;
}