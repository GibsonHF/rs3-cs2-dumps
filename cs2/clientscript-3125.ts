//
function script3125(int0: component, int1: int, int2: component, int3: unknown_int, string0: string): void {
    if (((varclient_6542 + 3000) < CLIENTCLOCK())) {
        varclient_6542 = CLIENTCLOCK();
        IF_SETONTIMER(callback(script6258, int2, int3), int2);
    };
    if ((script6431() == false)) {
        script8800(string0, int0, int1);
    } else {
        script426(string0, int0, int1, 0);
    };
    return;
}