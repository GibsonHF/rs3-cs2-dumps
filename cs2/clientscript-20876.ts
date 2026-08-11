//
function script20876(int0: number): void {
    if ((int0 > 0)) {
        IF_SETONTIMER(callback(script20877, CLIENTCLOCK(), (CLIENTCLOCK() + int0)), comp(105, 141));  // stockmarket:abort5 ?
        script20878(CLIENTCLOCK(), (CLIENTCLOCK() + int0));
    } else {
        IF_SETONTIMER(callback(script20877, 0, 0), comp(105, 141));  // stockmarket:abort5 ?
        script20878(0, 0);
    };
    return;
}