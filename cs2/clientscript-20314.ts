//
function script20314(int0: number): void {
    CC_DELETEALL(89194513);
    if ((IF_GETTRANS(89194510) <= 0)) {
        IF_SETONTIMER(callback(script20315, int0, (CLIENTCLOCK() - 50)), 89194509);
    } else {
        IF_SETONTIMER(callback(script20315, int0, CLIENTCLOCK()), 89194509);
    };
    return;
}