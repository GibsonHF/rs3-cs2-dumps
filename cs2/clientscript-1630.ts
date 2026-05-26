//
function script1630(): void {
    varclient_1033 = 3;
    CAM_MOVEALONG(0, varclient_1033, 200, 200, 1, varclient_1033);
    IF_SETONCAMFINISHED(callback(script1631), 4915200);
    return;
}