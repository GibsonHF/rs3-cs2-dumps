//
function script10820(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(8106, -1);
        cc_setparam(8108, 0);
        cc_setparam(8103, -1);
        cc_setparam(8105, -1);
        cc_setparam(8107, 0);
        CC_SETONTIMER(callback());
        CC_DELETEALL(int0);
    };
    return;
}