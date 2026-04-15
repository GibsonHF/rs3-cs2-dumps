//
function script18002(int0: dbrow, int1: boolean, int2: int, int3: int, int4: int, int5: int, int6: int, int7: unknown_int): void {
    var int8 = -1 as obj;
    var int9 = -1 as struct;
    var int10 = -1 as dbrow;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1 as graphic;
    [int8, int9, int10, int11, int12, int13] = script17884(int0);
    var int14 = comp(1227, 41);
    var int15 = script17868(7906 as dbrow, int2);
    var int16 = 1;
    var int17 = script17890(varplayer_11339);
    if ((int2 <= script17862(7906 as dbrow))) {
        int16 = 0;
    };
    if (((int4 <= 0) && (int6 <= 0))) {
        script12478(`Level with 0 rewards at level ${inttostring(int2, 10)}`);
    };
    var int18 = script17969(varplayer_11339, int2, int4, int6);
    script17927();
    if ((int7 == 0)) {
        script17978(int5, int14, int18, int4, int3, int1, int2, int15, int16, -1, -1, int6);
    };
    if ((int7 == 0)) {
        script18022(int2, int1, int15, int3, int6);
    };
    var int19 = comp(1227, 43);
    CC_DELETEALL(int19);
    switch (int6) {
        case 1: {
            IF_SETHIDE(true, comp(1227, 13));
            break;
        }
        default: {
            script18003(int19, int5, int2, int15, int1, int16, int4, int6);
            break;
        }
    };
    script17975(int5, int1, int15, int16, int4, int3);
    if ((CC_FINDBYCATEGORY(comp(1227, 30), 0, 0) == 1)) {
        if (((int2 == 1) && (int3 >= 0))) {
            script7872(false, 1, false, false);
        } else {
            script7872(true, 1, false, false);
        };
    };
    if ((CC_FINDBYCATEGORY(comp(1227, 31), 0, 0) == 1)) {
        script17927();
        if (((((int2 > int17) || (int6 == 2)) && ((int3 + 1) >= int4)) && (int6 != 1))) {
            script7872(false, 1, false, false);
        } else {
            script7872(true, 1, false, false);
        };
    };
    script18005(int0, int6);
    var int20 = comp(1227, 101);
    var int21 = comp(1227, 102);
    switch (int6) {
        case 2:
        case 1: {
            stack(script17979(int6));
            stack(int21);
            IF_SETGRAPHIC();
            IF_SETHIDE(1, int20);
            IF_SETSIZE(script17980(int6), 0, 0, int21);
            IF_SETHIDE(0, int21);
            break;
        }
        default: {
            IF_SETTEXT(inttostring(int2, 10), int20);
            IF_SETHIDE(false, int20);
            IF_SETHIDE(true, int21);
            break;
        }
    };
    script18004(int0, int6);
    return;
}