//
function script2827(int0: unknown_int, string0: string): void {
    if ((strcmp(string0, "") == 0)) {
        return;
    };
    script3093(0, 4035 as dbrow, "Opening link", "Please Wait", 18963, "", "");
    OPENURLRAW(string0, 0);
    varclient_1795 = CLIENTCLOCK();
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script6032, 0), comp(906, 16));
    } else {
        IF_SETONTIMER(callback(script12373, 0), comp(906, 16));
    };
    return;
}