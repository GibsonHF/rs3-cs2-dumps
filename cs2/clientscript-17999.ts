//
function script17999(int0: dbrow, int1: boolean, int2: component, int3: component, int4: component): void {
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int5 = 0;
    var int6 = MIN(script17862(7906 as dbrow), script17892(int0));
    var int7 = 1;
    var int8 = 100;
    var int9 = 100;
    var int10 = 3;
    var int11 = 0;
    var int12 = 0;
    var int13 = script17881(int1);
    var string0 = "To unlock these Premier Rewards, upgrade to Premier Hero Pass";
    if ((int1 == true)) {
        int8 = 85;
        int9 = 85;
        int10 = 5;
        int11 = 2;
        int12 = (int13 / 2);
        if ((MODULO(int13, 2) != 0)) {
            int12 = (int12 + 1);
        };
        if ((script17865(int0) == 1)) {
            string0 = "You've got the Premier Hero Pass, you're able to claim Premier Rewards.";
            IF_SETHIDE(true, comp(1227, 65));
        } else {
            IF_SETHIDE(false, comp(1227, 65));
        };
        IF_SETTEXT(string0, comp(1227, 84));
    } else {
        int8 = 65;
        int9 = 65;
        int10 = 5;
        int11 = 1;
        int12 = int13;
    };
    var int14 = (((int8 + int10) * int12) + (int10 * 2));
    IF_SETTEXT(TOSTRING_LOCALISED(int13, 1), int4);
    if ((int13 == 0)) {
        return;
    };
    int12 = MAX(int12, 1);
    script7925(int2, 0, 0, 0, 1, 0, int14, 0, 0, 1, 1, int8, int9, int10);
    var int15 = 0;
    var int16 = 1;
    var int17 = 0;
    var int18 = 100;
    var int19 = 0;
    var int20 = 0;
    var int21 = 55;
    var int22 = -1 as obj;
    var int23 = -1 as struct;
    var int24 = -1 as dbrow;
    var int25 = 0;
    var int26 = 0;
    var int27 = -1 as graphic;
    var int28 = false;
    var int29 = 0;
    var int30 = -1 as dbrow;
    var int31 = -1 as dbrow;
    var int32 = -1 as dbrow;
    var int33 = -1 as dbrow;
    var int34 = -1 as dbrow;
    var int35 = -1 as dbrow;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int36 = 3;
    if ((int1 == false)) {
        int36 = 1;
    };
    while ((int7 <= int6)) {
        if ((script17868(7906 as dbrow, int7) == false)) {
            int28 = script17874(int0, int7);
            if ((script17843(int1, int28) == true)) {
                [int29, int30, int31, int32, int33, int34] = script17878(int0, int7);
                int20 = 0;
                while ((int20 < int29)) {
                    int35 = script17877(int20, int30, int31, int32, int33, int34);
                    if ((CC_FINDBYCATEGORY(int2, 0, 0) == 1)) {
                        [int22, int23, int24, int25, int26, int27] = script17884(int35);
                        if ((int7 > script17890(int0))) {
                            int25 = (int25 * script17893(int0));
                        };
                        if ((int17 > 210)) {
                            int16 = (int16 + 1);
                            int17 = 0;
                        };
                        script15939(int2, int16, int17, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
                        int17 = (int17 + 1);
                        script7858(int16, int17, 0, 0, 0, 0, 0, 0, 1, 1, script17989(int36), "");
                        int17 = (int17 + 1);
                        script7872(true, 1, false, false);
                        string1 = script17886(int22, int23, int24, int25, int26, int27);
                        string2 = script17887(int22, int23, int24, int25, int26, int27);
                        string3 = `${string1}<br><br>${string2}`;
                        if ((script13749() == true)) {
                            script17927();
                            script17955(string3);
                        } else {
                            CC_SETONMOUSEREPEAT(callback(script8802, string3, 1000, 25, -2147483645, -2147483643, 209, 16777215));
                        };
                        int17 = script17966(int35, int16, int17, int8, int25);
                    };
                    int20 = (int20 + 1);
                };
            };
        };
        int7 = (int7 + 1);
    };
    if ((int14 > (IF_GETWIDTH(int2) - 20))) {
        IF_SETSCROLLPOS(0, 0, int2);
        IF_SETSCROLLSIZE(int14, 0, int2);
        script11147(int3, int2);
    };
    return;
}