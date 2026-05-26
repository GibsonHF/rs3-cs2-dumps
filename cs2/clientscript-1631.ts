//
function script1631(): void {
    if ((varclient_1033 <= SPLINE_LENGTH(0))) {
        varclient_1033 = (varclient_1033 + 1);
        switch (varclient_1033) {
            case 2:
            case 4: {
                IF_SETONCAMFINISHED(callback(script1631), comp(75, 0));
                CAM_MOVEALONG(0, varclient_1033, 200, 200, 1, varclient_1033);
                break;
            }
            default: {
                IF_SETONCAMFINISHED(callback(), comp(75, 0));
                break;
            }
        };
    } else {
        varclient_1033 = 0;
    };
    return;
}