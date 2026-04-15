//[clientscript,fadein]
function script4141(int0: int, int1: component): void {
    var int2 = 0;
    var int3 = 0;
    if ((CC_FIND(int1, 0) == 1)) {
        int2 = (int0 - CLIENTCLOCK());
        if ((int2 <= 0)) {
            CC_SETONTIMER(callback());
            CC_DELETE();
            return;
        };
        int3 = (255 - CC_GETTRANS());
        CC_SETTRANS(MIN((CC_GETTRANS() + (int3 / int2)), 254));
    };
    return;
}