//
function script5637(int0: number, int1: number): void {
    IF_SETONTIMER(callback(script5800, (CLIENTCLOCK() + 216), CLIENTCLOCK()), comp(219, 1));
    IF_SETHIDE(false, comp(219, 1));
    IF_SETONVARCTRANSMIT(callback(), comp(219, 36));
    IF_SETONVARCTRANSMIT(callback(), comp(219, 56));
    var int2 = script13494(int0);
    if ((int2 == -1)) {
        script13463("Sorry, we were unable to process your request. Please try again later.");
        return;
    };
    script14486(int2, int1);
    return;
}