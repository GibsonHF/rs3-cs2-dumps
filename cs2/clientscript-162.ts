//[clientscript,interface_inv_drag_slot]
function script162(int0: int, int1: component, int2: component, int3: int): void {
    if ((CC_FIND(int1, int0) == 1)) {
        var int3 = (int3 - IF_GETSCROLLY(int1));
        if ((int3 < 10)) {
            script157(int2, int1, (IF_GETSCROLLY(int1) - 4), 1);
        };
        if (((int3 + CC_GETHEIGHT()) > (IF_GETHEIGHT(int1) - 10))) {
            script157(int2, int1, (IF_GETSCROLLY(int1) + 4), 1);
        };
    };
    return;
}