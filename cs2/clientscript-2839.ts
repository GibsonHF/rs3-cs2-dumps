//
function script2839(): void {
    varclient_1068 = 2;
    CAM_MOVEALONG(0, varclient_1068, 350, 400, 1, varclient_1068);
    IF_SETONCAMFINISHED(callback(script2840), comp(384, 0));
    return;
}