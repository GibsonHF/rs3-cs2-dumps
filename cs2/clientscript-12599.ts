//
function script12599(int0: component, int1: int, int2: int, int3: int, int4: int): void {
    if ((((((int0 == comp(-1, 65535)) || (int3 < 1)) || (int4 < 1)) || (int1 < 2)) || ((2 + ((int3 + 1) * (3 + int4))) <= int1))) {
        return;
    };
    var int5 = (((int1 - 2) / (3 + int4)) - 1);
    if ((int5 < 0)) {
        return;
    };
    var string0 = "";
    var int6 = IF_GETLAYER(int0);
    if ((int6 != comp(-1, 65535))) {
        int6 = IF_GETLAYER(int6);
    } else {
        return;
    };
    var int7 = IF_GETWIDTH(int6);
    var int8 = int4;
    var int9 = ((2 + ((int5 + 1) * (3 + int4))) + 3);
    while (((--int8 >= 0) && (CC_FIND(int0, (int9 + int8)) == 1))) {
        if (((CC_GETWIDTH() > 0) && ((CC_GETX() + CC_GETWIDTH()) > int7))) {
            int8 = -1;
        };
    };
    if ((int8 < -1)) {
        string0 = script12292(script12286(int2));
        int8 = -1;
        while (((++int8 < int4) && (CC_FIND(int0, (int9 + int8)) == 1))) {
            if ((CC_GETWIDTH() > 0)) {
                string0 = `${string0}<br>${enum_getvalue(0, 36, 10039 as cs2enum, cc_getparam(5946))}: ${CC_GETTEXT()}`;
            };
        };
    };
    int8 = -1;
    while (((++int8 < int4) && (CC_FIND(int0, (int9 + int8)) == 1))) {
        CC_SETONMOUSEREPEAT(callback());
    };
    if (((STRING_LENGTH(string0) != 0) && (CC_FIND(int0, ((int9 - 3) + 2)) == 1))) {
        CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
        script3877(string0, int0, CC_GETID());
    };
    return;
}