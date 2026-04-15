//
function script9239(int0: component, int1: component, int2: inv, int3: int, int4: int, int5: unknown_int, string0: string): void {
    var int6 = 0;
    var int7 = comp(-1, 65535);
    var int8 = false;
    var int9 = -1 as obj;
    var int10 = 0;
    if ((IF_FIND(int1) == 1)) {
        int7 = cc_getparam(3819);
        int8 = cc_getparam(3820);
    };
    var int11 = 0;
    var int12 = script13749();
    var string1 = "";
    while ((int6 <= int4)) {
        if ((CC_FIND(int1, int6) == 1)) {
            if ((int6 >= int3)) {
                if ((int8 == false)) {
                    int9 = INV_GETOBJ(int2, int6);
                    int10 = INV_GETNUM(int2, int6);
                } else {
                    int9 = INVOTHER_GETOBJ(int2, int6);
                    int10 = INVOTHER_GETNUM(int2, int6);
                };
                if ((int9 != -1 as obj)) {
                    if ((OC_STACKABLE(int9) == 1)) {
                        int11 = int10;
                    } else {
                        int11 = INV_TOTAL(int2, int9);
                    };
                } else {
                    int11 = 0;
                };
                switch (int1) {
                    case 33882127:
                    case 33882147: {
                        script12092(int1, int7, int2, int6, int9, int10, int5, script14419(int2, int9, int11, string0));
                        break;
                    }
                    case 86048782: {
                        script12092(int1, int7, int2, int6, int9, int10, int5, script14419(int2, int9, int11, string0));
                        break;
                    }
                    case 65404953:
                    case 65404937: {
                        if ((int11 > 10)) {
                            script12092(int1, int7, int2, int6, int9, int10, int5, `${string0}-All`, `${string0}-1`, `${string0}-5`, `${string0}-10`, `${string0}-50`, `${string0}-X`, "", "", "", "Examine");
                        } else if ((int11 > 5)) {
                            script12092(int1, int7, int2, int6, int9, int10, int5, `${string0}-All`, `${string0}-1`, `${string0}-5`, `${string0}-10`, "", `${string0}-X`, "", "", "", "Examine");
                        } else if ((int11 > 1)) {
                            script12092(int1, int7, int2, int6, int9, int10, int5, `${string0}-All`, `${string0}-1`, `${string0}-5`, "", "", `${string0}-X`, "", "", "", "Examine");
                        } else {
                            script12092(int1, int7, int2, int6, int9, int10, int5, string0, "", "", "", "", "", "", "", "", "Examine");
                        };
                        break;
                    }
                    case 43384837: {
                        if ((int11 > 5)) {
                            script12092(int1, int7, int2, int6, int9, int10, int5, `${string0}-1`, `${string0}-5`, `${string0}-10`, `${string0}-All`, `${string0}-X`, "", "", "", "", "Examine");
                        } else if ((int11 > 1)) {
                            script12092(int1, int7, int2, int6, int9, int10, int5, `${string0}-1`, `${string0}-5`, "", `${string0}-All`, `${string0}-X`, "", "", "", "", "Examine");
                        } else {
                            script12092(int1, int7, int2, int6, int9, int10, int5, string0, "", "", "", "", "", "", "", "", "Examine");
                        };
                        break;
                    }
                    case 43253786:
                    case 43253779: {
                        if (((int1 == comp(660, 26)) && (int6 >= script14683()))) {
                            if ((CC_FIND[1](int0, int6) == 1)) {
                                script14710(int1, int7, int6, CC_GETX[1](), CC_GETY[1](), 26605 as graphic, "Info", "Requires a higher material storage capacity unlock from the Archaeology Guild.");
                            };
                        } else if ((int11 > 5)) {
                            script12092(int1, int7, int2, int6, int9, int10, int5, `${string0}-1`, `${string0}-5`, `${string0}-10`, `${string0}-All`, `${string0}-X`, "", "", "", "", "Examine");
                        } else if ((int11 > 1)) {
                            script12092(int1, int7, int2, int6, int9, int10, int5, `${string0}-1`, `${string0}-5`, "", `${string0}-All`, `${string0}-X`, "", "", "", "", "Examine");
                        } else {
                            script12092(int1, int7, int2, int6, int9, int10, int5, string0, "", "", "", "", "", "", "", "", "Examine");
                        };
                        break;
                    }
                    default: {
                        if ((int11 > 5)) {
                            script12092(int1, int7, int2, int6, int9, int10, int5, `${string0}-1`, `${string0}-5`, `${string0}-10`, `${string0}-${inttostring(varplayer_111, 10)}`, `${string0}-X`, `${string0}-All`, "", "", "", "Examine");
                        } else if ((int11 > 1)) {
                            script12092(int1, int7, int2, int6, int9, int10, int5, `${string0}-1`, `${string0}-5`, "", `${string0}-${inttostring(varplayer_111, 10)}`, `${string0}-X`, `${string0}-All`, "", "", "", "Examine");
                        } else {
                            script12092(int1, int7, int2, int6, int9, int10, int5, string0, "", "", "", "", "", "", "", "", "Examine");
                        };
                        break;
                    }
                };
            } else {
                CC_CLEAROPS();
                CC_SETOPBASE("");
                CC_SETONDRAGCOMPLETE(callback());
                if ((int12 == 0)) {
                    CC_SETDRAGDEADZONE(5);
                    CC_SETDRAGDEADTIME(5);
                } else {
                    CC_SETDRAGDEADZONE(20);
                    CC_SETDRAGDEADTIME(5);
                };
                CC_SETOBJECT_NONUM(-1 as obj, 0);
                CC_SETSIZE(0, 0, 0, 0);
            };
        };
        int6 = (int6 + 1);
    };
    return;
}