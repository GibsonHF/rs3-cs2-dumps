//
function script3912(int0: number, int1: number, string0: string): void {
    script8800(string0, int0, int1);
    var int2 = (CLIENTCLOCK() + 2);
    IF_SETONTIMER(callback(script3913, int0, int1, int2), comp(1477, 909));
    return;
}