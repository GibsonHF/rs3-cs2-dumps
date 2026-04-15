//
function script9241(int0: component, int1: component, int2: unknown_int): void {
    var int3 = script13749();
    if (((int0 == comp(998, 9)) || (int0 == comp(998, 25)))) {
        CC_SETDRAGRENDERBEHAVIOUR(2);
        CC_SETONDRAG(callback(script16699, int0));
        CC_SETONDRAGCOMPLETE(callback(script16700));
    } else if ((int2 != 0)) {
        CC_SETDRAGRENDERBEHAVIOUR(2);
        if ((int1 != comp(-1, 65535))) {
            CC_SETONDRAG(callback(script9242, -2147483645, -2147483643, int1));
        };
        if ((int2 == 1)) {
            CC_SETONDRAGCOMPLETE(callback(script9244, -2147483645, -2147483643, -2147483642, -2147483641));
        } else {
            CC_SETONDRAGCOMPLETE(callback(script9246, -2147483645, -2147483643, -2147483642, -2147483641));
        };
    } else {
        CC_SETDRAGRENDERBEHAVIOUR(0);
        CC_SETONDRAG(callback());
        CC_SETONDRAGCOMPLETE(callback());
    };
    if ((int3 == false)) {
        CC_SETDRAGDEADZONE(5);
        CC_SETDRAGDEADTIME(5);
    } else {
        CC_SETDRAGDEADZONE(20);
        CC_SETDRAGDEADTIME(5);
    };
    return;
}