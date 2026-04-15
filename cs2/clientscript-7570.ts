//
function script7570(int0: component, int1: int, int2: int): void {
    if ((varclient_2711 == 4)) {
        if ((int2 < 3)) {
            IF_SETONCAMFINISHED(callback(script7570, int0, int1, (int2 + 1)), int0);
        } else {
            IF_SETONCAMFINISHED(callback(), int0);
            return;
        };
    } else {
        IF_SETONCAMFINISHED(callback(), int0);
    };
    CAM_MOVEALONG(0, int2, int1, int1, 1, int2);
    return;
}