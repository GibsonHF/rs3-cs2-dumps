//
function script16400(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int4 == comp(-1, 65535))) {
        IF_SETONTIMER(callback(), comp(955, 5));  // uitutorial:timer_layer
        return;
    };
    if ((((int4 == comp(1431, 12)) && (CC_FIND(int4, int5) == 1)) && (CC_GETHIDE() == true))) {  // toplevel_v2_ribbon:window_click
        var int4 = comp(1431, 10);  // toplevel_v2_ribbon:mode_button
        var int5 = -1;
    };
    IF_SETHIDE(true, comp(955, 6));  // uitutorial:main_container
    IF_SETHIDE(true, comp(955, 21));  // uitutorial:arrow_above
    IF_SETHIDE(true, comp(955, 23));  // uitutorial:arrow_below
    IF_SETHIDE(true, comp(955, 27));  // uitutorial:arrow_left
    IF_SETHIDE(true, comp(955, 25));  // uitutorial:arrow_right
    if ((varplayer_8745 == 4338 as dbrow)) {
        if ((((IF_HASSUBMODAL(script8072(), 1316) == 1) || (IF_GETHIDE(comp(1477, 744)) == false)) || (IF_HASSUBMODAL(script8072(), 847) == 1))) {  // toplevel_v2:big_window
            if ((script6431() == 1)) {
                IF_SETHIDE(true, comp(673, 0));  // tut5_spotlight:content_layer
                return;
            };
        };
    };
    IF_SETHIDE(false, comp(673, 0));  // tut5_spotlight:content_layer
    if ((script3725(int4) == 1)) {
        IF_SETHIDE(true, comp(673, 0));  // tut5_spotlight:content_layer
        return;
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int6, int7, int8, int9] = script14244();
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    if ((int5 == -1)) {
        if (((IF_FIND(int4) == 1) || (CC_FIND(int4, int5) == 1))) {
            if (((script6353() == 0) || (script6375() == 0))) {
                IF_SETHIDE(false, comp(955, 6));  // uitutorial:main_container
                IF_SETPOSITION(0, (int7 + 33), 1, 0, comp(955, 8));  // uitutorial:box_container
                return;
            };
            [int10, int11, int13, int12] = script13137();
        } else {
            IF_SETHIDE(false, comp(955, 6));  // uitutorial:main_container
            IF_SETPOSITION(0, (int7 + 33), 1, 0, comp(955, 8));  // uitutorial:box_container
            return;
        };
    } else if ((CC_FIND(int4, int5) == 1)) {
        if (((script6353() == 0) || (script6375() == 0))) {
            IF_SETHIDE(false, comp(955, 6));  // uitutorial:main_container
            IF_SETPOSITION(0, (int7 + 33), 1, 0, comp(955, 8));  // uitutorial:box_container
            return;
        };
        [int10, int11, int13, int12] = script13137();
    } else {
        IF_SETHIDE(false, comp(955, 6));  // uitutorial:main_container
        IF_SETPOSITION(0, (int7 + 33), 1, 0, comp(955, 8));  // uitutorial:box_container
        return;
    };
    IF_SETHIDE(false, comp(955, 6));  // uitutorial:main_container
    var int14 = comp(-1, 65535);
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    if (((varclient_7047 != 0) && (int2 == 0))) {
        var int2 = MAX(0, varclient_7047);
    };
    while ((int21 == 0)) {
        if ((int22 <= 4)) {
            if (((int21 == 0) || (int2 == 1))) {
                int15 = int10;
                int16 = int11;
                if ((((int16 - int1) - 73) >= int7)) {
                    int14 = comp(955, 23);  // uitutorial:arrow_below
                    int20 = ((int16 - int1) - 73);
                    int18 = (int16 - 85);
                    int17 = ((int10 + (int13 / 2)) - (IF_GETWIDTH(int14) / 2));
                    int19 = ((int15 + (int13 / 2)) - (int0 / 2));
                    int21 = 1;
                };
            };
            if (((int21 == 0) || (int2 == 2))) {
                int15 = int10;
                int16 = (int11 + int12);
                if ((((int16 + int1) + 63) <= int9)) {
                    int14 = comp(955, 21);  // uitutorial:arrow_above
                    int20 = (int16 + 63);
                    int18 = int16;
                    int17 = ((int10 + (int13 / 2)) - (IF_GETWIDTH(int14) / 2));
                    int19 = ((int15 + (int13 / 2)) - (int0 / 2));
                    int21 = 1;
                };
            };
            if ((((int21 == 0) || (int2 == 4)) || (int2 == 3))) {
                if ((int2 == 4)) {
                    if (((((int15 + int13) + int0) + 85) <= int8)) {
                        int15 = int10;
                        int16 = int11;
                        int14 = comp(955, 25);  // uitutorial:arrow_right
                        int19 = ((int15 + int13) + 85);
                        int20 = ((int16 + (int12 / 2)) - (int1 / 2));
                        int17 = (int15 + int13);
                        int18 = ((int11 + (int12 / 2)) - (IF_GETHEIGHT(int14) / 2));
                        int21 = 1;
                    } else {
                        int2 = 3;
                    };
                } else {
                    int2 = 3;
                };
                if ((int2 == 3)) {
                    if ((((int15 - int0) - 85) >= int6)) {
                        int15 = int10;
                        int16 = int11;
                        int14 = comp(955, 27);  // uitutorial:arrow_left
                        int19 = ((int15 - int0) - 85);
                        int20 = ((int16 + (int12 / 2)) - (int1 / 2));
                        int17 = (int15 - 85);
                        int18 = ((int11 + (int12 / 2)) - (IF_GETHEIGHT(int14) / 2));
                        int21 = 1;
                    } else {
                        int2 = 4;
                    };
                } else {
                    int2 = 4;
                };
            };
            int22 = (int22 + 1);
        };
        if ((int21 == 0)) {
            script8056(int4, int5, 1);
            script16401(int4, int5);
            varclient_7047 = 0;
            return;
        };
        if ((int3 == 0)) {
            IF_SETHIDE(false, int14);
            script16405(int14);
        };
        script16406(int14);
        IF_SETPOSITION(MIN(MAX(int6, int19), (int8 - int0)), MIN(MAX(int7, int20), (int9 - int1)), 0, 0, comp(955, 8));  // uitutorial:box_container
        if (((int14 == comp(955, 27) /*uitutorial:arrow_left*/) || (int14 == comp(955, 25) /*uitutorial:arrow_right*/))) {
            IF_SETPOSITION(int17, MIN(MAX(int7, int18), (int9 - (IF_GETWIDTH(int14) / 2))), 0, 0, int14);
        } else {
            IF_SETPOSITION(MIN(MAX(int6, int17), (int8 - (IF_GETWIDTH(int14) / 2))), int18, 0, 0, int14);
        };
        return;
    };
    if ((int21 == 0)) {
        script8056(int4, int5, 1);
        script16401(int4, int5);
        varclient_7047 = 0;
        return;
    };
    if ((int3 == 0)) {
        IF_SETHIDE(false, int14);
        script16405(int14);
    };
    script16406(int14);
    IF_SETPOSITION(MIN(MAX(int6, int19), (int8 - int0)), MIN(MAX(int7, int20), (int9 - int1)), 0, 0, comp(955, 8));  // uitutorial:box_container
    if (((int14 == comp(955, 27) /*uitutorial:arrow_left*/) || (int14 == comp(955, 25) /*uitutorial:arrow_right*/))) {
        IF_SETPOSITION(int17, MIN(MAX(int7, int18), (int9 - (IF_GETWIDTH(int14) / 2))), 0, 0, int14);
    } else {
        IF_SETPOSITION(MIN(MAX(int6, int17), (int8 - (IF_GETWIDTH(int14) / 2))), int18, 0, 0, int14);
    };
    return;
}