//
function script18123(): void {
    if ((IF_HASSUBOVERLAY(comp(1477, 744), 1264 as overlayinterface) == 1)) {  // toplevel_v2:big_window
        if ((IF_GETHIDE(comp(1264, 41)) == false)) {  // q4_awareness_2023:info_overlay
            script18399();
        } else {
            IF_TRIGGEROP(comp(1264, 31), -1, 1);  // q4_awareness_2023:mainmodal_window_close_button
        };
        return;
    };
    var int0 = 0;
    var int1 = script3418(varplayer_11457);
    if ((script16229(varplayer_11457, int1) == 1)) {
        return;
    };
    switch (varplayer_11457) {
        case 3920: {
            switch (int1) {
                case 0: {
                    if ((IF_GETHIDE(comp(891, 3)) == false)) {  // mtx_front_end_confirm:confirm_buy_universe
                        IF_TRIGGEROP(comp(891, 8), -1, 1);  // mtx_front_end_confirm:confirm_buy_close
                        return;
                    };
                    break;
                }
                case 2:
                case 6:
                case 7:
                case 9:
                case 1: {
                    if ((IF_GETHIDE(comp(891, 3)) == false)) {  // mtx_front_end_confirm:confirm_buy_universe
                        IF_TRIGGEROP(comp(891, 8), -1, 1);  // mtx_front_end_confirm:confirm_buy_close
                        return;
                    };
                    break;
                }
                case 3: {
                    if ((IF_HASSUBOVERLAY(comp(853, 9), 1510 as overlayinterface) == 1)) {  // mtx_front_end_bonds:bond_overlay_holder
                        IF_TRIGGEROP(comp(1510, 5), -1, 1);  // bonds_insufficient_funds:cancel_button_active_layer
                        return;
                    };
                    if ((IF_HASSUBOVERLAY(comp(853, 9), 852 as overlayinterface) == 1)) {  // mtx_front_end_bonds:bond_overlay_holder
                        int0 = enum_getreverseindex(9, 0, 16362 as cs2enum, 55836694, 0);
                        IF_TRIGGEROP(comp(853, 43), int0, 1);  // mtx_front_end_bonds:fake_op
                        return;
                    };
                    break;
                }
                case 4: {
                    if ((IF_GETHIDE(comp(891, 6)) == false)) {  // mtx_front_end_confirm:probabilities_layer
                        IF_TRIGGEROP(comp(891, 47), -1, 1);  // mtx_front_end_confirm:probabilities_window_close
                        return;
                    };
                    if ((IF_GETHIDE(comp(891, 3)) == false)) {  // mtx_front_end_confirm:confirm_buy_universe
                        IF_TRIGGEROP(comp(891, 8), -1, 1);  // mtx_front_end_confirm:confirm_buy_close
                        return;
                    };
                    if ((IF_GETHIDE(comp(828, 9)) == false)) {  // mobile_shop_hard_currency:one_tap_purchase_layer
                        IF_SETHIDE(true, comp(828, 9));  // mobile_shop_hard_currency:one_tap_purchase_layer
                        return;
                    };
                    break;
                }
            };
            break;
        }
        case 8256: {
            if ((script18124(int1) == 1)) {
                return;
            };
            break;
        }
    };
    if ((CC_FIND(script11777(varplayer_11457, int1), (6 - 1)) == 1)) {
        CC_TRIGGEROP(1);
    };
    return;
}