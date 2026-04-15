//
function script4741(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = -1 as inv;
    var string0 = "Store";
    var string1 = "store";
    if (((varbitplayer_3080 < 99999) && (varbitplayer_3079 != 0))) {
        int2 = enum_getvalue(0, 39, 3879 as cs2enum, varbitplayer_3079);
        if ((CC_FIND(comp(1144, 0), varbitplayer_3080) == 1)) {
            int0 = INV_GETNUM(int2, varbitplayer_3080);
            if (((int0 > 0) || (int2 == 95 as inv))) {
                int1 = INV_GETOBJ(int2, varbitplayer_3080);
                if ((int1 != -1 as obj)) {
                    if ((script6551(int1) == 0)) {
                        string0 = "Delete";
                        string1 = "delete";
                    };
                    IF_SETHIDE(false, comp(1144, 6));
                    if ((int0 <= 1)) {
                        IF_SETTEXT(`Are you sure you want to ${string1} ${OC_NAME(int1)}?`, comp(1144, 37));
                    } else {
                        IF_SETTEXT(`Are you sure you want to ${string1} ${OC_NAME(int1)}</col> (<col=FFFFFF>${inttostring(int0, 10)} items</col>)?`, comp(1144, 37));
                    };
                    IF_SETOBJECT(int1, int0, comp(1144, 18));
                    IF_SETTEXT(OC_NAME(int1), comp(1144, 14));
                    IF_SETTEXT(string0, comp(1144, 36));
                };
            };
        };
    };
    return;
}