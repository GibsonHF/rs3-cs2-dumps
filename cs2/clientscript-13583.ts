//
function script13583(int0: component, int1: int, int2: int, int3: component): void {
    var int4 = (int2 - CLIENTCLOCK());
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int4 <= 0)) {
            CC_SETTRANS(0);
            CC_SETONTIMER(callback());
            if ((int3 != -1)) {
                IF_SETHIDE(false, int3);
            };
            return;
        };
        CC_SETTRANS(MAX((CC_GETTRANS() - (CC_GETTRANS() / int4)), 1));
    };
    return;
}