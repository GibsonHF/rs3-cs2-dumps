//
function script668(int0: int, int1: component, int2: int): void {
    var int3 = 0;
    var int4 = 0;
    if ((CC_FIND(int1, int2) == 1)) {
        int3 = (int0 - CLIENTCLOCK());
        if ((int3 <= 0)) {
            CC_SETONTIMER(callback());
            CC_DELETE();
            return;
        };
        int4 = (255 - CC_GETTRANS());
        CC_SETTRANS(MIN((CC_GETTRANS() + (int4 / int3)), 254));
    };
    return;
}