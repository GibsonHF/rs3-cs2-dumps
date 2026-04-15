//
function script17368(int0: int, int1: component, int2: unknown_int, int3: int): void {
    if ((int0 < int3)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script17368, int0, int1, int2, int3), int1);
        return;
    };
    IF_SETONTIMER(callback(), int1);
    script14948(int1, int2);
    return;
}