//
function script1549(int0: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    var int1 = script15513();
    if (((int1 == -1) || (struct_getparam(int1, 7171) == true))) {
        IF_SETONTIMER(callback(script1654, -1), 82116724);
        IF_SETONTIMER(callback(), 82116719);
    } else {
        IF_SETONTIMER(callback(script1549, (CLIENTCLOCK() + 800)), 82116719);
    };
    return;
}