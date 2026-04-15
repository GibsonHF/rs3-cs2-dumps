//
function script2342(): void {
    varclient_770 = 6;
    CAM_MOVEALONG(0, varclient_770, 600, 900, 1, varclient_770);
    IF_SETONCAMFINISHED(callback(script2344), comp(558, 0));
    return;
}