//
function script1677(): void {
    IF_SETONTIMER(callback(script1688), comp(85, 0));
    varclient_1046 = 0;
    varclient_1045 = 0;
    varclient_1051 = 0;
    varclient_1048 = 0;
    varclient_1049 = 255;
    varclient_1044 = 0;
    script1678();
    CAM_MOVEALONG(0, 0, 200, 200, 1, 0);
    IF_SETONCAMFINISHED(callback(script1679), 5570560);
    return;
}