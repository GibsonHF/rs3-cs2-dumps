//
function script11244(int0: component, int1: int): void {
    if ((STAFFMODLEVEL() == 0)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETTEXT(enum_getvalue(0, 36, 9936 as cs2enum, int1), comp(1610, 8));
    };
    return;
}