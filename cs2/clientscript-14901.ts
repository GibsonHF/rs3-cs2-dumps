//
function script14901(int0: int): void {
    CC_DELETEALL(comp(693, 41));
    CC_DELETEALL(comp(693, 43));
    script14875(comp(693, 41), comp(693, 43), int0, 0, 0, IF_GETWIDTH(comp(693, 41)), IF_GETHEIGHT(comp(693, 41)), 0);
    var int1 = script14662();
    var int2 = -1 as dbrow;
    var int3 = -1;
    while ((++int3 < 5)) {
        if ((CC_FIND(comp(693, 43), int3) == 1)) {
            int2 = script14655(int0, (int3 + 1));
            if ((int2 != -1 as dbrow)) {
                CC_SETOPBASE(dbrow_getfield(int2, 372768, 0));
                CC_SETOPCURSOR(1, 172);
                CC_SETOP(1, "Info");
                CC_SETOP(2, "Unassign");
                CC_SETONOP(callback(script14888, -2147483644, int0, (int3 + 1)));
            } else if ((int3 < int1)) {
                CC_SETOPCURSOR(1, 46);
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script14888, -2147483644, int0, (int3 + 1)));
            } else {
                CC_CLEAROPS();
                CC_CLEARSCRIPTHOOKS();
            };
        };
    };
    return;
}