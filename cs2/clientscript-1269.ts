//
function script1269(int0: int, int1: int, int2: component): void {
    if (((MODULO(int0, 3000) == 0) && (--int1 <= 0))) {
        IF_SETONTIMER(callback(), int2);
        IF_SETTEXT("", 96010275);
        if ((int2 != 96010269)) {
            IF_SETHIDE(true, int2);
        };
        return;
    };
    IF_SETONTIMER(callback(script1269, (int0 + 1), int1, int2), int2);
    return;
}