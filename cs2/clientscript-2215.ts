//
function script2215(): void {
    if ((IF_GETY(comp(932, 14)) < 180)) {
        IF_SETONTIMER(callback(script2215), comp(932, 1));
        IF_SETPOSITION(IF_GETX(61079566), (2 + IF_GETY(61079566)), 0, 0, 61079566);
    } else {
        varclient_1137 = 0;
    };
    return;
}