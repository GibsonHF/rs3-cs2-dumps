//[proc,interface_inv_draw_slot_big]
function script154(int0: inv, int1: int, int2: component, int3: int, int4: unknown_int, int5: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string): void {
    if ((CC_FIND(int2, int3) == 1)) {
        if ((INV_GETOBJ(int0, int1) != -1 as obj)) {
            if (((int0 == 90 as inv) && (INV_GETOBJ(int0, int1) == 995 as obj))) {
                CC_SETOBJECT_LONG(995 as obj, script17402(626 as inv, 90 as inv));
            } else {
                CC_SETOBJECT(INV_GETOBJ(int0, int1), INV_GETNUM(int0, int1));
            };
            script14420(INV_GETOBJ(int0, int1));
            CC_SETOP(1, string0);
            CC_SETOP(2, string1);
            CC_SETOP(3, string2);
            CC_SETOP(4, string3);
            CC_SETOP(5, string4);
            CC_SETOP(6, string5);
            CC_SETOP(7, string6);
            CC_SETOP(8, string7);
            CC_SETOP(9, string8);
            CC_SETOP(10, "Examine<col=ff9040>");
            if ((int4 > 0)) {
                if ((script13749() == false)) {
                    CC_SETDRAGDEADZONE(5);
                    CC_SETDRAGDEADTIME(10);
                } else {
                    CC_SETDRAGDEADZONE(20);
                    CC_SETDRAGDEADTIME(5);
                };
            };
            if ((int4 == 1)) {
                CC_SETONDRAGCOMPLETE(callback(script155, int0, -2147483643, -2147483641, -2147483645, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8));
            } else if ((int4 == 2)) {
                CC_SETONDRAGCOMPLETE(callback(script156, int0, -2147483643, -2147483641, -2147483645, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8));
            };
            if (((int4 != 0) && (int5 != -1))) {
                CC_SETONDRAG(callback(script162, int1, int2, int5, -2147483646));
            };
            CC_SETOUTLINE(1);
            CC_SETONMOUSEREPEAT(callback(script12093, INV_GETOBJ(int0, int1), int0, int1));
            CC_SETONMOUSELEAVE(callback(script5495, -1));
            if ((int5 == -1)) {
                CC_SETNOCLICKTHROUGH(true);
            };
        } else {
            CC_SETOBJECT_NONUM(-1 as obj, 0);
            CC_CLEAROPS();
            if ((int4 > 0)) {
                CC_SETDRAGDEADZONE(0);
                CC_SETDRAGDEADTIME(0);
            };
            CC_SETONDRAGCOMPLETE(callback());
        };
    };
    return;
}