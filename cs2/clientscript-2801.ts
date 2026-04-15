//[proc,fade2_generic]
function script2801(int0: component, int1: int, int2: int): void {
    IF_SETCOLOUR(int2, int0);
    if (((varclient_3696 == 1) && (int1 > 0))) {
        varclient_3696 = 0;
    } else if (((varclient_3696 == 2) && (int1 < 0))) {
        varclient_3696 = 0;
    };
    if ((int1 > 0)) {
        script14987(1);
    };
    if ((varclient_3696 <= 0)) {
        IF_SETONTIMER(callback(script2802, int1, int0), int0);
        if ((int1 > 0)) {
            IF_SETTRANS(0, int0);
        } else {
            IF_SETTRANS(255, int0);
        };
    } else {
        IF_SETONTIMER(callback(), int0);
        if ((varclient_3696 == 1)) {
            IF_SETTRANS(0, int0);
        } else {
            IF_SETTRANS(255, int0);
            script14987(1);
        };
        varclient_3696 = 0;
    };
    return;
}