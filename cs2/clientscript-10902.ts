//
function script10902(int0: number, int1: number, int2: number, int3: number): void {
    if (((MODULO(CLIENTCLOCK(), 3000) == MODULO(int2, 3000)) && (CLIENTCLOCK() != int2))) {
        if ((++int1 >= 60)) {
            var int1 = 0;
            if ((++int0 >= 24)) {
                var int0 = 0;
            };
        };
        IF_SETTEXT(script10901(int0, int1, 1), int3);
        IF_SETONTIMER(callback(script10902, int0, int1, int2, int3), int3);
    };
    return;
}