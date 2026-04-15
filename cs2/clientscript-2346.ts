//
function script2346(): void {
    varclient_769 = (varclient_769 + 1);
    if ((varclient_769 >= (SPLINE_LENGTH(0) - 1))) {
        varclient_769 = 0;
        IF_SETONCAMFINISHED(callback(), comp(582, 0));
        return;
    };
    if ((varclient_769 == (SPLINE_LENGTH(0) - 2))) {
        CAM_MOVEALONG(0, varclient_769, 200, 75, 1, varclient_769);
    } else {
        CAM_MOVEALONG(0, varclient_769, 200, 200, 1, varclient_769);
    };
    IF_SETONCAMFINISHED(callback(script2346), comp(582, 0));
    return;
}