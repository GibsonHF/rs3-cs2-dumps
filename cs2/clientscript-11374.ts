//
function script11374(int0: component, int1: int, int2: struct): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((script11309(struct_getparam(int2, 5030)) == 0)) {
            CC_SETCOLOUR(script10495(3));
            CC_SETONMOUSEOVER(callback(script1356, int0, int1, 16777215));
            CC_SETONMOUSELEAVE(callback(script1356, int0, int1, script10495(3)));
            CC_SETONOP(callback(script6959, int2, int0, int1));
            CC_SETOP(1, "Select");
            CC_SETOPBASE(struct_getparam(int2, 5029));
        } else {
            CC_SETCOLOUR(script693(152, 209, 152));
            CC_SETONMOUSEOVER(callback());
            CC_SETONMOUSELEAVE(callback());
            CC_CLEAROPS();
        };
    };
    return;
}