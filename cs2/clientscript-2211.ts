//
function script2211(): void {
    if ((IF_GETX(varclient_1136) < 339)) {
        IF_SETONTIMER(callback(script2211), 61079553);
        IF_SETPOSITION((1 + IF_GETX(varclient_1136)), IF_GETY(varclient_1136), 0, 0, varclient_1136);
    };
    return;
}