//
function script5637(int0: unknown_int, int1: unknown_int): void {
    IF_SETONTIMER(callback(script5800, (CLIENTCLOCK() + 216), CLIENTCLOCK()), comp(219, 1));
    IF_SETHIDE(0, 14352385);
    IF_SETONVARCTRANSMIT(callback(), 14352420);
    IF_SETONVARCTRANSMIT(callback(), 14352440);
    var int2 = script13494(int0);
    if ((int2 == -1)) {
        script13463("Sorry, we were unable to process your request. Please try again later.");
        return;
    };
    script14486(int2, int1);
    return;
}