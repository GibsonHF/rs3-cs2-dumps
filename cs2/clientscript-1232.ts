//[clientscript,trawler_reward_setup]
function script1232(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = ((IF_GETWIDTH(int0) - (36 * 8)) / 7);
    var int2 = ((IF_GETHEIGHT(int0) - (32 * 5)) / 4);
    var int3 = 0;
    var int4 = INV_SIZE(0 as inv);
    var int5 = -1 as obj;
    var int6 = script13749();
    while ((int3 < int4)) {
        CC_CREATE(int0, 5, int3);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(((36 + int1) * MODULO(int3, 8)), ((int3 / 8) * (32 + int2)), 0, 0);
        int5 = INV_GETOBJ(0 as inv, int3);
        if ((INV_GETOBJ(0 as inv, int3) != -1 as obj)) {
            CC_SETOBJECT(int5, INV_GETNUM(0 as inv, int3));
            CC_SETOPBASE(`<col=FF981F>${OC_NAME(INV_GETOBJ(0 as inv, int3))}`);
            CC_SETOP(1, "Bank All");
            CC_SETOP(2, "Withdraw 1");
            CC_SETOP(3, "Withdraw All");
            CC_SETOP(10, "Examine");
            if ((int6 == false)) {
                CC_SETDRAGDEADZONE(5);
                CC_SETDRAGDEADTIME(10);
            } else {
                CC_SETDRAGDEADZONE(20);
                CC_SETDRAGDEADTIME(5);
            };
            CC_SETOUTLINE(1);
            CC_SETONMOUSEREPEAT(callback(script9564, int5, -2147483645, -2147483643));
        } else {
            CC_SETOBJECT_NONUM(-1 as obj, 0);
        };
        int3 = (int3 + 1);
    };
    return;
}