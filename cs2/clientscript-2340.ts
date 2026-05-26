//
function script2340(): void {
    varclient_770 = 2;
    CAM_MOVEALONG(0, varclient_770, 500, 900, 1, varclient_770);
    IF_SETONCAMFINISHED(callback(script2344), comp(558, 0));
    return;
}