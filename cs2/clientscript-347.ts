//
function script347(int0: component, int1: int, int2: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int2 == -1)) {
            CC_SETONTIMER(callback(script1518, -2147483645, -2147483643, 0));
            CC_SETONCLICK(callback(script347, -2147483645, -2147483643, -2147483647));
        } else {
            var int2 = (int2 - (CC_GETWIDTH() / 2));
            if ((int2 >= 0)) {
                CC_SETONTIMER(callback(script1518, -2147483645, -2147483643, 1));
            } else {
                CC_SETONTIMER(callback(script1518, -2147483645, -2147483643, -1));
            };
            CC_SETONCLICK(callback(script347, -2147483645, -2147483643, -1));
        };
    };
    return;
}