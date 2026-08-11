//
function script11407(int0: number): void {
    IF_SETHIDE(false, comp(1477, 703));  // toplevel_v2:loot_inventory_window
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1622, 1));  // toplevel_v2_loot:scrolling_layer
    CC_DELETEALL(comp(1622, 0));  // toplevel_v2_loot:scrollbar_layer
    CC_DELETEALL(comp(1622, 10));  // toplevel_v2_loot:slot_layer
    CC_DELETEALL(comp(1622, 12));  // toplevel_v2_loot:highlight_layer
    CC_DELETEALL(comp(1622, 11));  // toplevel_v2_loot:item_layer
    CC_DELETEALL(comp(1622, 2));  // toplevel_v2_loot:fixed_layer
    var int1 = 52;
    if ((IF_FIND(comp(1622, 2)) == 1)) {  // toplevel_v2_loot:fixed_layer
        IF_SETHIDE(false, comp(1622, 2));  // toplevel_v2_loot:fixed_layer
        CC_SETPOSITION(0, 0, 0, 2);
        CC_SETSIZE(0, int1, 1, 0);
    };
    if ((IF_FIND(comp(1622, 0)) == 1)) {  // toplevel_v2_loot:scrollbar_layer
        CC_SETPOSITION(0, 0, 2, 0);
        CC_SETSIZE(16, int1, 0, 1);
    };
    if ((IF_FIND(comp(1622, 1)) == 1)) {  // toplevel_v2_loot:scrolling_layer
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, int1, 1, 1);
    };
    var int2 = INV_SIZE(773 as inv);
    var int3 = 0;
    var int4 = 40;
    var int5 = 36;
    var int6 = 10;
    var int7 = 10;
    if ((script6431() == 1)) {
        int4 = 54;
        int5 = 48;
        int6 = 8;
        int7 = 4;
    };
    while ((int3 < int2)) {
        CC_CREATE(comp(1622, 10), 5, int3);  // toplevel_v2_loot:slot_layer
        CC_SETSIZE(int4, int5, 0, 0);
        CC_SETGRAPHIC(18266 as graphic);
        CC_SETONMOUSEOVER(callback(script9227, 773, -2147483645, -2147483643, 106299404, 1));
        CC_SETONMOUSELEAVE(callback(script9227, 773, -2147483645, -2147483643, 106299404, 0));
        script9229(106299404, int3, int4, int5);
        CC_CREATE(comp(1622, 11), 5, int3);  // toplevel_v2_loot:item_layer
        CC_SETSIZE((int4 - 4), (int5 - 4), 0, 0);
        CC_SETONTARGETENTER(callback(script1615, 1, -2147483645, -2147483643));
        stack(callback(script1615, 0, -2147483645, -2147483643));
        CC_SETONTARGETLEAVE();
        int3 = (int3 + 1);
    };
    if ((varbitplayer_22875 != 1)) {
        IF_SETHIDE(false, comp(1622, 10));  // toplevel_v2_loot:slot_layer
    } else {
        IF_SETHIDE(true, comp(1622, 10));  // toplevel_v2_loot:slot_layer
    };
    if ((PLAYERMEMBER() == false)) {
        IF_SETHIDE(true, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
    } else if ((varbitplayer_27945 == 0)) {
        if ((varbitplayer_27947 == 0)) {
            if ((varbitplayer_27948 == 0)) {
                if ((varbitplayer_27949 == 0)) {
                    if ((varbitplayer_27950 == 0)) {
                        if ((varbitplayer_27951 == 0)) {
                            if ((varbitplayer_27952 == 0)) {
                                if ((varbitplayer_27953 == 0)) {
                                    if ((varbitplayer_27954 == 0)) {
                                        if ((varbitplayer_27955 == 0)) {
                                            if ((varbitplayer_27956 == 0)) {
                                                IF_SETHIDE(true, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
                                            } else {
                                                IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
                                            };
                                        } else {
                                            IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
                                        };
                                    } else {
                                        IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
                                    };
                                } else {
                                    IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
                                };
                            } else {
                                IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
                            };
                        } else {
                            IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
                        };
                    } else {
                        IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
                    };
                } else {
                    IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
                };
            } else {
                IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
            };
        } else {
            IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
        };
    } else {
        IF_SETHIDE(false, comp(1622, 14));  // toplevel_v2_loot:loot_custom_button_layer
    };
    IF_SETONRESIZE(callback(script11408, -2147483645), int0);
    IF_SETONINVTRANSMIT(callback(script11408, -2147483645, 773, 1), int0);
    IF_SETPOSITION(int6, int7, 0, 0, comp(1622, 9));  // toplevel_v2_loot:loot_settings_button_layer
    script11409(int0);
    return;
}