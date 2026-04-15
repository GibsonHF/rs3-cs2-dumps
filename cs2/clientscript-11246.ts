//
function script11246(int0: unknown_int, int1: unknown_int): void {
    var string0 = "No custom phrase specified.";
    if ((int1 == 1)) {
        if ((strcmp(varclient_4761, "") != 0)) {
            string0 = varclient_4761;
        };
    } else if (((int1 == 2) && (strcmp(varclient_4762, "") != 0))) {
        string0 = varclient_4762;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int0);
    return;
}