//
function script10555(int0: component): void {
    var int1 = 5;
    var int2 = IF_GETWIDTH(int0);
    var int3 = (int2 / (36 + int1));
    var int4 = 0;
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = 0;
    var int8 = script13749();
    while ((int4 < 20)) {
        int5 = enum_getvalue(0, 33, 9199 as cs2enum, int4);
        int6 = script10556(int5);
        CC_CREATE(int0, 5, int4);
        CC_SETPOSITION((MODULO(int4, int3) * (36 + int1)), ((int4 / int3) * (32 + int1)), 0, 0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETONMOUSEREPEAT(callback(script8799, OC_NAME(int5), -2147483645, -2147483643));
        if ((int6 > 0)) {
            CC_SETOBJECT(int5, int6);
            CC_SETDRAGGABLE(comp(1532, 9), -1);
            if ((int8 == false)) {
                CC_SETDRAGDEADZONE(0);
                CC_SETDRAGDEADTIME(0);
            } else {
                CC_SETDRAGDEADZONE(20);
                CC_SETDRAGDEADTIME(5);
            };
            CC_SETOPBASE(OC_NAME(int5));
            CC_SETOP(1, "Add");
            CC_SETOP(2, "Slot 1");
            CC_SETOP(3, "Slot 2");
            CC_SETOP(4, "Slot 3");
            CC_SETONOP(callback(script10563, -2147483643, -2147483644));
            CC_SETONDRAGCOMPLETE(callback(script10559, -2147483643, -2147483642));
            if ((((varbitplayer_24912 == int4) || (varbitplayer_24913 == int4)) || (varbitplayer_24914 == int4))) {
                CC_SETTRANS(120);
            };
        } else {
            CC_SETOBJECT(int5, -1);
            CC_SETTRANS(120);
        };
        int4 = (int4 + 1);
    };
    IF_SETSCROLLSIZE(0, MAX(((int4 / int3) * (32 + int1)), IF_GETHEIGHT(int0)), int0);
    return;
}