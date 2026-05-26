//
function script16015(int0: number, int1: number): void {
    var int2 = MODULO(CLIENTCLOCK(), 200);
    var int3 = -25;
    if ((int2 < 100)) {
        int3 = (int3 + SCALE(int2, 100, 16));
    } else {
        int3 = (int3 + SCALE((200 - int2), 100, 16));
    };
    IF_SETPOSITION(0, int3, 1, 1, int0);
    return;
}