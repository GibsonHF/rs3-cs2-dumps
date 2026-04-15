//
function script12092(int0: component, int1: component, int2: inv, int3: int, int4: obj, int5: int, int6: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string): void {
    if ((int4 != -1 as obj)) {
        CC_SETOBJECT(int4, int5);
        CC_SETOUTLINE(1);
        script9241(int0, int1, int6);
        script14420(int4);
        CC_SETOP(1, string0);
        CC_SETOP(2, string1);
        CC_SETOP(3, string2);
        CC_SETOP(4, string3);
        CC_SETOP(5, string4);
        CC_SETOP(6, string5);
        CC_SETOP(7, string6);
        CC_SETOP(8, string7);
        CC_SETOP(9, string8);
        CC_SETOP(10, string9);
        script15057(int0, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8, string9);
        cc_setparam(7540, 0);
        cc_setparam(7541, int4);
        cc_setparam(7542, int3);
        cc_setparam(7543, int2);
        script6246(int0, int4);
        if ((int3 >= 0)) {
            CC_SETONMOUSEREPEAT(callback(script12093, int4, int2, int3));
        } else {
            CC_SETONMOUSEREPEAT(callback(script5495, int4));
        };
        CC_SETONMOUSELEAVE(callback(script5495, -1));
        script5823(int0);
        if ((int0 == 86048782)) {
            if ((script19362(OC_UNCERT(int4)) == 1)) {
                CC_SETCOLOUR(2236962);
                CC_SETTRANS(153);
            } else {
                CC_SETCOLOUR(16777215);
                CC_SETTRANS(0);
            };
        };
    } else {
        CC_CLEAROPS();
        CC_SETOPBASE("");
        CC_SETONDRAGCOMPLETE(callback());
        CC_SETONMOUSEREPEAT(callback());
        CC_SETONMOUSELEAVE(callback());
        if ((script13749() == 0)) {
            CC_SETDRAGDEADZONE(5);
            CC_SETDRAGDEADTIME(5);
        } else {
            CC_SETDRAGDEADZONE(20);
            CC_SETDRAGDEADTIME(5);
        };
        CC_SETOBJECT_NONUM(-1 as obj, 0);
    };
    return;
}