//
function script13580(int0: component, int1: int, int2: int, int3: int): void {
    if ((IF_FIND(int0) == 1)) {
        if ((int1 != -1)) {
            cc_setparam(6408, script12377(int1, 1, 65536));
        };
        if ((int2 != -1)) {
            cc_setparam(6409, script12377(int2, 1, 65536));
        };
        cc_setparam(6754, script12377(int3, 0, 1));
    };
    return;
}