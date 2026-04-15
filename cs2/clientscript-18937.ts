//
function script18937(int0: component, int1: component): void {
    IF_SETHIDE(script12585(IF_GETHIDE(int0)), int0);
    IF_SETHIDE(script12585(IF_GETHIDE(int1)), int1);
    if ((IF_GETHIDE(int1) == false)) {
        script18938(16, 924, false);
        IF_SETOP(1, "Close", comp(566, 95));
    } else {
        script18938(0, 0, true);
        IF_SETOP(1, "Expand", comp(566, 95));
    };
    return;
}