//
function script12004(int0: component, int1: struct, int2: struct, int3: int, int4: cs2enum, string0: string): void {
    if ((CC_FIND(int0, int3) == 1)) {
        if ((script6431() == false)) {
            CC_SETDRAGDEADZONE(5);
            CC_SETDRAGDEADTIME(5);
        } else {
            CC_SETDRAGDEADZONE(20);
            CC_SETDRAGDEADTIME(5);
        };
        CC_SETCLICKMASK(0);
        if ((int0 == comp(1890, 38))) {
            CC_SETOP(1, "Toggle");
            CC_SETONOP(callback(script8499, -2147483645, -2147483643));
            CC_SETONMOUSEREPEAT(callback(script8448, int1, -2147483645, -2147483643));
            cc_setparam(7540, 1);
            cc_setparam(7544, int1);
            CC_SETONMOUSELEAVE(callback(script8805));
        } else {
            CC_SETOP(1, string0);
            CC_SETONDRAGCOMPLETE(callback(script7001, -2147483645, -2147483643, -2147483642));
            cc_setparam(7540, 1);
            cc_setparam(7544, int1);
            CC_SETONMOUSEREPEAT(callback(script8448, int1, -2147483645, -2147483643));
            CC_SETONSTATTRANSMIT(callback(script52, int1, -2147483645, -2147483643, 5, 1));
            CC_SETONMOUSELEAVE(callback(script8805));
            CC_SETONVARTRANSMIT(callback(script49, int0, struct_getparam(int2, 8128), int3, int1, 3272, 3273, 3275, 5859, 4));
            if ((IF_FIND(95551529) == 1)) {
                CC_SETHIDE(false);
                CC_SETONVARTRANSMIT(callback(script7820, int0, int4, 6773, 6773, 6773, 5840, 2393, 1096, 11087, 7));
                CC_SETONSTATTRANSMIT(callback(script7820, int0, int4, 5, 1));
            };
        };
    };
    return;
}