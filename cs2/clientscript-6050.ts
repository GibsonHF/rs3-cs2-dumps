//
function script6050(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 425;
    var int5 = SCALE(varplayer_679, 1000, 100);
    var int6 = SCALE(IF_GETWIDTH(int0), int4, 100);
    var int7 = SCALE(IF_GETWIDTH(int1), int4, 100);
    var int8 = (int6 + int7);
    var int9 = 1;
    var int10 = 0;
    var int11 = comp(640, 13);  // combatv2_actionbar:fullscreen_threshold_highlight
    var int12 = comp(640, 15);  // combatv2_actionbar:fullscreen_ultimate_highlight_left
    var int13 = comp(640, 14);  // combatv2_actionbar:fullscreen_ultimate_highlight_right
    var int14 = comp(640, 7);  // combatv2_actionbar:fullscreen_adrenaline_bar_red
    var int15 = comp(640, 11);  // combatv2_actionbar:fullscreen_adrenaline_bar_graphic
    if ((IF_GETLAYER(int0) == comp(1616, 1))) {  // combatv2_adrenaline:fullscreen_border_layer
        int11 = comp(1616, 11);  // combatv2_adrenaline:fullscreen_threshold_highlight
        int12 = comp(1616, 13);  // combatv2_adrenaline:fullscreen_ultimate_highlight_left
        int13 = comp(1616, 12);  // combatv2_adrenaline:fullscreen_ultimate_highlight_right
        int14 = comp(1616, 5);  // combatv2_adrenaline:fullscreen_adrenaline_bar_red
        int15 = comp(1616, 0);  // combatv2_adrenaline:fullscreen_adrenaline_bar_graphic
    };
    if ((varplayer_679 >= 500)) {
        if ((int8 >= 50)) {
            IF_SETHIDE(false, int11);
        } else {
            IF_SETHIDE(true, int11);
        };
    } else {
        IF_SETHIDE(true, int11);
    };
    if ((varplayer_679 >= 1000)) {
        if ((int8 >= 100)) {
            IF_SETHIDE(false, int12);
            IF_SETHIDE(false, int13);
            IF_SETGRAPHIC(14515 as graphic, int15);
        } else if ((varplayer_679 >= 500)) {
            if ((int8 >= 50)) {
                IF_SETHIDE(true, int12);
                IF_SETHIDE(true, int13);
                IF_SETGRAPHIC(14514 as graphic, int15);
            } else {
                IF_SETHIDE(true, int12);
                IF_SETHIDE(true, int13);
                IF_SETGRAPHIC(14513 as graphic, int15);
            };
        } else {
            IF_SETHIDE(true, int12);
            IF_SETHIDE(true, int13);
            IF_SETGRAPHIC(14513 as graphic, int15);
        };
    } else if ((varplayer_679 >= 500)) {
        if ((int8 >= 50)) {
            IF_SETHIDE(true, int12);
            IF_SETHIDE(true, int13);
            IF_SETGRAPHIC(14514 as graphic, int15);
        } else {
            IF_SETHIDE(true, int12);
            IF_SETHIDE(true, int13);
            IF_SETGRAPHIC(14513 as graphic, int15);
        };
    } else {
        IF_SETHIDE(true, int12);
        IF_SETHIDE(true, int13);
        IF_SETGRAPHIC(14513 as graphic, int15);
    };
    if ((int8 != int5)) {
        if ((int8 < int5)) {
            if (((int2 != 1) && (int2 != int3))) {
                IF_SETONTIMER(callback(), int0);
                IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int14), 0, 0, int14);
                return;
            };
            IF_SETSIZE(MIN((IF_GETWIDTH(int0) + int9), int4), IF_GETHEIGHT(int0), 0, 0, int0);
            if (((IF_GETWIDTH(int0) == int4) && (int7 < MAX(0, (int5 - 100))))) {
                IF_SETSIZE(MIN((IF_GETWIDTH(int1) + int9), int4), IF_GETHEIGHT(int1), 0, 0, int1);
            };
            var int3 = int2;
            var int2 = 1;
        } else {
            if (((int2 != 3) && (int2 != int3))) {
                IF_SETONTIMER(callback(), int0);
                IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int14), 0, 0, int14);
                return;
            };
            int9 = 10;
            if ((int7 > MAX((int5 - 100), 0))) {
                IF_SETSIZE(MAX((IF_GETWIDTH(int1) - int9), 1), IF_GETHEIGHT(int1), 0, 0, int1);
            } else {
                IF_SETSIZE(MAX((IF_GETWIDTH(int0) - int9), 1), IF_GETHEIGHT(int0), 0, 0, int0);
            };
            int3 = int2;
            int2 = 3;
        };
        int6 = SCALE(IF_GETWIDTH(int0), int4, 100);
        int7 = SCALE(IF_GETWIDTH(int1), int4, 100);
        int8 = (int6 + int7);
        if ((varplayer_679 >= 500)) {
            if ((int8 >= 50)) {
                IF_SETHIDE(false, int11);
            } else {
                IF_SETHIDE(true, int11);
            };
        } else {
            IF_SETHIDE(true, int11);
        };
        if ((varplayer_679 >= 1000)) {
            if ((int8 >= 100)) {
                IF_SETHIDE(false, int12);
                IF_SETHIDE(false, int13);
                IF_SETGRAPHIC(14515 as graphic, int15);
            } else if ((varplayer_679 >= 500)) {
                if ((int8 >= 50)) {
                    IF_SETHIDE(true, int12);
                    IF_SETHIDE(true, int13);
                    IF_SETGRAPHIC(14514 as graphic, int15);
                } else {
                    IF_SETHIDE(true, int12);
                    IF_SETHIDE(true, int13);
                    IF_SETGRAPHIC(14513 as graphic, int15);
                };
            } else {
                IF_SETHIDE(true, int12);
                IF_SETHIDE(true, int13);
                IF_SETGRAPHIC(14513 as graphic, int15);
            };
        } else if ((varplayer_679 >= 500)) {
            if ((int8 >= 50)) {
                IF_SETHIDE(true, int12);
                IF_SETHIDE(true, int13);
                IF_SETGRAPHIC(14514 as graphic, int15);
            } else {
                IF_SETHIDE(true, int12);
                IF_SETHIDE(true, int13);
                IF_SETGRAPHIC(14513 as graphic, int15);
            };
        } else {
            IF_SETHIDE(true, int12);
            IF_SETHIDE(true, int13);
            IF_SETGRAPHIC(14513 as graphic, int15);
        };
        if ((int8 != int5)) {
            IF_SETONTIMER(callback(script6050, int0, int1, int2, int3), int0);
            return;
        };
    };
    if ((varplayer_679 < 1)) {
        IF_SETSIZE(1, IF_GETHEIGHT(int0), 0, 0, int0);
    };
    IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int14), 0, 0, int14);
    IF_SETONTIMER(callback(), int0);
    return;
}