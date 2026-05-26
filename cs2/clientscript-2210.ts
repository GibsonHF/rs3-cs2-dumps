//
function script2210(): void {
    if ((IF_GETX(varclient_1136) < 200)) {
        IF_SETONTIMER(callback(script2210), comp(932, 1));
        IF_SETPOSITION((1 + IF_GETX(varclient_1136)), IF_GETY(varclient_1136), 0, 0, varclient_1136);
    };
    return;
}