//
function script11454(): void {
    CC_DELETEALL(comp(1626, 9));  // death:protect_build
    CC_DELETEALL(comp(1626, 10));  // death:protect_click
    CC_DELETEALL(comp(1626, 55));  // death:keep_build
    CC_DELETEALL(comp(1626, 56));  // death:keep_click
    CC_DELETEALL(comp(1626, 2));  // death:lost_build
    CC_DELETEALL(comp(1626, 4));  // death:lost_click
    CC_DELETEALL(comp(1626, 95));  // death:lost_bob_build
    CC_DELETEALL(comp(1626, 96));  // death:lost_bob_click
    CC_DELETEALL(comp(1626, 62));  // death:autosave_build
    CC_DELETEALL(comp(1626, 63));  // death:autosave_click
    CC_DELETEALL(comp(1626, 77));  // death:overflow_build
    CC_DELETEALL(comp(1626, 79));  // death:overflow_click
    var int0 = 0;
    var int1 = 0;
    switch (varbitplayer_28118) {
        case 2: {
            int0 = varbitplayer_1675;
            int1 = script11480(530, 0, 30);
            break;
        }
        case 1: {
            break;
        }
        default: {
            return;
        }
    };
    var int2 = varbitplayer_28114;
    var int3 = varbitplayer_28115;
    var int4 = varbitplayer_28116;
    var int5 = varbitplayer_28119;
    var int6 = 0;
    var string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<br><col=", script10495(3)))}>`;
    var string1 = `Protected Items:${string0}These items are free to reclaim.</col>`;
    var string2 = `Saved Items:${string0}These items compose the base reclaim cost.</col>`;
    var string3 = `Lost Items:${string0}These items are lost upon death.</col>`;
    var string4 = `Beast of Burden Items:${string0}Your familiar will drop the items it is holding.</col>`;
    var string5 = `Always-Kept Items:${string0}These items will remain with you through death.</col>`;
    switch (int0) {
        case 1:
        case 3: {
            int3 = int2;
            int6 = 1;
            string1 = `Protected items:${string0}You save these items automatically.</col>`;
            string3 = `Lost items:${string0}In a dangerous area all of these items will be lost.</col>`;
            break;
        }
        case 2: {
            int2 = int5;
            int3 = int5;
            int4 = int5;
            int1 = 0;
            string1 = `Protected Items:${string0}In a safe area you will keep items upon death.</col>`;
            break;
        }
    };
    if ((varbitplayer_28118 == 1)) {
        if (((varbitplayer_52406 == 1) || (varbitplayer_52406 == 2))) {
            IF_SETSIZE(288, (5 + IF_GETHEIGHT(comp(1626, 43) /*death:buttons_layer*/)), 1, 1, comp(1626, 24) /*death:left_hand_display*/);
            IF_SETSIZE(30, (30 + IF_GETHEIGHT(comp(1626, 43) /*death:buttons_layer*/)), 1, 1, comp(1626, 52) /*death:cost_info*/);
            IF_SETHIDE(false, comp(1626, 43));  // death:buttons_layer
            if ((varbitplayer_52406 == 2)) {
                IF_SETHIDE(false, comp(1626, 44));  // death:overflow_destroy_single
                IF_SETHIDE(false, comp(1626, 45));  // death:overflow_confirm_single
            } else {
                IF_SETHIDE(true, comp(1626, 44));  // death:overflow_destroy_single
                IF_SETHIDE(true, comp(1626, 45));  // death:overflow_confirm_single
            };
        } else {
            IF_SETSIZE(288, 5, 1, 1, comp(1626, 24));  // death:left_hand_display
            IF_SETSIZE(30, 30, 1, 1, comp(1626, 52));  // death:cost_info
            IF_SETHIDE(true, comp(1626, 43));  // death:buttons_layer
        };
    } else if ((varbitplayer_52406 == 2)) {
        IF_SETSIZE(288, (5 + IF_GETHEIGHT(comp(1626, 43) /*death:buttons_layer*/)), 1, 1, comp(1626, 24) /*death:left_hand_display*/);
        IF_SETSIZE(30, (30 + IF_GETHEIGHT(comp(1626, 43) /*death:buttons_layer*/)), 1, 1, comp(1626, 52) /*death:cost_info*/);
        IF_SETHIDE(false, comp(1626, 43));  // death:buttons_layer
        if ((varbitplayer_52406 == 2)) {
            IF_SETHIDE(false, comp(1626, 44));  // death:overflow_destroy_single
            IF_SETHIDE(false, comp(1626, 45));  // death:overflow_confirm_single
        } else {
            IF_SETHIDE(true, comp(1626, 44));  // death:overflow_destroy_single
            IF_SETHIDE(true, comp(1626, 45));  // death:overflow_confirm_single
        };
    } else {
        IF_SETSIZE(288, 5, 1, 1, comp(1626, 24));  // death:left_hand_display
        IF_SETSIZE(30, 30, 1, 1, comp(1626, 52));  // death:cost_info
        IF_SETHIDE(true, comp(1626, 43));  // death:buttons_layer
    };
    script17088(int0);
    var long0 = 0n;
    var long1 = 0n;
    var long2 = 0n;
    var long3 = 0n;
    var long4 = 0n;
    var long5 = 0n;
    var int7 = int2;
    var int8 = (int3 - int2);
    var int9 = (int4 - int3);
    var int10 = (int5 - int4);
    define_array[33]((5 + 1));
    define_array[65536]((5 + 1));
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = -1;
    var int16 = 0;
    var int17 = -1 as obj;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = int9;
    if ((int6 == 1)) {
        while ((int22 < int7)) {
            int17 = INV_GETOBJ(676 as inv, int14);
            int18 = INV_GETNUM(676 as inv, int14);
            pop_array(int22, int17);
            pop_array[1](int22, int14);
            int13 = (int13 + 1);
            if (((int18 - int13) == 0)) {
                int13 = 0;
                int14 = (int14 + 1);
            };
            int22 = (int22 + 1);
        };
        if (((int13 > 0) && ((int18 - int13) > 0))) {
            int11 = int17;
            int12 = (int18 - int13);
            int15 = int14;
            int16 = 1;
        };
        int23 = (int9 + (int7 - int14));
    };
    var int24 = 0;
    var int25 = script17093();
    if ((varbitplayer_52406 == 0)) {
        IF_SETHIDE(false, comp(1626, 41));  // death:info_panel
        IF_SETHIDE(true, comp(1626, 30));  // death:death_status
    } else if ((varbitplayer_52406 == 2)) {
        IF_SETHIDE(true, comp(1626, 41));  // death:info_panel
        IF_SETHIDE(false, comp(1626, 30));  // death:death_status
        int24 = script17090(106561568, -1, -1, int24, int25, (INV_SIZE(930 as inv) - INV_FREESPACE(930 as inv)), "");
        IF_SETHIDE(true, comp(1626, 33));  // death:protected_container
        IF_SETHIDE(true, comp(1626, 34));  // death:keep_container
        IF_SETHIDE(true, comp(1626, 35));  // death:lost_container
        IF_SETHIDE(true, comp(1626, 36));  // death:lost_bob_container
        IF_SETHIDE(true, comp(1626, 37));  // death:autosave_container
    } else {
        IF_SETHIDE(true, comp(1626, 41));  // death:info_panel
        IF_SETHIDE(false, comp(1626, 30));  // death:death_status
        int24 = script17090(106561569, 106561543, 106561544, int24, int25, int7, string1);
        int24 = script17090(106561570, 106561589, 106561590, int24, int25, int8, string2);
        int24 = script17090(106561571, 106561536, 106561537, int24, int25, int23, string3);
        int24 = script17090(106561572, 106561629, 106561630, int24, int25, int1, string4);
        int24 = script17090(106561573, 106561596, 106561597, int24, int25, int10, string5);
        IF_SETHIDE(true, comp(1626, 32));  // death:overflow_container
    };
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var int30 = INV_SIZE(676 as inv);
    var int31 = 0;
    var int32 = 0;
    while ((int32 < int2)) {
        if ((int6 == 1)) {
            int17 = push_array(int32);
            int31 = push_array[1](int32);
            int18 = 1;
        } else {
            int17 = INV_GETOBJ(676 as inv, int32);
            int18 = INV_GETNUM(676 as inv, int32);
            int31 = int32;
        };
        long0 = script17375(long0, script11466(int17, script11472(int31), int18, 2));
        long1 = script17375(long1, script11466(int17, script11472(int31), int18, 1));
        [int26, int27] = script11457(106561545, 106561546, int17, int18, int26, int27, int31, int32, int15, int0);
        int32 = (int32 + 1);
    };
    int26 = 0;
    int27 = 0;
    while ((int32 < int3)) {
        int17 = INV_GETOBJ(676 as inv, int32);
        int18 = INV_GETNUM(676 as inv, int32);
        [long2, long4] = script17092(long2, long4, int17, script11472(int32), int18, 2);
        long3 = script17375(long3, script11466(int17, script11472(int32), int18, 1));
        [int26, int27] = script11457(106561591, 106561592, int17, int18, int26, int27, int32, (int32 - int2), int15, int0);
        int32 = (int32 + 1);
    };
    int26 = 0;
    int27 = 0;
    if (((int6 == 1) && (int14 < int2))) {
        int32 = (int32 - int14);
    };
    if ((int15 != -1)) {
        long5 = script17375(long5, script11466(int11, script11472(int15), int12, 1));
        [int26, int27] = script11457(106561538, 106561540, int11, int12, int26, int27, int30, int30, int15, int0);
    };
    while ((int32 < int4)) {
        int17 = INV_GETOBJ(676 as inv, int32);
        int18 = INV_GETNUM(676 as inv, int32);
        long5 = script17375(long5, script11466(int17, script11472(int32), int18, 1));
        [int26, int27] = script11457(106561538, 106561540, int17, int18, int26, int27, int32, ((int32 - int3) + int14), int15, int0);
        int32 = (int32 + 1);
    };
    if ((int1 > 0)) {
        int26 = 0;
        int27 = 0;
        while ((int28 < 30)) {
            int17 = INV_GETOBJ(530 as inv, int28);
            int18 = INV_GETNUM(530 as inv, int28);
            if ((int17 != -1 as obj)) {
                [int26, int27] = script11457(106561631, 106561632, int17, int18, int26, int27, int28, int28, int15, int0);
                int29 = (int29 + 1);
            };
            int28 = (int28 + 1);
        };
    };
    int26 = 0;
    int27 = 0;
    while ((int32 < 47)) {
        int17 = INV_GETOBJ(676 as inv, int32);
        int18 = INV_GETNUM(676 as inv, int32);
        [int26, int27] = script11457(106561598, 106561599, int17, int18, int26, int27, int32, (int32 - int4), int15, int0);
        int32 = (int32 + 1);
    };
    int26 = 0;
    int27 = 0;
    int32 = 0;
    var long6 = 0n;
    while ((int32 < 50)) {
        int17 = INV_GETOBJ(930 as inv, int32);
        int18 = INV_GETNUM(930 as inv, int32);
        [int26, int27] = script11457(106561613, 106561615, int17, int18, int26, int27, int32, int32, 0, 0);
        long6 = script17375(long6, script11466(int17, script11472(int32), int18, 7));
        int32 = (int32 + 1);
    };
    var long7 = long2;
    var long8 = script12798();
    long7 = SUB_LONG(long7, long4);
    var long9 = SCALE_LONG(long7, 100n, long8);
    long7 = SUB_LONG(long7, long9);
    var long10 = long7;
    var string6 = "...";
    if ((varbitplayer_28117 == 0)) {
        if ((varbitplayer_52406 == 2)) {
            if ((INV_FREESPACE(930 as inv) == INV_SIZE(930 as inv))) {
                IF_SETENABLED(false, comp(1626, 47));  // death:confirm_button
            } else {
                IF_SETENABLED(true, comp(1626, 47));  // death:confirm_button
            };
            string6 = script17372(long6, 9, 0);
        } else {
            if ((INV_FREESPACE(676 as inv) == INV_SIZE(676 as inv))) {
                IF_SETENABLED(false, comp(1626, 47));  // death:confirm_button
            } else {
                IF_SETENABLED(true, comp(1626, 47));  // death:confirm_button
            };
            if ((varbitplayer_1942 == 3)) {
                string6 = "Free";
                long7 = SUB_LONG(long7, long10);
            } else {
                string6 = script17372(long7, 9, 0);
            };
        };
    } else {
        IF_SETENABLED(false, comp(1626, 47));  // death:confirm_button
    };
    IF_SETTEXT(string6, comp(1626, 51));  // death:reclaim_cost
    var long11 = script17375(script17375(long3, long5), varclient_4876);
    var long12 = script17375(long1, long11);
    script17096();
    script17094(int0, long12, long11, long2, long4, long9, long10, long7);
    IF_SETTEXT("Confirm", comp(1626, 71));  // death:popup_confirm
    IF_SETTEXT("Yes", comp(1626, 72));  // death:popup_yes
    IF_SETTEXT("No", comp(1626, 73));  // death:popup_no
    if ((int24 == 0)) {
        if ((varbitplayer_28117 == 0)) {
            IF_SETHIDE(false, comp(1626, 38));  // death:no_items
        } else {
            IF_SETHIDE(true, comp(1626, 38));  // death:no_items
        };
    } else {
        IF_SETHIDE(true, comp(1626, 38));  // death:no_items
    };
    IF_SETSCROLLSIZE(0, script17380(int24, IF_GETHEIGHT(comp(1626, 31)), int24, 0), comp(1626, 31));  // death:death_status_scrolling
    script7791(106561576, 106561567);
    return;
}