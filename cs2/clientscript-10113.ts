//
function script10113(int0: int, int1: int, int2: int): void {
    var int3 = 0;
    var int4 = comp(232, 8);
    if (((varclient_4294 != -1) && (CC_FIND(int4, varclient_4294) == 1))) {
        int3 = (CC_GETY() / 47);
        if ((MODULO(int3, 2) == 0)) {
            CC_SETCOLOUR(464928);
        } else {
            CC_SETCOLOUR(1846324);
        };
    };
    if (((varclient_4295 != -1) && (CC_FIND(int4, varclient_4295) == 1))) {
        int3 = (CC_GETY() / 47);
        if ((MODULO(int3, 2) == 0)) {
            CC_SETCOLOUR(464928);
        } else {
            CC_SETCOLOUR(1846324);
        };
    };
    if (((varclient_4296 != -1) && (CC_FIND(int4, varclient_4296) == 1))) {
        int3 = (CC_GETY() / 47);
        if ((MODULO(int3, 2) == 0)) {
            CC_SETCOLOUR(464928);
        } else {
            CC_SETCOLOUR(1846324);
        };
    };
    if ((CC_FIND(int4, int0) == 1)) {
        CC_SETCOLOUR(13906);
        varclient_4294 = CC_GETID();
    };
    if ((CC_FIND(int4, int1) == 1)) {
        CC_SETCOLOUR(13906);
        varclient_4295 = CC_GETID();
    };
    if ((CC_FIND(int4, int2) == 1)) {
        CC_SETCOLOUR(13906);
        varclient_4296 = CC_GETID();
    };
    return;
}