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
    IF_SETPOSITION(int0, int2, 0, 0, comp(517, 0));  // bank:all
    IF_SETSIZE((int0 + int1), (int2 + int3), 1, 1, comp(517, 0));  // bank:all
    var int4 = 213;
    var int5 = 0;
    var int6 = 0;
    var int7 = script6431();
    if ((int7 == 1)) {
        IF_SETPOSITION(0, 0, 0, 2, comp(517, 155));  // bank:bank_display_panel
        IF_SETPOSITION(0, 0, 1, 0, comp(517, 229));  // bank:bottom_panel
        IF_SETPOSITION(0, 0, 0, 2, comp(517, 4));  // bank:inventory_panel
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 66));  // bank:bank_button_panel
        IF_SETPOSITION(70, 12, 2, 0, comp(517, 312));  // bank:help_button_layer
        int4 = 253;
        int5 = 105;
        int6 = 126;
    } else {
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 155));  // bank:bank_display_panel
        IF_SETPOSITION(0, 0, 1, 2, comp(517, 229));  // bank:bottom_panel
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 4));  // bank:inventory_panel
        IF_SETPOSITION(0, 0, 0, 2, comp(517, 66));  // bank:bank_button_panel
        IF_SETPOSITION(50, 15, 2, 0, comp(517, 312));  // bank:help_button_layer
    };
    var int8 = IF_GETHEIGHT(comp(517, 2));  // bank:content
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((varbitplayer_39433 == 1)) {
        IF_SETSIZE(int4, 499, 0, 0, comp(517, 3));  // bank:right_panel
        IF_SETSIZE((int4 + 4), 0, 1, 1, comp(517, 154));  // bank:main_panel
        IF_SETHIDE(false, comp(517, 260));  // bank:preset_full_layer
        IF_SETHIDE(false, comp(517, 70));  // bank:button_panel_inner_preset
        IF_SETHIDE(true, comp(517, 87));  // bank:button_panel_inner
        IF_SETHIDE(true, comp(517, 157));  // bank:bank_items_layer
        IF_SETHIDE(true, comp(517, 229));  // bank:bottom_panel
        [int9, int10, int11] = [1, 1, 1];
    } else {
        IF_SETSIZE(int4, 0, 0, 1, comp(517, 3));  // bank:right_panel
        IF_SETSIZE((int4 + 4), 0, 1, 1, comp(517, 154));  // bank:main_panel
        IF_SETHIDE(true, comp(517, 260));  // bank:preset_full_layer
        IF_SETHIDE(true, comp(517, 70));  // bank:button_panel_inner_preset
        IF_SETHIDE(false, comp(517, 87));  // bank:button_panel_inner
        IF_SETHIDE(false, comp(517, 157));  // bank:bank_items_layer
        IF_SETHIDE(false, comp(517, 229));  // bank:bottom_panel
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
        IF_SETHIDE(true, comp(517, 151));  // bank:button_panel_tabs
    } else {
        IF_SETHIDE(false, comp(517, 151));  // bank:button_panel_tabs
    };
    if ((int9 == 1)) {
        IF_SETSIZE(0, 138, 1, 0, comp(517, 66));  // bank:bank_button_panel
        IF_SETPOSITION(0, 24, 0, 0, comp(517, 87));  // bank:button_panel_inner
        IF_SETPOSITION(0, 0, 2, 0, comp(517, 153));  // bank:side_tab_presets
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 116));  // bank:share_preset_quick_buttons
        IF_SETSIZE(0, 24, 1, 1, comp(517, 87));  // bank:button_panel_inner
        IF_SETHIDE(true, comp(517, 89));  // bank:button_panel_bg_untabbed
        if ((varbitplayer_45191 == 0)) {
            IF_SETHIDE(false, comp(517, 91));  // bank:default_options_container
            IF_SETHIDE(true, comp(517, 116));  // bank:share_preset_quick_buttons
        } else {
            IF_SETHIDE(true, comp(517, 91));  // bank:default_options_container
            IF_SETHIDE(false, comp(517, 116));  // bank:share_preset_quick_buttons
        };
    } else {
        IF_SETSIZE(0, 239, 1, 0, comp(517, 66));  // bank:bank_button_panel
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 87));  // bank:button_panel_inner
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 153));  // bank:side_tab_presets
        IF_SETPOSITION(0, 24, 0, 0, comp(517, 116));  // bank:share_preset_quick_buttons
        IF_SETSIZE(0, 0, 1, 1, comp(517, 87));  // bank:button_panel_inner
        IF_SETHIDE(false, comp(517, 89));  // bank:button_panel_bg_untabbed
        IF_SETHIDE(false, comp(517, 91));  // bank:default_options_container
        IF_SETHIDE(false, comp(517, 116));  // bank:share_preset_quick_buttons
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
        if ((int7 == 1)) {
            if ((int8 <= 650)) {
                IF_SETSIZE(0, (138 + 5), 1, 1, comp(517, 4));  // bank:inventory_panel
                IF_SETSIZE(0, 30, 1, 1, comp(517, 11));  // bank:inventory_container
                IF_SETSIZE(0, 70, 1, 1, comp(517, 22));  // bank:worn_container
                IF_SETPOSITION(0, 0, 0, 1, comp(517, 22));  // bank:worn_container
                IF_SETSIZE(0, 35, 1, 1, comp(517, 31));  // bank:bob_container
            } else {
                IF_SETSIZE(0, (358 + int5), 1, 0, comp(517, 4));  // bank:inventory_panel
                IF_SETSIZE(0, (291 + int5), 1, 0, comp(517, 11));  // bank:inventory_container
                IF_SETSIZE(0, 291, 1, 0, comp(517, 22));  // bank:worn_container
                IF_SETPOSITION(0, 35, 0, 2, comp(517, 22));  // bank:worn_container
                IF_SETSIZE(0, 295, 1, 0, comp(517, 31));  // bank:bob_container
            };
        } else {
            IF_SETSIZE(0, (358 + int5), 1, 0, comp(517, 4));  // bank:inventory_panel
            IF_SETSIZE(0, (291 + int5), 1, 0, comp(517, 11));  // bank:inventory_container
            IF_SETSIZE(0, 291, 1, 0, comp(517, 22));  // bank:worn_container
            IF_SETPOSITION(0, 35, 0, 2, comp(517, 22));  // bank:worn_container
            IF_SETSIZE(0, 295, 1, 0, comp(517, 31));  // bank:bob_container
        };
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 31));  // bank:bob_container
        IF_SETHIDE(true, comp(517, 9));  // bank:active_inv_highlight
    } else {
        IF_SETSIZE(0, (291 + int5), 1, 0, comp(517, 11));  // bank:inventory_container
        IF_SETSIZE(0, 240, 1, 0, comp(517, 22));  // bank:worn_container
        IF_SETHIDE(false, comp(517, 9));  // bank:active_inv_highlight
        int13 = false;
        if ((int11 == 1)) {
            IF_SETSIZE(0, (608 + int5), 1, 0, comp(517, 4));  // bank:inventory_panel
            if ((varbitplayer_45139 == 2)) {
                int12 = false;
                IF_SETPOSITION(0, 0, 1, 0, comp(517, 22));  // bank:worn_container
                IF_SETPOSITION(0, 35, 0, 2, comp(517, 11));  // bank:inventory_container
                IF_SETPOSITION(0, 0, 0, 0, comp(517, 31));  // bank:bob_container
            } else {
                IF_SETPOSITION(0, 0, 1, 0, comp(517, 11));  // bank:inventory_container
                IF_SETPOSITION(0, 35, 0, 2, comp(517, 22));  // bank:worn_container
                IF_SETPOSITION(0, 0, 0, 0, comp(517, 31));  // bank:bob_container
            };
        } else {
            IF_SETSIZE(0, ((909 + int5) + int6), 1, 0, comp(517, 4));  // bank:inventory_panel
            IF_SETPOSITION(0, -25, 0, 1, comp(517, 22));  // bank:worn_container
            IF_SETSIZE(0, (295 + int6), 1, 0, comp(517, 31));  // bank:bob_container
            IF_SETPOSITION(0, 35, 0, 2, comp(517, 31));  // bank:bob_container
            int12 = false;
            int14 = false;
        };
        switch (varbitplayer_45139) {
            case 0: {
                int15 = comp(517, 12);  // bank:inventory_inv_contents
                int16 = comp(517, 11);  // bank:inventory_container
                break;
            }
            case 2: {
                int15 = comp(517, 23);  // bank:inventory_worn_contents
                int16 = comp(517, 22);  // bank:worn_container
                break;
            }
            case 1: {
                int15 = comp(517, 32);  // bank:inventory_bob_contents
                int16 = comp(517, 31);  // bank:bob_container
                break;
            }
        };
        if ((int15 != comp(-1, 65535))) {
            IF_SETSIZE(IF_GETWIDTH(int15), IF_GETHEIGHT(int15), 0, 0, comp(517, 9));  // bank:active_inv_highlight
            IF_SETPOSITION(IF_GETX(int16), IF_GETY(int16), 0, 0, comp(517, 9));  // bank:active_inv_highlight
        };
    };
    IF_SETHIDE(int12, comp(517, 11));  // bank:inventory_container
    IF_SETHIDE(int13, comp(517, 22));  // bank:worn_container
    IF_SETHIDE(int14, comp(517, 31));  // bank:bob_container
    script10241();
    if (((varbitplayer_45140 != 0) || (varbitplayer_39433 == 1))) {
        IF_SETHIDE(true, comp(517, 158));  // bank:tabs
        IF_SETPOSITION(0, 0, 1, 2, comp(517, 157));  // bank:bank_items_layer
    } else {
        IF_SETHIDE(false, comp(517, 158));  // bank:tabs
        IF_SETPOSITION(0, 0, 2, 2, comp(517, 157));  // bank:bank_items_layer
    };
    if ((script5767() == 1)) {
        IF_SETHIDE(true, comp(517, 66));  // bank:bank_button_panel
        IF_SETHIDE(true, comp(517, 312));  // bank:help_button_layer
    } else {
        IF_SETHIDE(false, comp(517, 66));  // bank:bank_button_panel
        IF_SETHIDE(false, comp(517, 312));  // bank:help_button_layer
    };
    return;
}