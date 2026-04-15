//
function script5232(int0: component, int1: unknown_int): void {
    if (((SPLINE_LENGTH(0) == 5) && (varclient_1007 == 2))) {
        if ((int1 == 1)) {
            CAM_MOVEALONG(0, 1, 800, 700, 1, 1);
            IF_SETONCAMFINISHED(callback(script5232, int0, 2), int0);
            return;
        };
        if ((int1 == 2)) {
            CAM_MOVEALONG(0, 2, 700, 40, 1, 2);
        };
    };
    IF_SETONCAMFINISHED(callback(), int0);
    return;
}