//[clientscript,magictraining_shop]
function script26(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 25;
    var int3 = 20;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    int4 = ((IF_GETWIDTH(comp(197, 11)) - int2) / (int2 + 36));
    while ((int0 <= INV_SIZE(347 as inv))) {
        CC_CREATE(comp(197, 11), 5, int0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((int2 + ((36 + int2) * (int0 - (int1 * int4)))), (int3 + (int1 * (32 + int3))), 0, 0);
        int5 = (int2 + ((36 + int2) * (int0 - (int1 * int4))));
        int6 = (int3 + (int1 * (32 + int3)));
        if ((INV_GETOBJ(347 as inv, int0) != -1 as obj)) {
            CC_SETOBJECT(INV_GETOBJ(347 as inv, int0), INV_GETNUM(347 as inv, int0));
            CC_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(347 as inv, int0))}`);
            CC_SETOUTLINE(1);
            CC_SETOP(1, "Value");
            CC_SETOP(2, "Buy");
            CC_SETOP(10, "Examine");
        };
        if ((MODULO(++int0, int4) == 0)) {
            int1 = (int1 + 1);
        };
    };
    return;
}