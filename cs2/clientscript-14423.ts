//
function script14423(int0: int, int1: unknown_int, int2: component, int3: component, string0: string): void {
    IF_SETTEXT(string0, int3);
    IF_SETCOLOUR(int0, int3);
    IF_SETHIDE(false, int2);
    script365(CLIENTCLOCK(), int1, int2);
    IF_SETONTIMER(callback(script5562, CLIENTCLOCK(), int1, int2), int2);
    return;
}