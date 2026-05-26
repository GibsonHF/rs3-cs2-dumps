//
function script18937(int0: number, int1: number): void {
    IF_SETHIDE(script12585(IF_GETHIDE(int0)), int0);
    IF_SETHIDE(script12585(IF_GETHIDE(int1)), int1);
    if ((IF_GETHIDE(int1) == 0)) {
        script18938(16, 924, 0);
        IF_SETOP(1, "Close", 37093471);
    } else {
        script18938(0, 0, 1);
        IF_SETOP(1, "Expand", 37093471);
    };
    return;
}