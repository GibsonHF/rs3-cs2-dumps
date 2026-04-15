//
function script1687(): void {
    if ((varclient_1044 < (SPLINE_LENGTH(0) - 1))) {
        varclient_1044 = (varclient_1044 + 1);
        CAM_MOVEALONG(0, varclient_1044, 200, 200, 1, varclient_1044);
        IF_SETONCAMFINISHED(callback(script1679), comp(85, 0));
    };
    return;
}