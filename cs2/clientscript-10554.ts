//
function script10554(int0: unknown_int, int1: unknown_int): void {
    if ((varclient_4588 < varbitplayer_24915)) {
        varclient_4588 = (varclient_4588 + 1);
    } else if ((varclient_4588 > varbitplayer_24915)) {
        varclient_4588 = (varclient_4588 - 1);
    } else {
        return;
    };
    IF_SETSIZE(((varclient_4588 * 16384) / 100), 0, 2, 1, comp(1532, 32));
    return;
}