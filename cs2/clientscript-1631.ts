//
function script1631(): void {
    if ((varclient_1033 <= SPLINE_LENGTH(0))) {
        varclient_1033 = (varclient_1033 + 1);
        switch (varclient_1033) {
            case 2:
            case 4: {
                IF_SETONCAMFINISHED(callback(script1631), 4915200);
                CAM_MOVEALONG(0, varclient_1033, 200, 200, 1, varclient_1033);
                break;
            }
            default: {
                IF_SETONCAMFINISHED(callback(), 4915200);
                break;
            }
        };
    } else {
        varclient_1033 = 0;
    };
    return;
}