//
function script20070(int0: number, int1: number): void {
    var int2 = comp(1357, 0);  // returner_retention_floater:container
    var int3 = comp(1357, 1);  // returner_retention_floater:content_layer
    var int4 = MAX(1, IF_GETWIDTH(int2));
    var int5 = MAX(1, IF_GETHEIGHT(int2));
    if (((int4 > 0) && (int5 > 0))) {
        varclient_8312 = MAX(1, int0);
        varclient_8313 = MAX(1, int1);
        varclient_8312 = MIN(varclient_8312, (int4 - IF_GETWIDTH(int3)));
        varclient_8313 = MIN(varclient_8313, (int5 - IF_GETHEIGHT(int3)));
    };
    IF_SETPOSITION(SCALE(varclient_8312, int4, 16384), SCALE(varclient_8313, int5, 16384), 3, 3, int3);
    return;
}