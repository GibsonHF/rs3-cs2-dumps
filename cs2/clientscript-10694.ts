//
function script10694(int0: component, int1: unknown_int, int2: component, int3: int, int4: int): void {
    if ((MODULO(int4, 50) == 0)) {
        if ((int3 == 1)) {
            IF_SETONTIMER(callback(), int0);
            IF_SETHIDE(1, int1);
            return;
        };
        IF_SETTEXT(inttostring(--int3, 10), int2);
    };
    var int4 = (int4 + 1);
    IF_SETONTIMER(callback(script10694, int0, int1, int2, int3, int4), int0);
    return;
}