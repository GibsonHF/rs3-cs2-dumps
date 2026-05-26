//
function script18002(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    [int8, int9, int10, int11, int12, int13] = script17884(int0);
    var int14 = 80412713;
    var int15 = script17868(7906, int2);
    var int16 = 1;
    var int17 = script17890(varplayer_11339);
    if ((int2 <= script17862(7906))) {
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
    var int19 = 80412715;
    CC_DELETEALL(int19);
    switch (int6) {
        case 1: {
            IF_SETHIDE(1, 80412685);
            break;
        }
        default: {
            script18003(int19, int5, int2, int15, int1, int16, int4, int6);
            break;
        }
    };
    script17975(int5, int1, int15, int16, int4, int3);
    if ((CC_FINDBYCATEGORY(80412702, 0, 0) == 1)) {
        if (((int2 == 1) && (int3 >= 0))) {
            script7872(0, 1, 0, 0);
        } else {
            script7872(1, 1, 0, 0);
        };
    };
    if ((CC_FINDBYCATEGORY(80412703, 0, 0) == 1)) {
        script17927();
        if (((((int2 > int17) || (int6 == 2)) && ((int3 + 1) >= int4)) && (int6 != 1))) {
            script7872(0, 1, 0, 0);
        } else {
            script7872(1, 1, 0, 0);
        };
    };
    script18005(int0, int6);
    var int20 = 80412773;
    var int21 = 80412774;
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
            IF_SETHIDE(0, int20);
            IF_SETHIDE(1, int21);
            break;
        }
    };
    script18004(int0, int6);
    return;
}