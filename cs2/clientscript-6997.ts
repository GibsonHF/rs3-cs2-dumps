//
function script6997(int0: component, int1: int, int2: obj, int3: unknown_int, int4: component, int5: unknown_int, int6: unknown_int, int7: int, int8: int, int9: int, int10: int, int11: unknown_int, int12: unknown_int): void {
    var int13 = -1 as obj;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1;
    if ((IF_FIND(int0) == 1)) {
        if ((int9 == 14)) {
            var int2 = INV_GETOBJ(94 as inv, int10);
            var int3 = 94;
            CC_SETGRAPHIC(-1 as graphic);
            CC_SETOBJECT(int2, -1);
            if (((int12 == 1) && (int2 == -1 as obj))) {
                script6995(int11, int1, 0, 0, 0, -1);
                return;
            };
            CC_SETCOLOUR(16777215);
            script7968(int4, 1);
            script9380(int2, 0, 94);
        } else {
            [int13, int15, int16] = script947(int2);
            if ((int15 != -1)) {
                CC_SETCOLOUR(16777215);
                script7968(int4, 1);
                if ((int10 > 0)) {
                    CC_SETOBJECT_ALWAYSNUM(int13, int10);
                } else {
                    CC_SETOBJECT(int13, -1);
                };
                script9380(int2, int10, int3);
            } else {
                CC_SETCOLOUR(3355443);
                script7968(int4, 0);
                if ((int10 > 0)) {
                    CC_SETOBJECT_ALWAYSNUM(int2, int10);
                } else {
                    CC_SETOBJECT(int2, -1);
                };
                script9380(int2, int10, int3);
            };
        };
        if ((int5 == 1)) {
            CC_SETOP(10, "Customise keybind");
            CC_SETONOP(callback(script7023, int11, int1, -2147483645, -2147483644));
        };
        script7033();
        if (((int6 == 0) && (script792() == 0))) {
            int14 = script7000(int2, int3, int10);
            if (((item_getparam(int2, 3921) == 1) && ((int14 > 3) || (script16476() == 1)))) {
                CC_SETOPTKEY(int7, int8);
                CC_SETOPTKEYRATE(6, 50);
            } else {
                CC_SETOPKEY(int14, int7, int8, -1, 0, -1, 0, -1, 0, -1, 0);
                CC_SETOPKEYRATE(int14, 6, 50);
            };
        };
        if (((varbitplayer_1892 == 0) && (varbitplayer_38842 == 0))) {
            CC_SETONMOUSEREPEAT(callback(script5495, int2));
            CC_SETONMOUSELEAVE(callback(script5495, -1));
        } else {
            CC_SETONMOUSEREPEAT(callback());
            CC_SETONMOUSELEAVE(callback());
        };
    };
    return;
}