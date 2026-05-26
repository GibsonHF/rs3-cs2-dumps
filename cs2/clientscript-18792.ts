//
function script18792(): void {
    var int0 = 0;
    var int1 = IF_GETGRAPHIC(31981594);
    if ((int1 == 19529)) {
        int0 = 1;
    };
    if ((int0 == 1)) {
        IF_SETHIDE(1, 31981596);
        IF_SETGRAPHIC(26179, 31981594);
        IF_SETPOSITION(0, -22, 1, 0, 31981594);
    } else {
        IF_SETHIDE(0, 31981596);
        IF_SETGRAPHIC(19529, 31981594);
        IF_SETPOSITION(0, 0, 1, 0, 31981594);
    };
    return;
}