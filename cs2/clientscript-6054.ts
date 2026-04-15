//
function script6054(int0: component, int1: unknown_int): void {
    var int2 = 35;
    if ((int1 == 0)) {
        IF_SETTRANS(MAX((IF_GETTRANS(int0) - int2), 0), int0);
        if ((IF_GETTRANS(int0) <= 0)) {
            IF_SETONTIMER(callback(script6054, -2147483645, 1), int0);
        };
    } else {
        IF_SETTRANS(MIN((IF_GETTRANS(int0) + int2), 255), int0);
        if ((IF_GETTRANS(int0) >= 255)) {
            IF_SETHIDE(true, int0);
            IF_SETONTIMER(callback(script6054, -2147483645, 0), int0);
            return;
        };
    };
    return;
}