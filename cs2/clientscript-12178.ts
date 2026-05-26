//
function script12178(int0: number, int1: number, int2: number): void {
    script12158(int0, int1, int2);
    var int3 = -1 as dbrow;
    var int4 = 0;
    while ((int4 < ENUM_GETOUTPUTCOUNT(10742))) {
        if ((CC_FIND(int1, int4) == 1)) {
            int3 = enum_getvalue(0, 74, 10742 as cs2enum, int4);
            if ((CC_GETHIDE() == 0)) {
                if ((script14706(int0, int3) == 1)) {
                    CC_SETONDRAGCOMPLETE(callback(script12181, int0, -2147483645, -2147483643, -2147483642, -2147483641));
                    CC_SETDRAGDEADZONE(5);
                    CC_SETOP(1, "Add to gizmo");
                    CC_SETONOP(callback(script12183, int0, -2147483645, -2147483643));
                } else {
                    CC_SETHIDE(1);
                };
            };
        };
        int4 = (int4 + 1);
    };
    return;
}