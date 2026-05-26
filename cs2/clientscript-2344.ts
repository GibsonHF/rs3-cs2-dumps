//
function script2344(): void {
    if ((varclient_770 < SPLINE_LENGTH(0))) {
        varclient_770 = (varclient_770 + 1);
        switch (varclient_770) {
            case 9:
            case 10:
            case 11: {
                IF_SETONCAMFINISHED(callback(script2344), 36569088);
                CAM_MOVEALONG(0, varclient_770, 900, 900, 1, varclient_770);
                break;
            }
            case 12: {
                IF_SETONCAMFINISHED(callback(), 36569088);
                CAM_MOVEALONG(0, varclient_770, 900, 100, 1, varclient_770);
                break;
            }
            default: {
                IF_SETONCAMFINISHED(callback(), 36569088);
                CAM_MOVEALONG(0, varclient_770, 900, 500, 1, varclient_770);
                break;
            }
        };
    } else {
        varclient_770 = 0;
    };
    return;
}