//
function script1549(int0: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    var int1 = script15513();
    if (((int1 == -1) || (struct_getparam(int1, 7171) == true))) {
        IF_SETONTIMER(callback(script1654, -1), comp(1253, 116));
        IF_SETONTIMER(callback(), comp(1253, 111));
    } else {
        IF_SETONTIMER(callback(script1549, (CLIENTCLOCK() + 800)), comp(1253, 111));
    };
    return;
}