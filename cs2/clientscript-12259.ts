//
function script12259(int0: number, int1: number): void {
    var int2 = -1;
    switch (int0) {
        case 1: {
            int2 = 113049606;
            break;
        }
        case 2: {
            int2 = 113049610;
            break;
        }
        case 3: {
            int2 = 113049620;
            break;
        }
    };
    IF_SETHIDE(0, int2);
    var int3 = (CLIENTCLOCK() + (int1 * 30));
    IF_SETONTIMER(callback(script12260, int2, CLIENTCLOCK(), int3), int2);
    return;
}