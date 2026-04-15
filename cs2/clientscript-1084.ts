//
function script1084(int0: int, int1: component, int2: int, int3: int): void {
    if ((IF_GETHIDE(enum_getvalue(0, 9, script8602(int3), (int0 + 1))) == true)) {
        return;
    };
    if ((CC_FIND(int1, int2) == 1)) {
        CC_SETHIDE(true);
    };
    return;
}