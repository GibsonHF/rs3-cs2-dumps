//
function script16555(int0: component, int1: int): void {
    var int2 = enum_getvalue(0, 26, 5134 as cs2enum, int1);
    if ((int2 == -1 as cs2enum)) {
        return;
    };
    CC_DELETEALL(int0);
    script16557(int0, int2, 0);
    return;
}