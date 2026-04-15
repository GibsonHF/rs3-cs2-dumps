//
function script3127(int0: component, int1: int, int2: unknown_int, int3: component, string0: string): void {
    if (((varclient_6542 + 3000) < CLIENTCLOCK())) {
        varclient_6542 = CLIENTCLOCK();
        IF_SETONTIMER(callback(script6306, int2, int3), int3);
    };
    script8800(string0, int0, int1);
    return;
}