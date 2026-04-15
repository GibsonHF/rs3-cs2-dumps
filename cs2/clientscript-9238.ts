//
function script9238(int0: component, int1: component, int2: inv, int3: int, int4: int, int5: unknown_int): void {
    var int6 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var string8 = "";
    var string9 = "";
    if ((int1 != comp(-1, 65535))) {
        string0 = IF_GETOP(1, int1);
        string1 = IF_GETOP(2, int1);
        string2 = IF_GETOP(3, int1);
        string3 = IF_GETOP(4, int1);
        string4 = IF_GETOP(5, int1);
        string5 = IF_GETOP(6, int1);
        string6 = IF_GETOP(7, int1);
        string7 = IF_GETOP(8, int1);
        string8 = IF_GETOP(9, int1);
        string9 = IF_GETOP(10, int1);
    };
    var int7 = comp(-1, 65535);
    var int8 = false;
    var int9 = -1 as obj;
    var int10 = 0;
    if ((IF_FIND(int0) == 1)) {
        int7 = cc_getparam(3819);
        int8 = cc_getparam(3820);
    };
    var int11 = script13749();
    while ((int6 <= int4)) {
        if ((CC_FIND(int0, int6) == 1)) {
            if ((int6 >= int3)) {
                if ((int8 == false)) {
                    int9 = INV_GETOBJ(int2, int6);
                    int10 = INV_GETNUM(int2, int6);
                } else {
                    int9 = INVOTHER_GETOBJ(int2, int6);
                    int10 = INVOTHER_GETNUM(int2, int6);
                };
                script12092(int0, int7, int2, int6, int9, int10, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8, string9);
            } else {
                CC_CLEAROPS();
                CC_SETOPBASE("");
                CC_SETONDRAGCOMPLETE(callback());
                if ((int11 == 0)) {
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