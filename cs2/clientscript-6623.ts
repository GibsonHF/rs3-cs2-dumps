//
function script6623(int0: number, int1: number, int2: number, int3: number): void {
    if ((CLIENTCLOCK() < int0)) {
        if ((MODULO(CLIENTCLOCK(), 11) == 0)) {
            if ((int1 == 1)) {
                IF_SETGRAPHIC(int2, int3);
                var int1 = 0;
            } else {
                IF_SETGRAPHIC(-1 as graphic, int3);
                int1 = 1;
            };
        };
        IF_SETONTIMER(callback(script6623, int0, int1, int2, int3), int3);
    } else {
        IF_SETGRAPHIC(-1 as graphic, int3);
        IF_SETONTIMER(callback(), int3);
    };
    return;
}