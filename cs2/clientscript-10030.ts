//
function script10030(int0: unknown_int, int1: unknown_int, string0: string, string1: string, string2: string): void {
    if (((strcmp(string0, "") == 0) || (strcmp(string1, "") == 0))) {
        return;
    };
    script3093(0, 4035 as dbrow, "Opening link", "Please Wait", 18963, "", "");
    OPENURL_SHIM(string0, string1, string2, int0);
    varclient_1795 = CLIENTCLOCK();
    if ((int1 == 1)) {
        IF_SETONTIMER(callback(script6032, 0), comp(906, 16));
    } else {
        IF_SETONTIMER(callback(script12373, 0), comp(906, 16));
    };
    return;
}