//
function script1629(): void {
    varclient_1033 = 1;
    CAM_MOVEALONG(0, varclient_1033, 200, 100, 1, varclient_1033);
    IF_SETONCAMFINISHED(callback(script1631), comp(75, 0));
    return;
}