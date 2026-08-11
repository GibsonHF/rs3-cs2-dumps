//
function script13321(int0: number): void {
    var int1 = 0;
    var int2 = (CLIENTCLOCK() - int0);
    if ((int2 < 50)) {
        int2 = SCALE(255, 50, int2);
        IF_SETTRANS(int2, comp(1853, 3));  // cheevo_popup:flash_rect
    } else if ((int2 >= 50)) {
        if ((int2 < 150)) {
            IF_SETHIDE(true, comp(1853, 3));  // cheevo_popup:flash_rect
        } else if (((int2 >= 150) && (int2 < 200))) {
            int2 = (255 - SCALE(255, 50, (200 - int2)));
            while ((int1 < IF_GETNEXTSUBID(comp(1853, 4)))) {  // cheevo_popup:cheevo_popup_background
                if ((CC_FIND(comp(1853, 4), int1) == 1)) {  // cheevo_popup:cheevo_popup_background
                    CC_SETTRANS(int2);
                };
                int1 = (int1 + 1);
            };
            int1 = 0;
            while ((int1 < IF_GETNEXTSUBID(comp(1853, 10)))) {  // cheevo_popup:cheevo_popup_border
                if ((CC_FIND(comp(1853, 10), int1) == 1)) {  // cheevo_popup:cheevo_popup_border
                    CC_SETTRANS(int2);
                };
                int1 = (int1 + 1);
            };
            IF_SETTRANS(int2, comp(1853, 7));  // cheevo_popup:cheevo_heading
            IF_SETTRANS(int2, comp(1853, 6));  // cheevo_popup:cheevo_icon
            IF_SETTRANS(int2, comp(1853, 8));  // cheevo_popup:cheevo_title
            IF_SETTRANS(int2, comp(1853, 9));  // cheevo_popup:cheevo_details
        };
    } else if (((int2 >= 150) && (int2 < 200))) {
        int2 = (255 - SCALE(255, 50, (200 - int2)));
        while ((int1 < IF_GETNEXTSUBID(comp(1853, 4)))) {  // cheevo_popup:cheevo_popup_background
            if ((CC_FIND(comp(1853, 4), int1) == 1)) {  // cheevo_popup:cheevo_popup_background
                CC_SETTRANS(int2);
            };
            int1 = (int1 + 1);
        };
        int1 = 0;
        while ((int1 < IF_GETNEXTSUBID(comp(1853, 10)))) {  // cheevo_popup:cheevo_popup_border
            if ((CC_FIND(comp(1853, 10), int1) == 1)) {  // cheevo_popup:cheevo_popup_border
                CC_SETTRANS(int2);
            };
            int1 = (int1 + 1);
        };
        IF_SETTRANS(int2, comp(1853, 7));  // cheevo_popup:cheevo_heading
        IF_SETTRANS(int2, comp(1853, 6));  // cheevo_popup:cheevo_icon
        IF_SETTRANS(int2, comp(1853, 8));  // cheevo_popup:cheevo_title
        IF_SETTRANS(int2, comp(1853, 9));  // cheevo_popup:cheevo_details
    };
    return;
}