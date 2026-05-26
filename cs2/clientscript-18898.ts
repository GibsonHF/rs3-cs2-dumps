//
function script18898(int0: number, int1: number): void {
    var int2 = 0;
    CC_DELETEALL(84148254);
    if ((int1 <= IF_GETHEIGHT(84148246))) {
        IF_SETHIDE(1, 84148254);
        IF_SETSCROLLSIZE(0, 0, 84148246);
        IF_SETSCROLLPOS(0, 0, 84148248);
    } else {
        if ((int0 == 0)) {
            int2 = MIN(int1, IF_GETSCROLLY(84148248));
        };
        IF_SETHIDE(0, 84148254);
        IF_SETSCROLLSIZE(0, int1, 84148246);
        IF_SETSCROLLPOS(0, int2, 84148248);
        script7791(84148254, 84148246);
    };
    return;
}