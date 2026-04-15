//
function script1475(int0: unknown_int, int1: unknown_int, int2: int): void {
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