//
function script5458(int0: component, int1: int, int2: unknown_int, int3: unknown_int, int4: int, string0: string): void {
    if (((int4 != -1) && ((CLIENTCLOCK() + 50) > int4))) {
        script8800(string0, int0, int1);
        return;
    };
    var string1 = `Total XP: ${script8019(int2)}`;
    if (((int2 == 0) && (script9201() == 1))) {
        string1 = strconcat(string1, `<br>Bonus XP: <col=00FF00>${script9202()}`);
    };
    if ((int3 == 1)) {
        script426(string1, int0, int1, 0);
        return;
    };
    script8800(string1, int0, int1);
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONMOUSEREPEAT(callback(script5458, int0, int1, int2, int3, CLIENTCLOCK(), string1));
    };
    return;
}