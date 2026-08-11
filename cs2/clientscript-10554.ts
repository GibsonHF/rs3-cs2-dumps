//
function script10554(int0: number, int1: number): void {
    if ((varclient_4588 < varbitplayer_24915)) {
        varclient_4588 = (varclient_4588 + 1);
    } else if ((varclient_4588 > varbitplayer_24915)) {
        varclient_4588 = (varclient_4588 - 1);
    } else {
        return;
    };
    IF_SETSIZE(((varclient_4588 * 16384) / 100), 0, 2, 1, comp(1532, 32));  // runemach_dnd:green_large_progress_value_layer_1
    return;
}