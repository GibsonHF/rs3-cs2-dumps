//
function script18792(): void {
    var int0 = 0;
    var int1 = IF_GETGRAPHIC(comp(488, 26));
    if ((int1 == 19529 as graphic)) {
        int0 = 1;
    };
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(488, 28));
        stack(26179);
        stack(31981594);
        IF_SETGRAPHIC();
        IF_SETPOSITION(0, -22, 1, 0, 31981594);
    } else {
        IF_SETHIDE(false, comp(488, 28));
        stack(19529);
        stack(31981594);
        IF_SETGRAPHIC();
        IF_SETPOSITION(0, 0, 1, 0, 31981594);
    };
    return;
}