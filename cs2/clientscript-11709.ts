//
function script11709(int0: int, int1: component): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script11709, int0, int1), int1);
        return;
    };
    if ((IF_FIND(comp(1082, 39)) == 1)) {
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        script12642(-4000, 0);
        cc_setparam(5828, 0);
        cc_setparam(2977, 0);
    };
    IF_SETONTIMER(callback(script11709, 1500, 70909989), comp(1082, 37));
    IF_SETONTIMER(callback(script11710, 450, 70909990), 70909990);
    return;
}