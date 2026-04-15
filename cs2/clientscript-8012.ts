//
function script8012(int0: int, int1: component, int2: component): void {
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND(int1) == 1)) {
        int3 = (int0 - CLIENTCLOCK());
        if ((int3 <= 0)) {
            CC_SETTRANS(255);
            IF_SETONTIMER(callback(), int2);
            return;
        };
        int4 = (255 - CC_GETTRANS());
        CC_SETTRANS(MIN((CC_GETTRANS() + (int4 / int3)), 254));
    };
    return;
}