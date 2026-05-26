//
function script8010(int0: number, int1: number, int2: number): void {
    if ((int2 == -1)) {
        var int2 = int1;
    };
    if ((IF_FIND(int1) == 1)) {
        CC_SETTRANS(0);
        IF_SETONTIMER(callback(script8012, (CLIENTCLOCK() + int0), int1, int2), int2);
    };
    return;
}