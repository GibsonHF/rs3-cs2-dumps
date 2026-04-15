//
function script12755(int0: component, int1: component, int2: int): void {
    var int3 = 0;
    if ((CLIENTCLOCK() < int2)) {
        int3 = MIN(255, (IF_GETTRANS(int0) + 1));
        IF_SETTRANS(int3, int0);
        IF_SETTRANS(int3, int1);
        if ((int3 == 255)) {
            IF_SETONTIMER(callback(), int0);
        } else {
            IF_SETONTIMER(callback(script12755, int0, int1, int2), int0);
        };
    };
    return;
}