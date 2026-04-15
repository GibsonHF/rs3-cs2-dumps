//
function script8010(int0: int, int1: component, int2: component): void {
    if ((int2 == comp(-1, 65535))) {
        var int2 = int1;
    };
    if ((IF_FIND(int1) == 1)) {
        CC_SETTRANS(0);
        IF_SETONTIMER(callback(script8012, (CLIENTCLOCK() + int0), int1, int2), int2);
    };
    return;
}