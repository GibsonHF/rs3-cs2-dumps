//
function script14709(int0: number): void {
    var int1 = -1;
    var int2 = (CLIENTCLOCK() - int0);
    if ((int2 < 50)) {
        IF_SETTRANS(SCALE(255, 50, int2), comp(512, 12));  // info_popup:flash
    } else if ((int2 >= 50)) {
        if ((int2 < 150)) {
            IF_SETHIDE(true, comp(512, 12));  // info_popup:flash
        } else if (((int2 >= 150) && (int2 < 200))) {
            int2 = (255 - SCALE(255, 50, (200 - int2)));
            int1 = (int1 + 1);
            while ((int1 < IF_GETNEXTSUBID(comp(512, 1)))) {  // info_popup:bespoke_window_background
                if ((CC_FIND(comp(512, 1), int1) == 1)) {  // info_popup:bespoke_window_background
                    CC_SETTRANS(int2);
                };
            };
            int1 = -1;
            int1 = (int1 + 1);
            while ((int1 < IF_GETNEXTSUBID(comp(512, 9)))) {  // info_popup:bespoke_window_border
                if ((CC_FIND(comp(512, 9), int1) == 1)) {  // info_popup:bespoke_window_border
                    CC_SETTRANS(int2);
                };
            };
            IF_SETTRANS(int2, comp(512, 7));  // info_popup:graphic
            IF_SETTRANS(int2, comp(512, 8));  // info_popup:obj
            IF_SETTRANS(int2, comp(512, 4));  // info_popup:title
            IF_SETTRANS(int2, comp(512, 5));  // info_popup:subtitle
            IF_SETTRANS(int2, comp(512, 11));  // info_popup:description
        };
    } else if (((int2 >= 150) && (int2 < 200))) {
        int2 = (255 - SCALE(255, 50, (200 - int2)));
        int1 = (int1 + 1);
        while ((int1 < IF_GETNEXTSUBID(comp(512, 1)))) {  // info_popup:bespoke_window_background
            if ((CC_FIND(comp(512, 1), int1) == 1)) {  // info_popup:bespoke_window_background
                CC_SETTRANS(int2);
            };
        };
        int1 = -1;
        int1 = (int1 + 1);
        while ((int1 < IF_GETNEXTSUBID(comp(512, 9)))) {  // info_popup:bespoke_window_border
            if ((CC_FIND(comp(512, 9), int1) == 1)) {  // info_popup:bespoke_window_border
                CC_SETTRANS(int2);
            };
        };
        IF_SETTRANS(int2, comp(512, 7));  // info_popup:graphic
        IF_SETTRANS(int2, comp(512, 8));  // info_popup:obj
        IF_SETTRANS(int2, comp(512, 4));  // info_popup:title
        IF_SETTRANS(int2, comp(512, 5));  // info_popup:subtitle
        IF_SETTRANS(int2, comp(512, 11));  // info_popup:description
    };
    return;
}