//
function script10819(int0: component, int1: struct): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(8106, int1);
        cc_setparam(8108, script11296(int1));
        CC_SETONTIMER(callback(script10823, int0));
    };
    return;
}