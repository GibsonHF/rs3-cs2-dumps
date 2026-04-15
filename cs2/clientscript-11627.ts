//
function script11627(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, string0: string, string1: string, string2: string): void {
    if ((int0 != comp(-1, 65535))) {
        CC_CREATE(int0, 4, int2);
        if ((strcmp("", string2) != 0)) {
            CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
        };
        if ((int1 == 4)) {
            CC_SETSIZE(int5, int6, 0, 0);
            CC_SETPOSITION(int3, int4, 0, 0);
            CC_SETOP(1, string1);
            script10407();
        } else if ((int1 == 1)) {
            CC_SETSIZE(int5, int6, 0, 0);
            CC_SETPOSITION(int3, int4, 0, 0);
            CC_SETOP(1, string0);
            script10407();
        } else {
            CC_SETHIDE(true);
        };
    };
    return;
}