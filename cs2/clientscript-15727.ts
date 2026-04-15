//
function script15727(int0: int): void {
    CC_DELETEALL(comp(828, 4));
    varclient_6892 = int0;
    var int1 = 0;
    var int2 = 0;
    var int3 = enum_getvalue(0, 26, 15466 as cs2enum, varbitplayer_49038);
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(int3);
    var int6 = 0;
    var int7 = 0;
    if ((IF_GETTOP() == 906)) {
        if ((script248() == 1)) {
            int3 = 14601 as cs2enum;
        } else {
            int3 = 14600 as cs2enum;
        };
        int5 = ENUM_GETOUTPUTCOUNT(int3);
    };
    if ((enum_hasoutput(0, int3, int0) == 1)) {
        int7 = enum_getreverseindex(0, 0, int3, int0, 0);
    } else {
        var int0 = 0;
        int7 = enum_getvalue(0, 0, int3, 0);
    };
    var string0 = "";
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    while ((int4 < int5)) {
        int8 = enum_getvalue(0, 0, int3, int4);
        string0 = enum_getvalue(0, 36, 15465 as cs2enum, int8);
        int9 = script17963(int8);
        SHOP_GETINDEXFORCATEGORYID(int9);
        int10 = stack();
        stack(int10);
        if ((SHOP_GETPRODUCTCOUNT() > 0)) {
            if (((int0 != int8) && ((script15728(int9) == 1) || (script16140(int9) == 1)))) {
                script20619(comp(828, 4), int4, string0);
                CC_SETONOP(callback(script15874, int8));
                CC_BUTTON_SETTOGGLED(0);
            } else {
                script20618(comp(828, 4), int4, string0);
                CC_SETONOP(callback(script15874, int8));
                if ((int0 == int8)) {
                    CC_BUTTON_SETTOGGLED(true);
                } else {
                    CC_BUTTON_SETTOGGLED(false);
                };
            };
            int2 = (int2 + 1);
        };
        int4 = (int4 + 1);
    };
    script15729(script17963(int0));
    return;
}