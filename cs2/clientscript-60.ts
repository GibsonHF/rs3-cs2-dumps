//[clientscript,dream_bank_init]
function script60(): void {
    var int0 = 3;
    var int1 = 5;
    var int2 = 0;
    var int3 = -1 as obj;
    while ((int0 < 255)) {
        while ((int1 < 235)) {
            CC_CREATE(comp(260, 1), 5, int2);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION(int1, int0, 0, 0);
            int3 = INV_GETOBJ(514 as inv, int2);
            if ((int3 != -1 as obj)) {
                CC_SETOBJECT(int3, INV_GETNUM(514 as inv, int2));
                CC_SETOPBASE(OC_NAME(INV_GETOBJ(514 as inv, int2)));
                CC_SETOP(1, "Withdraw");
                CC_SETOUTLINE(1);
                CC_SETONMOUSEREPEAT(callback(script9564, int3, -2147483645, -2147483643));
            };
            int1 = (int1 + 40);
            int2 = (int2 + 1);
        };
        int0 = (int0 + 44);
        int1 = 5;
    };
    return;
}