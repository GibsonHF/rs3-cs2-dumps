//
function script2215(): void {
    if ((IF_GETY(comp(932, 14)) < 180)) {  // easter10_nuts:bar
        IF_SETONTIMER(callback(script2215), comp(932, 1));  // easter10_nuts:content
        IF_SETPOSITION(IF_GETX(comp(932, 14)), (2 + IF_GETY(comp(932, 14))), 0, 0, comp(932, 14));  // easter10_nuts:bar
    } else {
        varclient_1137 = 0;
    };
    return;
}