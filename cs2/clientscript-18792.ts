//
function script18792(): void {
    var int0 = 0;
    var int1 = IF_GETGRAPHIC(31981594);
    if ((int1 == 19529)) {
        int0 = 1;
    };
    if ((int0 == 1)) {
        IF_SETHIDE(1, 31981596);
        stack(26179);
        stack(31981594);
        IF_SETGRAPHIC();
        IF_SETPOSITION(0, -22, 1, 0, 31981594);
    } else {
        IF_SETHIDE(0, 31981596);
        stack(19529);
        stack(31981594);
        IF_SETGRAPHIC();
        IF_SETPOSITION(0, 0, 1, 0, 31981594);
    };
    return;
}