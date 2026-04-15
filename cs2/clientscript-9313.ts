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
    IF_SETPOSITION(int0, int2, 0, 0, comp(517, 0));
    IF_SETSIZE((int0 + int1), (int2 + int3), 1, 1, comp(517, 0));
    var int4 = 213;
    var int5 = 0;
    var int6 = 0;
    var int7 = script6431();
    if ((int7 == true)) {
        IF_SETPOSITION(0, 0, 0, 2, comp(517, 155));
        IF_SETPOSITION(0, 0, 1, 0, comp(517, 229));
        IF_SETPOSITION(0, 0, 0, 2, comp(517, 4));
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 66));
        IF_SETPOSITION(70, 12, 2, 0, comp(517, 312));
        int4 = 253;
        int5 = 105;
        int6 = 126;
    } else {
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 155));
        IF_SETPOSITION(0, 0, 1, 2, comp(517, 229));
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 4));
        IF_SETPOSITION(0, 0, 0, 2, comp(517, 66));
        IF_SETPOSITION(50, 15, 2, 0, comp(517, 312));
    };
    var int8 = IF_GETHEIGHT(comp(517, 2));
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((varbitplayer_39433 == 1)) {
        IF_SETSIZE(int4, 499, 0, 0, comp(517, 3));
        IF_SETSIZE((int4 + 4), 0, 1, 1, comp(517, 154));
        IF_SETHIDE(false, comp(517, 260));
        IF_SETHIDE(false, comp(517, 70));
        IF_SETHIDE(true, comp(517, 87));
        IF_SETHIDE(true, comp(517, 157));
        IF_SETHIDE(true, comp(517, 229));
        [int9, int10, int11] = [1, 1, 1];
    } else {
        IF_SETSIZE(int4, 0, 0, 1, comp(517, 3));
        IF_SETSIZE((int4 + 4), 0, 1, 1, comp(517, 154));
        IF_SETHIDE(true, comp(517, 260));
        IF_SETHIDE(true, comp(517, 70));
        IF_SETHIDE(false, comp(517, 87));
        IF_SETHIDE(false, comp(517, 157));
        IF_SETHIDE(false, comp(517, 229));
        if (((int7 == true) && (int8 <= 650))) {
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
        IF_SETHIDE(true, comp(517, 151));
    } else {
        IF_SETHIDE(false, comp(517, 151));
    };
    if ((int9 == 1)) {
        IF_SETSIZE(0, 138, 1, 0, comp(517, 66));
        IF_SETPOSITION(0, 24, 0, 0, comp(517, 87));
        IF_SETPOSITION(0, 0, 2, 0, comp(517, 153));
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 116));
        IF_SETSIZE(0, 24, 1, 1, comp(517, 87));
        IF_SETHIDE(true, comp(517, 89));
        if ((varbitplayer_45191 == 0)) {
            IF_SETHIDE(false, comp(517, 91));
            IF_SETHIDE(true, comp(517, 116));
        } else {
            IF_SETHIDE(true, comp(517, 91));
            IF_SETHIDE(false, comp(517, 116));
        };
    } else {
        IF_SETSIZE(0, 239, 1, 0, comp(517, 66));
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 87));
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 153));
        IF_SETPOSITION(0, 24, 0, 0, comp(517, 116));
        IF_SETSIZE(0, 0, 1, 1, comp(517, 87));
        IF_SETHIDE(false, comp(517, 89));
        IF_SETHIDE(false, comp(517, 91));
        IF_SETHIDE(false, comp(517, 116));
    };
    var int12 = true;
    var int13 = true;
    var int14 = true;
    switch (varbitplayer_45139) {
        case 2: {
            int13 = false;
            break;
        }
        case 1: {
            int14 = false;
            break;
        }
        default: {
            int12 = false;
            break;
        }
    };
    var int15 = comp(-1, 65535);
    var int16 = comp(-1, 65535);
    if ((int10 == 1)) {
        if (((int7 == true) && (int8 <= 650))) {
            IF_SETSIZE(0, (138 + 5), 1, 1, comp(517, 4));
            IF_SETSIZE(0, 30, 1, 1, comp(517, 11));
            IF_SETSIZE(0, 70, 1, 1, comp(517, 22));
            IF_SETPOSITION(0, 0, 0, 1, comp(517, 22));
            IF_SETSIZE(0, 35, 1, 1, comp(517, 31));
        } else {
            IF_SETSIZE(0, (358 + int5), 1, 0, comp(517, 4));
            IF_SETSIZE(0, (291 + int5), 1, 0, comp(517, 11));
            IF_SETSIZE(0, 291, 1, 0, comp(517, 22));
            IF_SETPOSITION(0, 35, 0, 2, comp(517, 22));
            IF_SETSIZE(0, 295, 1, 0, comp(517, 31));
        };
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 31));
        IF_SETHIDE(true, comp(517, 9));
    } else {
        IF_SETSIZE(0, (291 + int5), 1, 0, comp(517, 11));
        IF_SETSIZE(0, 240, 1, 0, comp(517, 22));
        IF_SETHIDE(false, comp(517, 9));
        int13 = false;
        if ((int11 == 1)) {
            IF_SETSIZE(0, (608 + int5), 1, 0, comp(517, 4));
            if ((varbitplayer_45139 == 2)) {
                int12 = false;
                IF_SETPOSITION(0, 0, 1, 0, comp(517, 22));
                IF_SETPOSITION(0, 35, 0, 2, comp(517, 11));
                IF_SETPOSITION(0, 0, 0, 0, comp(517, 31));
            } else {
                IF_SETPOSITION(0, 0, 1, 0, comp(517, 11));
                IF_SETPOSITION(0, 35, 0, 2, comp(517, 22));
                IF_SETPOSITION(0, 0, 0, 0, comp(517, 31));
            };
        } else {
            IF_SETSIZE(0, ((909 + int5) + int6), 1, 0, comp(517, 4));
            IF_SETPOSITION(0, -25, 0, 1, comp(517, 22));
            IF_SETSIZE(0, (295 + int6), 1, 0, comp(517, 31));
            IF_SETPOSITION(0, 35, 0, 2, comp(517, 31));
            int12 = false;
            int14 = false;
        };
        switch (varbitplayer_45139) {
            case 0: {
                int15 = comp(517, 12);
                int16 = comp(517, 11);
                break;
            }
            case 2: {
                int15 = comp(517, 23);
                int16 = comp(517, 22);
                break;
            }
            case 1: {
                int15 = comp(517, 32);
                int16 = comp(517, 31);
                break;
            }
        };
        if ((int15 != comp(-1, 65535))) {
            IF_SETSIZE(IF_GETWIDTH(int15), IF_GETHEIGHT(int15), 0, 0, comp(517, 9));
            IF_SETPOSITION(IF_GETX(int16), IF_GETY(int16), 0, 0, comp(517, 9));
        };
    };
    IF_SETHIDE(int12, comp(517, 11));
    IF_SETHIDE(int13, comp(517, 22));
    IF_SETHIDE(int14, comp(517, 31));
    script10241();
    if (((varbitplayer_45140 != 0) || (varbitplayer_39433 == 1))) {
        IF_SETHIDE(true, comp(517, 158));
        IF_SETPOSITION(0, 0, 1, 2, comp(517, 157));
    } else {
        IF_SETHIDE(false, comp(517, 158));
        IF_SETPOSITION(0, 0, 2, 2, comp(517, 157));
    };
    if ((script5767() == 1)) {
        IF_SETHIDE(true, comp(517, 66));
        IF_SETHIDE(true, comp(517, 312));
    } else {
        IF_SETHIDE(false, comp(517, 66));
        IF_SETHIDE(false, comp(517, 312));
    };
    return;
}