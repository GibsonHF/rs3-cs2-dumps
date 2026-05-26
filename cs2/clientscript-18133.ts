//
function script18133(int0: number, int1: number): [number, string] {
    var int2 = script16500(int1);
    if ((int2 == 1)) {
        return [0, "You've already extended this challenge."];
    };
    if (((struct_getparam(int0, 4551) == 0) || (struct_getparam(int0, 8682) == 2))) {
        return [0, "This challenge cannot be extended."];
    };
    if ((MAP_MEMBERS() == 0)) {
        return [0, "This feature can only be used on a members' world."];
    };
    var int3 = -1;
    var int4 = 1;
    var int5 = 0;
    while ((int4 <= script16317())) {
        int3 = script16319(int4);
        if ((((int3 != -1) && (script16442(int4) >= struct_getparam(int3, 2235))) && (script18262(int4) == 1))) {
            if ((script16500(int4) == 1)) {
                int5 = (int5 + 2);
            } else {
                int5 = (int5 + 1);
            };
        };
        int4 = (int4 + 1);
    };
    if (((script12869(47781) + (int5 * 100)) < 2100)) {
        return [1, "Spend vis wax to double this challenge's XP, weekly progress and objective target."];
    };
    return [1, "Spend vis wax to double this challenge's XP and objective target."];
}