//
function script12843(int0: number): void {
    if ((int0 == 1)) {
        IF_SETCOLOUR(script10495(3), 93192300);
    } else {
        IF_SETCOLOUR(script10495(6), 93192300);
    };
    IF_SETONTIMER(callback(script306, CLIENTCLOCK(), -2147483645), 93192300);
    return;
}