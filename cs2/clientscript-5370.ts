//
function script5370(int0: number, int1: number, string0: string, string1: string): void {
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(951, 14));  // agidad_overlay:numbers
    } else {
        IF_SETHIDE(false, comp(951, 14));  // agidad_overlay:numbers
    };
    if ((int1 == 1)) {
        IF_SETHIDE(true, comp(951, 2));  // agidad_overlay:timerbar
    } else {
        IF_SETHIDE(false, comp(951, 2));  // agidad_overlay:timerbar
    };
    IF_SETTEXT(string0, comp(951, 48));  // agidad_overlay:event_name
    IF_SETTEXT(string1, comp(951, 51));  // agidad_overlay:event_desc
    var int2 = STRINGWIDTH(string1, 28 as fontmetrics);
    IF_SETSIZE((int2 + 16), IF_GETHEIGHT(comp(951, 1)), 0, 0, comp(951, 1));  // agidad_overlay:desc
    int2 = STRINGWIDTH(string0, 28 as fontmetrics);
    IF_SETSIZE((int2 + 16), IF_GETHEIGHT(comp(951, 3)), 0, 0, comp(951, 3));  // agidad_overlay:title
    int2 = MAX(IF_GETWIDTH(comp(951, 1) /*agidad_overlay:desc*/), IF_GETWIDTH(comp(951, 3) /*agidad_overlay:title*/));
    if ((int1 == 0)) {
        int2 = MAX(int2, IF_GETWIDTH(comp(951, 2)));  // agidad_overlay:timerbar
    };
    if ((int0 == 0)) {
        int2 = MAX(int2, IF_GETWIDTH(comp(951, 14)));  // agidad_overlay:numbers
    };
    IF_SETSIZE((int2 + 48), IF_GETHEIGHT(comp(951, 49)), 0, 0, comp(951, 49));  // agidad_overlay:overlay
    var int3 = (IF_GETHEIGHT(comp(951, 1) /*agidad_overlay:desc*/) + IF_GETHEIGHT(comp(951, 3) /*agidad_overlay:title*/));
    if ((int1 == 0)) {
        int3 = (int3 + IF_GETHEIGHT(comp(951, 2)));  // agidad_overlay:timerbar
    };
    IF_SETSIZE(IF_GETWIDTH(comp(951, 49)), int3, 0, 0, comp(951, 49));  // agidad_overlay:overlay
    if ((int0 == 0)) {
        IF_SETPOSITION(0, (7 + IF_GETHEIGHT(comp(951, 49) /*agidad_overlay:overlay*/)), 1, 0, comp(951, 14) /*agidad_overlay:numbers*/);
    };
    return;
}