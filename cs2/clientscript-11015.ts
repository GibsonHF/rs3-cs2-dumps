//
function script11015(int0: component, int1: int, int2: unknown_int, int3: int, int4: int, int5: dbrow): void {
    var int6 = 22;
    if ((script6431() == true)) {
        int6 = 44;
    };
    CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
    CC_SETFILL(1);
    script11024(int1);
    CC_SETONMOUSEOVER(callback(script7427, -2147483645, -2147483643));
    CC_SETONMOUSELEAVE(callback(script7429, -2147483645, -2147483643, int1));
    CC_SETSIZE(int4, int6, 0, 0);
    CC_SETPOSITION(int2, int3, 0, 0);
    return;
}