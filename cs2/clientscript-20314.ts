//
function script20314(int0: dbrow): void {
    CC_DELETEALL(comp(1361, 17));
    if ((IF_GETTRANS(comp(1361, 14)) <= 0)) {
        IF_SETONTIMER(callback(script20315, int0, (CLIENTCLOCK() - 50)), comp(1361, 13));
    } else {
        IF_SETONTIMER(callback(script20315, int0, CLIENTCLOCK()), comp(1361, 13));
    };
    return;
}