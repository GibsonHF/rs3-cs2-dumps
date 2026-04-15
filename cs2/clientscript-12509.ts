//
function script12509(int0: int): void {
    switch ((int0 / 32)) {
        case 0: {
            varclient_5205 = SETBIT(varclient_5205, MODULO(int0, 32));
            break;
        }
        case 1: {
            varclient_5206 = SETBIT(varclient_5206, MODULO(int0, 32));
            break;
        }
    };
    return;
}