//
function script662(int0: int): void {
    var int1 = enum_getvalue(0, 9, 1080 as cs2enum, int0);
    var int2 = enum_getvalue(0, 39, 1079 as cs2enum, int0);
    CC_DELETEALL(int1);
    var int3 = IF_GETWIDTH(int1);
    var int4 = IF_GETHEIGHT(int1);
    var int5 = ((int3 / 2) - 40);
    var int6 = (int4 - 47);
    var int7 = INV_GETOBJ(int2, 0);
    var int8 = INV_GETOBJ(int2, 1);
    var int9 = INV_GETOBJ(int2, 2);
    [int7, int8] = script17386(int7, int8, int9);
    var int10 = enum_getvalue(0, 9, 1082 as cs2enum, int0);
    var int11 = IF_GETNEXTSUBID(int1);
    if ((int10 != comp(-1, 65535))) {
        if (((PLAYERMEMBER() == true) || (STOCKMARKET_ISOFFEREMPTY(int0, 0) == 0))) {
            IF_SETHIDE(true, int10);
        } else {
            IF_SETHIDE(false, int10);
        };
    };
    script6199(int1, 18266 as graphic, (int5 - 2), (int6 - 2), 40, 36);
    var int12 = 1140;
    if ((((int10 == comp(-1, 65535)) || (IF_GETHIDE(int10) == true)) && (CC_FIND(int1, int11) == 1))) {
        CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, int12));
        int12 = 18266;
        CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, int12));
        if ((int7 != -1)) {
            if ((OC_CERT(int7) != int7)) {
                if ((INV_GETNUM(int2, 0) > 1)) {
                    CC_SETOP(1, "Collect-notes");
                    CC_SETOP(2, "Collect-items");
                } else {
                    CC_SETOP(1, "Collect-items");
                    CC_SETOP(2, "Collect-notes");
                };
            } else {
                CC_SETOP(1, "Collect");
            };
            CC_SETOPBASE(OC_NAME(int7));
        };
    };
    CC_CREATE(int1, 5, ++int11);
    CC_SETPOSITION(int5, int6, 0, 0);
    CC_SETSIZE(36, 32, 0, 0);
    if ((script17378(int7) == 1)) {
        CC_SETOBJECT_LONG(995 as obj, script17402(int2, -1 as inv));
    } else {
        CC_SETOBJECT(int7, INV_GETNUM(int2, 0));
    };
    int5 = ((int3 / 2) + 4);
    script6199(int1, 18266 as graphic, (int5 - 2), (int6 - 2), 40, 36);
    if ((((int10 == comp(-1, 65535)) || (IF_GETHIDE(int10) == true)) && (CC_FIND(int1, ++int11) == 1))) {
        int12 = 1140;
        CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, int12));
        int12 = 18266;
        CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, int12));
        if ((int8 != -1)) {
            if ((OC_CERT(int8) != int8)) {
                if ((INV_GETNUM(int2, 1) > 1)) {
                    CC_SETOP(1, "Collect-notes");
                    CC_SETOP(2, "Collect-items");
                } else {
                    CC_SETOP(1, "Collect-items");
                    CC_SETOP(2, "Collect-notes");
                };
            } else {
                CC_SETOP(1, "Collect");
            };
            CC_SETOPBASE(OC_NAME(int8));
        };
    };
    CC_CREATE(int1, 5, ++int11);
    CC_SETPOSITION(int5, int6, 0, 0);
    CC_SETSIZE(36, 32, 0, 0);
    if ((script17378(int8) == 1)) {
        CC_SETOBJECT_LONG(995 as obj, script17402(int2, -1 as inv));
    } else {
        CC_SETOBJECT(int8, INV_GETNUM(int2, 1));
    };
    int11 = script652(11, 11, (int3 - 65), 16, int0, int1, ++int11, 1, 0, 0);
    CC_CREATE(int1, 3, int11);
    int5 = (int3 - 30);
    CC_SETPOSITION(int5, 11, 0, 0);
    CC_SETSIZE(18, 16, 0, 0);
    CC_SETCOLOUR(0);
    CC_SETTRANS(160);
    CC_SETFILL(1);
    CC_CREATE(int1, 5, ++int11);
    var int13 = STOCKMARKET_GETOFFERITEM(int0, 0);
    if ((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 0)) {
        CC_SETPOSITION(int5, 11, 0, 0);
        CC_SETSIZE(18, 16, 0, 0);
        CC_SETOBJECT(int13, -1);
        script3537(script18300(int13));
    };
    CC_CREATE(int1, 3, ++int11);
    int5 = (int3 - 50);
    CC_SETPOSITION(int5, 11, 0, 0);
    CC_SETSIZE(18, 16, 0, 0);
    CC_SETCOLOUR(0);
    CC_SETTRANS(160);
    CC_SETFILL(1);
    CC_CREATE(int1, 5, ++int11);
    var string0 = "null";
    if ((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 0)) {
        CC_SETPOSITION(int5, 12, 0, 0);
        CC_SETSIZE(16, 14, 0, 0);
        if ((STOCKMARKET_GETOFFERTYPE(int0, 0) == 0)) {
            CC_SETGRAPHIC(1157 as graphic);
            string0 = `Buy at ${TOSTRING_LOCALISED_LONG(STOCKMARKET_GETOFFERPRICE(int0, 0), 1)} coins each`;
        } else {
            CC_SETGRAPHIC(1156 as graphic);
            string0 = `Sell at ${TOSTRING_LOCALISED_LONG(STOCKMARKET_GETOFFERPRICE(int0, 0), 1)} coins each`;
        };
        script3537(string0);
    };
    return;
}