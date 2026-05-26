//
function script1475(int0: number, int1: number, int2: number): void {
    if ((++int2 > 5)) {
        stack(int1);
        stack(int0);
        IF_SETGRAPHIC();
        IF_SETONTIMER(callback(), int0);
        return;
    };
    IF_SETONTIMER(callback(script1475, int0, int1, int2), int0);
    return;
}