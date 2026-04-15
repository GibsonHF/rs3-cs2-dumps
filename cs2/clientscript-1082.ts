//
function script1082(int0: int, int1: component, int2: int, int3: int): void {
    var int4 = (int0 + 1);
    if ((IF_GETHIDE(enum_getvalue(0, 9, script8602(int3), int4)) == false)) {
        if ((CC_FIND(int1, int2) == 1)) {
            CC_SETHIDE(false);
            CC_SETCOLOUR(9869175);
        };
        if ((script8617(int3) >= 0)) {
            int4 = (int4 + 1);
            while ((IF_GETHIDE(enum_getvalue(0, 9, script8602(int3), int4)) == false)) {
                int4 = (int4 + 1);
            };
            if ((CC_FIND(enum_getvalue(0, 9, script8603(int3), (int4 - 1)), script8617(int3)) == 1)) {
                CC_SETHIDE(true);
            };
            script8618(int3, -1);
        };
        return;
    };
    if ((script8617(int3) == int2)) {
        return;
    };
    if (((script8617(int3) >= 0) && (CC_FIND(int1, script8617(int3)) == 1))) {
        CC_SETHIDE(true);
    };
    if ((CC_FIND(int1, int2) == 1)) {
        if ((CC_GETHIDE() == true)) {
            CC_SETHIDE(false);
            CC_SETCOLOUR(5733957);
        };
        script8618(int3, int2);
    };
    return;
}