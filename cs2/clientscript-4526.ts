//
function script4526(int0: component, int1: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    var int2 = struct_getparam(int1, 3797);
    if ((int2 == 2)) {
        IF_SETONMOUSEOVER(callback(script4159, -2147483645, 0, 0), int0);
        IF_SETONMOUSELEAVE(callback(script4159, -2147483645, 255, 0), int0);
    } else if ((int2 == 3)) {
        IF_SETONCLICK(callback(script4162, -2147483645), int0);
        stack(4163);
        stack(-2147483645);
        stack("i");
        stack(int0);
        IF_SETONRELEASE();
        IF_SETONMOUSELEAVE(callback(script4163, -2147483645), int0);
    };
    script4527(int0, int1);
    if ((int2 == 4)) {
        script4161(int0, 0);
        IF_SETHIDE(true, int0);
    };
    return;
}