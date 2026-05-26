//
function script4741(): void {
    var int0 = 0;
    var int1 = -1;
    var int2 = -1 as inv;
    var string0 = "Store";
    var string1 = "store";
    if (((varbitplayer_3080 < 99999) && (varbitplayer_3079 != 0))) {
        int2 = enum_getvalue(0, 39, 3879 as cs2enum, varbitplayer_3079);
        if ((CC_FIND(74973184, varbitplayer_3080) == 1)) {
            int0 = INV_GETNUM(int2, varbitplayer_3080);
            if (((int0 > 0) || (int2 == 95 as inv))) {
                int1 = INV_GETOBJ(int2, varbitplayer_3080);
                if ((int1 != -1)) {
                    if ((script6551(int1) == 0)) {
                        string0 = "Delete";
                        string1 = "delete";
                    };
                    IF_SETHIDE(0, 74973190);
                    if ((int0 <= 1)) {
                        IF_SETTEXT(`Are you sure you want to ${string1} ${OC_NAME(int1)}?`, 74973221);
                    } else {
                        IF_SETTEXT(`Are you sure you want to ${string1} ${OC_NAME(int1)}</col> (<col=FFFFFF>${inttostring(int0, 10)} items</col>)?`, 74973221);
                    };
                    IF_SETOBJECT(int1, int0, 74973202);
                    IF_SETTEXT(OC_NAME(int1), 74973198);
                    IF_SETTEXT(string0, 74973220);
                };
            };
        };
    };
    return;
}