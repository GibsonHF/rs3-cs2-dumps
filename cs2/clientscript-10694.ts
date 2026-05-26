//
function script10694(int0: number, int1: number, int2: number, int3: number, int4: number): void {
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