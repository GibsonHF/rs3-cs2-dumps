//
function script6299(int0: component, int1: int, int2: unknown_int, int3: int): void {
    var int4 = 0;
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        int4 = (CLIENTCLOCK() - int3);
        if ((int4 >= 16)) {
            CC_SETTRANS(255);
            CC_SETFILL(0);
            CC_SETONTIMER(callback());
        } else {
            CC_SETTRANS(MIN(255, (35 * ABS((8 - int4)))));
        };
    };
    return;
}