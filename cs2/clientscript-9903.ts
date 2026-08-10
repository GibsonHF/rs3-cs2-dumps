//
function script9903(): void {
    if ((varplayer_12314 == 0)) {
        IF_SETHIDE(true, comp(1465, 9));
    };
    var int0 = 0;
    var int1 = 21278;
    var int2 = struct_getparam(int1, 3503);
    var int3 = 0;
    IF_SETHIDE(false, comp(1465, 22));
    IF_SETHIDE(false, comp(1465, 21));
    IF_SETHIDE(false, comp(1465, 13));
    IF_SETHIDE(false, comp(1465, 23));
    IF_SETHIDE(false, comp(1465, 2));
    IF_SETHIDE(true, comp(1465, 24));
    IF_SETHIDE(true, comp(1465, 27));
    if ((script6431() == 1)) {
        unk11125(0);
        IF_SETHIDE(true, comp(1465, 7));
        IF_SETHIDE(true, comp(1465, 1));
        IF_SETHIDE(true, comp(1465, 8));
        IF_SETHIDE(true, comp(1465, 2));
        IF_SETSIZE(0, 0, 1, 1, comp(1465, 0));
        IF_SETPOSITION(0, 0, 1, 1, comp(1465, 0));
    } else if ((varbitplayer_60446 == 1)) {
        if ((varbitplayer_27169 == 0)) {
            IF_SETSIZE(275, 275, 0, 0, int2);
            if (((IF_GETX(int2) + 275) > IF_GETWIDTH(comp(1477, 26)))) {
                IF_SETPOSITION(0, IF_GETY(int2), 2, 0, int2);
            };
        };
        unk11125(1);
        IF_SETHIDE(false, comp(1465, 24));
        IF_SETHIDE(true, comp(1465, 1));
        IF_SETHIDE(false, comp(1465, 7));
        IF_SETHIDE(true, comp(1465, 2));
        IF_SETSIZE(220, 220, 0, 0, comp(1465, 0));
        IF_SETPOSITION(6, 6, 2, 0, comp(1465, 0));
        IF_SETPOSITION(184, 14, 2, 0, comp(1919, 0));
        IF_SETPOSITION(182, 11, 2, 0, comp(1465, 12));
        if (((varplayer_12314 > 0) && (varbitplayer_27169 == 1))) {
            IF_SETPOSITION(206, 55, 2, 0, comp(1465, 9));
            IF_SETHIDE(false, comp(1465, 9));
            stack(96010249);
            script21085();
        };
        IF_SETPOSITION(206, 141, 2, 0, comp(1465, 13));
        IF_SETPOSITION(182, 181, 2, 0, comp(1465, 21));
        IF_SETPOSITION(14, 181, 2, 0, comp(1465, 22));
        IF_SETPOSITION(69, 212, 2, 0, comp(1465, 23));
        if ((varbitplayer_27169 == 0)) {
            if ((varbitplayer_26696 != 1)) {
                IF_SETHIDE(true, comp(1465, 23));
            } else if ((varbitplayer_27169 == 1)) {
                if ((varbitplayer_26696 == 0)) {
                    IF_SETHIDE(true, comp(1465, 23));
                } else {
                    IF_SETHIDE(false, comp(1465, 23));
                };
            } else {
                IF_SETHIDE(false, comp(1465, 23));
            };
        } else if ((varbitplayer_27169 == 1)) {
            if ((varbitplayer_26696 == 0)) {
                IF_SETHIDE(true, comp(1465, 23));
            } else {
                IF_SETHIDE(false, comp(1465, 23));
            };
        } else {
            IF_SETHIDE(false, comp(1465, 23));
        };
        if ((varbitplayer_27169 == 1)) {
            IF_SETHIDE(false, comp(1465, 27));
            IF_SETPOSITION(0, 148, 2, 0, comp(1465, 27));
        } else {
            IF_SETHIDE(true, comp(1465, 27));
        };
        if ((varbitplayer_223 == 1)) {
            if ((MAP_LANG() == 1)) {
                IF_SETGRAPHIC(5570 as graphic, comp(1920, 7));
            } else {
                IF_SETGRAPHIC(5568 as graphic, comp(1920, 7));
            };
        };
        script8705(1004);
    } else {
        if ((varbitplayer_27169 == 1)) {
            IF_SETPOSITION(0, 0, 2, 0, int2);
            IF_SETSIZE(275, 248, 0, 0, int2);
            IF_SETSIZE(0, 39, 1, 1, comp(1465, 0));
            IF_SETHIDE(false, comp(1465, 2));
            IF_SETSIZE(0, 39, 1, 0, comp(1465, 2));
            IF_SETPOSITION(0, 39, 0, 2, comp(1465, 5));
            IF_SETPOSITION(0, 39, 2, 2, comp(1465, 6));
            IF_SETPOSITION(0, 40, 2, 2, comp(1465, 22));
            IF_SETPOSITION(0, 40, 0, 2, comp(1465, 21));
            IF_SETPOSITION(0, 2, 1, 2, comp(1465, 23));
            if ((varplayer_12314 > 0)) {
                IF_SETPOSITION(-70, 0, 1, 2, comp(1465, 9));
                IF_SETHIDE(false, comp(1465, 9));
                stack(96010249);
                script21085();
            };
            IF_SETHIDE(false, comp(1465, 27));
            IF_SETPOSITION(4, 1, 0, 2, comp(1465, 27));
        } else {
            IF_SETSIZE(0, 0, 1, 1, comp(1465, 0));
            IF_SETHIDE(true, comp(1465, 2));
            IF_SETPOSITION(0, 0, 0, 2, comp(1465, 5));
            IF_SETPOSITION(0, 0, 2, 2, comp(1465, 6));
            IF_SETPOSITION(0, 1, 2, 2, comp(1465, 22));
            IF_SETPOSITION(0, 1, 0, 2, comp(1465, 21));
            IF_SETPOSITION(0, -2, 1, 2, comp(1465, 23));
        };
        unk11125(0);
        IF_SETHIDE(true, comp(1465, 7));
        IF_SETHIDE(false, comp(1465, 1));
        IF_SETPOSITION(0, 0, 2, 0, comp(1465, 0));
        IF_SETPOSITION(3, 3, 0, 0, comp(1919, 0));
        IF_SETPOSITION(0, 0, 0, 0, comp(1465, 12));
        IF_SETPOSITION(0, 0, 2, 0, comp(1465, 13));
        IF_SETPOSITION(44, 1, 0, 2, comp(1465, 26));
        int3 = IF_GETWIDTH(int2);
        if ((int3 >= 219)) {
            if ((varbitplayer_26696 == 1)) {
                IF_SETHIDE(false, comp(1465, 23));
            } else if ((varbitplayer_27169 == 1)) {
                if ((varbitplayer_26696 != 0)) {
                    IF_SETHIDE(false, comp(1465, 23));
                } else {
                    IF_SETHIDE(true, comp(1465, 23));
                };
            } else {
                IF_SETHIDE(true, comp(1465, 23));
            };
        } else if ((varbitplayer_27169 == 1)) {
            if ((varbitplayer_26696 != 0)) {
                IF_SETHIDE(false, comp(1465, 23));
            } else {
                IF_SETHIDE(true, comp(1465, 23));
            };
        } else {
            IF_SETHIDE(true, comp(1465, 23));
        };
        if ((varbitplayer_22875 == 1)) {
            int0 = 1;
        };
        IF_SETHIDE(int0, comp(1465, 3));
        IF_SETHIDE(int0, comp(1465, 4));
        IF_SETHIDE(int0, comp(1465, 5));
        IF_SETHIDE(int0, comp(1465, 6));
        script8705(1004);
    };
    return;
}