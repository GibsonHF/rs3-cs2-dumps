//
function script6623(int0: int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    if ((CLIENTCLOCK() < int0)) {
        if ((MODULO(CLIENTCLOCK(), 11) == 0)) {
            if ((int1 == 1)) {
                stack(int2);
                stack(int3);
                IF_SETGRAPHIC();
                var int1 = 0;
            } else {
                stack(-1);
                stack(int3);
                IF_SETGRAPHIC();
                int1 = 1;
            };
        };
        IF_SETONTIMER(callback(script6623, int0, int1, int2, int3), int3);
    } else {
        stack(-1);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETONTIMER(callback(), int3);
    };
    return;
}