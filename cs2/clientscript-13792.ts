//
function script13792(): void {
    var int0 = 12;
    var int1 = 5;
    var int2 = 3;
    var int3 = 0;
    var int4 = -1;
    while ((++int4 < int0)) {
        CC_CREATE(comp(1918, 3), 5, int3);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(int1, int2, 0, 0);
        if ((INV_GETOBJ(841 as inv, int3) != -1 as obj)) {
            CC_SETOBJECT(INV_GETOBJ(841 as inv, int3), INV_GETNUM(841 as inv, int3));
            CC_SETOPBASE(OC_NAME(INV_GETOBJ(841 as inv, int3)));
            CC_SETOP(1, "Withdraw");
            CC_SETOUTLINE(1);
        };
        if ((++int1 > 180)) {
            int1 = 5;
            int2 = (int2 + 45);
        };
        int3 = (int3 + 1);
    };
    return;
}