//
function script1538(): void {
    var int0 = (25 + (14 * PARAHEIGHT(IF_GETTEXT(1179656), 340, 26)));
    if ((IF_GETHEIGHT(1179670) == int0)) {
        IF_SETONTIMER(callback(script1539, 0), 1179662);
    } else {
        IF_SETONTIMER(callback(script1539, int0), 1179662);
    };
    return;
}