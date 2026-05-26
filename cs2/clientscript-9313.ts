//
function script9313(): void {
    if ((varbitplayer_27169 == 1)) {
        script13951(struct_getparam(21308, 3503), 714);
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int2, int1, int3] = script2956();
    IF_SETPOSITION(int0, int2, 0, 0, 33882112);
    IF_SETSIZE((int0 + int1), (int2 + int3), 1, 1, 33882112);
    var int4 = 213;
    var int5 = 0;
    var int6 = 0;
    var int7 = script6431();
    if ((int7 == 1)) {
        IF_SETPOSITION(0, 0, 0, 2, 33882267);
        IF_SETPOSITION(0, 0, 1, 0, 33882341);
        IF_SETPOSITION(0, 0, 0, 2, 33882116);
        IF_SETPOSITION(0, 0, 0, 0, 33882178);
        IF_SETPOSITION(70, 12, 2, 0, 33882424);
        int4 = 253;
        int5 = 105;
        int6 = 126;
    } else {
        IF_SETPOSITION(0, 0, 0, 0, 33882267);
        IF_SETPOSITION(0, 0, 1, 2, 33882341);
        IF_SETPOSITION(0, 0, 0, 0, 33882116);
        IF_SETPOSITION(0, 0, 0, 2, 33882178);
        IF_SETPOSITION(50, 15, 2, 0, 33882424);
    };
    var int8 = IF_GETHEIGHT(33882114);
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((varbitplayer_39433 == 1)) {
        IF_SETSIZE(int4, 499, 0, 0, 33882115);
        IF_SETSIZE((int4 + 4), 0, 1, 1, 33882266);
        IF_SETHIDE(0, 33882372);
        IF_SETHIDE(0, 33882182);
        IF_SETHIDE(1, 33882199);
        IF_SETHIDE(1, 33882269);
        IF_SETHIDE(1, 33882341);
        [int9, int10, int11] = [1, 1, 1];
    } else {
        IF_SETSIZE(int4, 0, 0, 1, 33882115);
        IF_SETSIZE((int4 + 4), 0, 1, 1, 33882266);
        IF_SETHIDE(1, 33882372);
        IF_SETHIDE(1, 33882182);
        IF_SETHIDE(0, 33882199);
        IF_SETHIDE(0, 33882269);
        IF_SETHIDE(0, 33882341);
        if (((int7 == 1) && (int8 <= 650))) {
            [int9, int10, int11] = [1, 1, 1];
        };
        if ((int8 < ((358 + 239) + int5))) {
            [int9, int10, int11] = [1, 1, 1];
        } else if ((int8 < ((608 + 138) + int5))) {
            [int9, int10, int11] = [0, 1, 1];
        } else if ((int8 < ((608 + 239) + int5))) {
            [int9, int10, int11] = [1, 0, 1];
        } else if (((int8 < (((909 + 138) + int5) + int6)) || (varclient_6709 == 0))) {
            [int9, int10, int11] = [0, 0, 1];
        } else if ((int8 < (((909 + 239) + int5) + int6))) {
            [int9, int10, int11] = [1, 0, 0];
        };
    };
    if ((varbitplayer_39433 == 1)) {
        IF_SETHIDE(1, 33882263);
    } else {
        IF_SETHIDE(0, 33882263);
    };
    if ((int9 == 1)) {
        IF_SETSIZE(0, 138, 1, 0, 33882178);
        IF_SETPOSITION(0, 24, 0, 0, 33882199);
        IF_SETPOSITION(0, 0, 2, 0, 33882265);
        IF_SETPOSITION(0, 0, 0, 0, 33882228);
        IF_SETSIZE(0, 24, 1, 1, 33882199);
        IF_SETHIDE(1, 33882201);
        if ((varbitplayer_45191 == 0)) {
            IF_SETHIDE(0, 33882203);
            IF_SETHIDE(1, 33882228);
        } else {
            IF_SETHIDE(1, 33882203);
            IF_SETHIDE(0, 33882228);
        };
    } else {
        IF_SETSIZE(0, 239, 1, 0, 33882178);
        IF_SETPOSITION(0, 0, 0, 0, 33882199);
        IF_SETPOSITION(0, 0, 0, 0, 33882265);
        IF_SETPOSITION(0, 24, 0, 0, 33882228);
        IF_SETSIZE(0, 0, 1, 1, 33882199);
        IF_SETHIDE(0, 33882201);
        IF_SETHIDE(0, 33882203);
        IF_SETHIDE(0, 33882228);
    };
    var int12 = 1;
    var int13 = 1;
    var int14 = 1;
    switch (varbitplayer_45139) {
        case 2: {
            int13 = 0;
            break;
        }
        case 1: {
            int14 = 0;
            break;
        }
        default: {
            int12 = 0;
            break;
        }
    };
    var int15 = -1;
    var int16 = -1;
    if ((int10 == 1)) {
        if (((int7 == 1) && (int8 <= 650))) {
            IF_SETSIZE(0, (138 + 5), 1, 1, 33882116);
            IF_SETSIZE(0, 30, 1, 1, 33882123);
            IF_SETSIZE(0, 70, 1, 1, 33882134);
            IF_SETPOSITION(0, 0, 0, 1, 33882134);
            IF_SETSIZE(0, 35, 1, 1, 33882143);
        } else {
            IF_SETSIZE(0, (358 + int5), 1, 0, 33882116);
            IF_SETSIZE(0, (291 + int5), 1, 0, 33882123);
            IF_SETSIZE(0, 291, 1, 0, 33882134);
            IF_SETPOSITION(0, 35, 0, 2, 33882134);
            IF_SETSIZE(0, 295, 1, 0, 33882143);
        };
        IF_SETPOSITION(0, 0, 0, 0, 33882143);
        IF_SETHIDE(1, 33882121);
    } else {
        IF_SETSIZE(0, (291 + int5), 1, 0, 33882123);
        IF_SETSIZE(0, 240, 1, 0, 33882134);
        IF_SETHIDE(0, 33882121);
        int13 = 0;
        if ((int11 == 1)) {
            IF_SETSIZE(0, (608 + int5), 1, 0, 33882116);
            if ((varbitplayer_45139 == 2)) {
                int12 = 0;
                IF_SETPOSITION(0, 0, 1, 0, 33882134);
                IF_SETPOSITION(0, 35, 0, 2, 33882123);
                IF_SETPOSITION(0, 0, 0, 0, 33882143);
            } else {
                IF_SETPOSITION(0, 0, 1, 0, 33882123);
                IF_SETPOSITION(0, 35, 0, 2, 33882134);
                IF_SETPOSITION(0, 0, 0, 0, 33882143);
            };
        } else {
            IF_SETSIZE(0, ((909 + int5) + int6), 1, 0, 33882116);
            IF_SETPOSITION(0, -25, 0, 1, 33882134);
            IF_SETSIZE(0, (295 + int6), 1, 0, 33882143);
            IF_SETPOSITION(0, 35, 0, 2, 33882143);
            int12 = 0;
            int14 = 0;
        };
        switch (varbitplayer_45139) {
            case 0: {
                int15 = 33882124;
                int16 = 33882123;
                break;
            }
            case 2: {
                int15 = 33882135;
                int16 = 33882134;
                break;
            }
            case 1: {
                int15 = 33882144;
                int16 = 33882143;
                break;
            }
        };
        if ((int15 != -1)) {
            IF_SETSIZE(IF_GETWIDTH(int15), IF_GETHEIGHT(int15), 0, 0, 33882121);
            IF_SETPOSITION(IF_GETX(int16), IF_GETY(int16), 0, 0, 33882121);
        };
    };
    IF_SETHIDE(int12, 33882123);
    IF_SETHIDE(int13, 33882134);
    IF_SETHIDE(int14, 33882143);
    script10241();
    if (((varbitplayer_45140 != 0) || (varbitplayer_39433 == 1))) {
        IF_SETHIDE(1, 33882270);
        IF_SETPOSITION(0, 0, 1, 2, 33882269);
    } else {
        IF_SETHIDE(0, 33882270);
        IF_SETPOSITION(0, 0, 2, 2, 33882269);
    };
    if ((script5767() == 1)) {
        IF_SETHIDE(1, 33882178);
        IF_SETHIDE(1, 33882424);
    } else {
        IF_SETHIDE(0, 33882178);
        IF_SETHIDE(0, 33882424);
    };
    return;
}