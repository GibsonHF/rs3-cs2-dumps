//
function script2214(): void {
    if ((varclient_1137 == 1)) {
        if ((IF_GETX(varclient_1136) < 256)) {
            IF_SETPOSITION((1 + IF_GETX(varclient_1136)), IF_GETY(varclient_1136), 0, 0, varclient_1136);
        };
        if ((IF_GETX(varclient_1136) > 256)) {
            IF_SETPOSITION((IF_GETX(varclient_1136) - 1), IF_GETY(varclient_1136), 0, 0, varclient_1136);
        };
        if ((IF_GETY(comp(932, 14)) > 70)) {
            IF_SETPOSITION(IF_GETX(varclient_1136), (IF_GETY(varclient_1136) - 2), 0, 0, varclient_1136);
            IF_SETPOSITION(IF_GETX(comp(932, 14)), (IF_GETY(comp(932, 14)) - 2), 0, 0, comp(932, 14));
            IF_SETONTIMER(callback(script2214), comp(932, 1));
        } else {
            IF_SETHIDE(true, varclient_1136);
            IF_SETONTIMER(callback(script2215), comp(932, 1));
        };
    };
    return;
}