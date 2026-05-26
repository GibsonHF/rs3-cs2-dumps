//
function script2212(): void {
    if ((IF_GETX(varclient_1136) < (IF_GETWIDTH(61079553) - 1))) {
        IF_SETONTIMER(callback(script2212), 61079553);
        IF_SETPOSITION((1 + IF_GETX(varclient_1136)), IF_GETY(varclient_1136), 0, 0, varclient_1136);
    } else {
        IF_SETHIDE(1, varclient_1136);
        IF_SETPOSITION(0, 120, 0, 0, varclient_1136);
    };
    return;
}