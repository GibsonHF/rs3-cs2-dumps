//
function script6113(int0: component, int1: int): void {
    var int2 = IF_GETTRANS(int0);
    int2 = (int2 - int1);
    if ((int2 < 0)) {
        int2 = 0;
        IF_SETONTIMER(callback(), int0);
    };
    IF_SETTRANS(int2, int0);
    return;
}