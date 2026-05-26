//[clientscript,imp_bank_setup]
function script701(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = script13749();
    while ((int0 < 28)) {
        CC_CREATE(31326209, 5, int0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((40 * int1), (40 * int2), 0, 0);
        if ((INV_GETOBJ(93, int0) != -1)) {
            CC_SETOBJECT(INV_GETOBJ(93, int0), INV_GETNUM(93, int0));
            CC_SETOPBASE(OC_NAME(INV_GETOBJ(93, int0)));
            CC_SETOP(1, "Deposit");
            CC_SETOP(2, "Examine");
            CC_SETONDRAGCOMPLETE(callback(script703, -2147483645, -2147483643, -2147483642, -2147483641));
            if ((int3 == 0)) {
                CC_SETDRAGDEADZONE(5);
                CC_SETDRAGDEADTIME(10);
            } else {
                CC_SETDRAGDEADZONE(20);
                CC_SETDRAGDEADTIME(5);
            };
        };
        int0 = (int0 + 1);
        if ((++int1 == 8)) {
            int1 = 0;
            int2 = (int2 + 1);
        };
    };
    return;
}