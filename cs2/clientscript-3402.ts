//
function script3402(int0: component, int1: int, int2: unknown_int, int3: int): void {
    var int4 = (int3 - CLIENTCLOCK());
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int4 <= 0)) {
            CC_SETTRANS(0);
            CC_SETONTIMER(callback());
            return;
        };
        CC_SETTRANS(MAX((CC_GETTRANS() - (CC_GETTRANS() / int4)), 1));
    };
    return;
}