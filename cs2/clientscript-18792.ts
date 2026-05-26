//
function script18792(): void {
    var int0 = 0;
    var int1 = IF_GETGRAPHIC(comp(488, 26));
    if ((int1 == 19529 as graphic)) {
        int0 = 1;
    };
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(488, 28));
        IF_SETGRAPHIC(26179 as graphic, comp(488, 26));
        IF_SETPOSITION(0, -22, 1, 0, comp(488, 26));
    } else {
        IF_SETHIDE(false, comp(488, 28));
        IF_SETGRAPHIC(19529 as graphic, comp(488, 26));
        IF_SETPOSITION(0, 0, 1, 0, comp(488, 26));
    };
    return;
}