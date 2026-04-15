//
function script12112(int0: obj, int1: int, int2: inv, int3: int): void {
    if ((int0 != -1 as obj)) {
        if (((script6431() == true) && ((CC_GETLAYER() == comp(1464, 15)) || (CC_GETLAYER() == comp(1462, 31))))) {
            CC_SETSIZE(44, 39, 0, 0);
        } else {
            CC_SETSIZE(36, 32, 0, 0);
        };
        CC_SETGRAPHIC(-1 as graphic);
        CC_SETOBJECT(int0, int1);
        CC_SETONMOUSEREPEAT(callback(script12093, int0, int2, int3));
        cc_setparam(7540, 0);
        cc_setparam(7541, int0);
        cc_setparam(7542, int3);
        cc_setparam(7543, int2);
        CC_SETONMOUSELEAVE(callback(script5495, -1));
        script14420(int0);
        CC_CLEAROPS();
        CC_SETOUTLINE(1);
        CC_SETNOCLICKTHROUGH(1);
        CC_SETDRAGRENDERBEHAVIOUR(2);
        if ((script13749() == 0)) {
            CC_SETDRAGDEADZONE(5);
            CC_SETDRAGDEADTIME(5);
        } else {
            CC_SETDRAGDEADZONE(20);
            CC_SETDRAGDEADTIME(5);
        };
        CC_SETONDRAG(callback(script9226, 94, -2147483645, -2147483643));
        CC_SETONDRAGCOMPLETE(callback(script9223, -2147483645, -2147483643, -2147483642, -2147483641));
        CC_SETONOP(callback(script1620, -2147483645, -2147483643, 100, 0, 8));
    } else {
        if (((script6431() == true) && ((CC_GETLAYER() == comp(1464, 15)) || (CC_GETLAYER() == comp(1462, 31))))) {
            CC_SETSIZE((44 - 3), (39 - 2), 0, 0);
        } else {
            CC_SETSIZE((36 - 4), (32 - 2), 0, 0);
        };
        CC_SETOBJECT(-1 as obj, 0);
        CC_SETGRAPHIC(script8478(int2, CC_GETID(), 0));
        CC_SETONMOUSEREPEAT(callback());
        cc_setparam(7540, -1);
        cc_setparam(7541, -1);
        cc_setparam(7542, -1);
        cc_setparam(7543, -1);
        CC_SETONMOUSELEAVE(callback());
        CC_SETONOP(callback());
        CC_SETONDRAGCOMPLETE(callback());
        CC_CLEAROPS();
        CC_SETOPBASE("");
        CC_SETDRAGRENDERBEHAVIOUR(2);
        if ((script13749() == 0)) {
            CC_SETDRAGDEADZONE(5);
            CC_SETDRAGDEADTIME(5);
        } else {
            CC_SETDRAGDEADZONE(20);
            CC_SETDRAGDEADTIME(5);
        };
        CC_SETONDRAG(callback(script9226, 94, -2147483645, -2147483643));
        CC_SETONDRAGCOMPLETE(callback(script9223, -2147483645, -2147483643, -2147483642, -2147483641));
    };
    return;
}