//
function script13663(): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    dbrow_findnext();
    var int5 = stack();
    stack(int5);
    stack(90384);
    stack(0);
    dbrow_getfield();
    var int6 = stack();
    stack(int5);
    stack(90272);
    stack(0);
    dbrow_getfield();
    var int7 = stack();
    var int8 = -1;
    var int9 = 0;
    var int10 = -1;
    var int11 = 0;
    var int12 = DB_GETFIELDCOUNT(int5, 90416);
    stack(int5);
    stack(90464);
    stack(0);
    dbrow_getfield();
    var int13 = stack();
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    if (((int7 == 2) && (varbitplayer_48814 > 0))) {
        int17 = SCALE(varbitplayer_48814, int6, 100);
        int18 = varbitplayer_48814;
    } else {
        int17 = SCALE(varplayer_7270, int6, 100);
        int18 = varplayer_7270;
    };
    if ((MODULO(int17, 100) > 0)) {
        int17 = (int17 + 100);
    };
    int17 = (int17 / 100);
    int17 = (int17 * int13);
    if ((int12 > 0)) {
        [int8, int9] = dbrow_getfield(int5, 90416, 0);
        if ((int12 > 1)) {
            [int10, int11] = dbrow_getfield(int5, 90416, 1);
        };
    };
    var int19 = 0;
    if (((varplayer_7270 == 0) || ((2147483647 - ((60 * varplayer_7270) / (int6 * (60 / 60)))) < 0))) {
        int19 = 1;
    };
    if ((varplayer_7270 > 0)) {
        if ((int8 != -1 as obj)) {
            if ((varbitplayer_37616 < int9)) {
                int19 = 1;
            } else {
                int14 = (varbitplayer_37616 / int9);
            };
        };
        if ((int10 != -1 as obj)) {
            if ((varbitplayer_37617 < int11)) {
                int19 = 1;
            } else {
                int15 = (varbitplayer_37617 / int11);
            };
        };
        if ((varbitplayer_37590 < int13)) {
            int19 = 1;
        } else {
            int16 = ((varbitplayer_37590 / int13) * int6);
        };
        if (((int7 == 2) && (varbitplayer_48814 < 1))) {
            int19 = 1;
        };
    };
    if ((int19 == 0)) {
        if ((int8 != -1 as obj)) {
            int18 = MIN(varplayer_7270, int14);
        };
        if ((int10 != -1 as obj)) {
            int18 = MIN(int18, int15);
        };
        int18 = MIN(int18, int16);
        int0 = ((60 * int18) / (int6 * (60 / 60)));
        if ((int0 < 60)) {
            [int3, int4] = script10900(DATE_MINUTES());
            int3 = 0;
            int4 = (60 - int4);
        } else {
            int1 = (int0 / 10080);
            int2 = ((int0 - (int1 * 10080)) / 1440);
            int3 = (((int0 - (int1 * 10080)) - (int2 * 1440)) / 60);
            if ((MODULO(int18, int6) == 0)) {
                int3 = (int3 - 1);
            };
            [int0, int4] = script10900(DATE_MINUTES());
            int4 = (60 - int4);
        };
        string0 = `${inttostring(int4, 10)} minutes`;
        if ((int3 > 0)) {
            string0 = `${inttostring(int3, 10)} hours ${string0}`;
        };
        if ((int2 > 0)) {
            string0 = `${inttostring(int2, 10)} days ${string0}`;
        };
        if ((int1 > 0)) {
            string0 = `${inttostring(int1, 10)} weeks ${string0}`;
        };
        if ((((int8 != -1 as obj) && (int14 < varplayer_7270)) || (((int10 != -1 as obj) && (int15 < varplayer_7270)) || (varbitplayer_37590 < int17)))) {
            string0 = `<col=ff0000>! ${string0} !</col>`;
        };
    } else if ((varplayer_7270 == 0)) {
        string0 = "<col=ff0000>! You have no items to process !</col>";
    } else if (((int8 != -1 as obj) && (varbitplayer_37616 < int9))) {
        string0 = `<col=ff0000>You have no: ${OC_NAME(int8)}</col>`;
        if (((int10 != -1 as obj) && (varbitplayer_37617 < int11))) {
            string0 = `${string0}<col=ff0000>, ${OC_NAME(int10)}</col>`;
        };
    } else if (((int10 != -1 as obj) && (varbitplayer_37617 < int11))) {
        string0 = `<col=ff0000>You have no: ${OC_NAME(int10)}</col>`;
    } else if ((varbitplayer_37590 < int13)) {
        string0 = "<col=ff0000>You have no charge to process items</col>";
    } else if ((((int7 == 2) && (varbitplayer_48814 < 1)) && (varplayer_7270 > 0))) {
        string0 = "<col=ff0000>You don't have enough batch items</col>";
    } else {
        string0 = "Lots!";
    };
    if ((IF_FIND(comp(1902, 26)) == 1)) {
        CC_SETTEXT(string0);
    };
    return;
}