//
function script2215(): void {
    if ((IF_GETY(comp(932, 14)) < 180)) {
        IF_SETONTIMER(callback(script2215), comp(932, 1));
        IF_SETPOSITION(IF_GETX(comp(932, 14)), (2 + IF_GETY(comp(932, 14))), 0, 0, comp(932, 14));
    } else {
        varclient_1137 = 0;
    };
    return;
}