//
function script13798(int0: obj, int1: int, string0: string, string1: string): void {
    if (((int0 == -1 as obj) || (int0 == 48447 as obj))) {
        CC_SETOBJECT_NONUM(48447 as obj, 0);
        CC_CLEAROPS();
        CC_SETOPBASE("<col=B8D1D1>Empty slot");
        CC_SETOP(10, "Examine");
        CC_SETTRANS(0);
        return;
    };
    CC_SETOBJECT(int0, int1);
    script14420(int0);
    if ((int1 == 0)) {
        CC_CLEAROPS();
        CC_SETOP(8, "Remove-Placeholder");
        CC_SETOP(10, "Examine");
        CC_SETTRANS(128);
        return;
    };
    CC_SETOP(10, "Examine");
    CC_SETTRANS(0);
    if ((varbitplayer_45139 == 2)) {
        if ((((OC_WEARPOS(int0) == -1) || (item_getparam(int0, 3845) == true)) || (enum_getvalue(33, 1, 15589 as cs2enum, int0) == true))) {
            var string0 = "Withdraw";
            if ((varbitplayer_45140 != 1)) {
                var string1 = script13687("Withdraw");
                CC_SETOP(1, string1);
                CC_SETOP(2, `${string0}-1`);
                CC_SETOP(3, `${string0}-5`);
                CC_SETOP(4, `${string0}-10`);
                CC_SETOP(5, `${string0}-${inttostring(varplayer_111, 10)}`);
                CC_SETOP(6, `${string0}-X`);
                CC_SETOP(7, `${string0}-All`);
                CC_SETOP(9, "");
                CC_SETOP(8, `${string0}-Placeholder`);
                CC_SETOP(varbitplayer_45189, "");
                return;
            };
            CC_SETOP(9, "");
        } else {
            CC_SETOP(9, "Withdraw-1");
        };
        if ((OC_STACKABLE(int0) == 1)) {
            CC_SETOP(1, string1);
            CC_SETOP(2, `${string0}-1`);
            CC_SETOP(3, `${string0}-5`);
            CC_SETOP(4, `${string0}-10`);
            CC_SETOP(5, `${string0}-${inttostring(varplayer_111, 10)}`);
            CC_SETOP(6, `${string0}-X`);
            CC_SETOP(7, `${string0}-All`);
            CC_SETOP(8, `${string0}-Placeholder`);
            CC_SETOP(varbitplayer_45189, "");
        } else {
            if ((varbitplayer_45140 == 1)) {
                CC_SETOP(1, string1);
            } else {
                CC_SETOP(1, "");
            };
            CC_SETOP(2, `${string0}-1`);
            CC_SETOP(3, "");
            CC_SETOP(4, "");
            CC_SETOP(5, "");
            CC_SETOP(6, "");
            CC_SETOP(7, "");
            CC_SETOP(8, `${string0}-Placeholder`);
        };
    } else {
        CC_SETOP(1, string1);
        CC_SETOP(2, `${string0}-1`);
        CC_SETOP(3, `${string0}-5`);
        CC_SETOP(4, `${string0}-10`);
        CC_SETOP(5, `${string0}-${inttostring(varplayer_111, 10)}`);
        CC_SETOP(6, `${string0}-X`);
        CC_SETOP(7, `${string0}-All`);
        CC_SETOP(8, `${string0}-Placeholder`);
        CC_SETOP(varbitplayer_45189, "");
        if ((((OC_WEARPOS(int0) != -1) && (item_getparam(int0, 3845) == false)) && (enum_getvalue(33, 1, 15589 as cs2enum, int0) == false))) {
            CC_SETOP(9, "Wear");
        } else {
            CC_SETOP(9, "");
        };
    };
    return;
}