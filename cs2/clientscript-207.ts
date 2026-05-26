//
function script207(): void {
    if ((IF_GETHIDE(41156614) == 1)) {
        IF_SETOP(1, "Close key", 41156610);
        IF_SETHIDE(0, 41156614);
    } else {
        IF_SETOP(1, "Open key", 41156610);
        IF_SETHIDE(1, 41156614);
    };
    return;
}