//
function script10834(): void {
    var int0 = -1 as npc;
    var int1 = -1;
    if ((varbitplayer_26382 > 0)) {
        int0 = struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4718);
        IF_SETHIDE(false, comp(1567, 43));  // xmas2014:right_panel_delivery
        IF_SETHIDE(true, comp(1567, 45));  // xmas2014:right_panel_default
        IF_SETNPCMODEL(int0, comp(1567, 2));  // xmas2014:npc_model
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4720), comp(1567, 44));  // xmas2014:npc_name_text
        IF_SETONTIMER(callback(), comp(1567, 2));  // xmas2014:npc_model
        if ((varbitplayer_26382 != 14)) {
            IF_SETPOSITION(0, 0, 1, 1, comp(1567, 2));  // xmas2014:npc_model
            IF_SETMODELZOOM(600, comp(1567, 2));  // xmas2014:npc_model
            IF_SETPOSITION(0, -40, 1, 1, comp(1567, 2));  // xmas2014:npc_model
            if ((varbitplayer_26382 == 4)) {
                IF_SETMODELANIM(17837 as seq, comp(1567, 2));  // xmas2014:npc_model
            } else if ((varbitplayer_26382 == 9)) {
                IF_SETMODELANIM(2715 as seq, comp(1567, 2));  // xmas2014:npc_model
            } else {
                IF_SETMODELANIM(struct_getparam(enum_getvalue(0, 73, 9563, MAX(0, (varbitplayer_26382 - 1))), 4723), comp(1567, 2));  // xmas2014:npc_model
                IF_SETONTIMER(callback(script10835, 102694914, struct_getparam(enum_getvalue(0, 73, 9563, MAX(0, (varbitplayer_26382 - 1))), 4724), struct_getparam(enum_getvalue(0, 73, 9563, MAX(0, (varbitplayer_26382 - 1))), 4725), 0, 0, struct_getparam(enum_getvalue(0, 73, 9563, MAX(0, (varbitplayer_26382 - 1))), 4723), ((CLIENTCLOCK() + 250) + RANDOMINC(500))), comp(1567, 2));  // xmas2014:npc_model
            };
        } else {
            IF_SETMODELZOOM(2500, comp(1567, 2));  // xmas2014:npc_model
            IF_SETPOSITION(0, 0, 1, 1, comp(1567, 2));  // xmas2014:npc_model
            IF_SETMODELANIM(20316 as seq, comp(1567, 2));  // xmas2014:npc_model
            IF_SETONTIMER(callback(script10835, 102694914, 20369, 20356, 1, 0, 20316, ((CLIENTCLOCK() + 250) + RANDOMINC(500))), comp(1567, 2));  // xmas2014:npc_model
        };
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 9563, MAX(0, (varbitplayer_26382 - 1))), 4722), 102694916);
        if ((MAP_MEMBERS() == 0)) {
            if ((struct_getparam(enum_getvalue(0, 73, 9563, MAX(0, (varbitplayer_26382 - 1))), 4721) == 1)) {
                IF_SETTEXT("Members only", comp(1567, 72));  // xmas2014:deliver_text
                IF_SETHIDE(false, comp(1567, 70));  // xmas2014:positive_button_disabled_layer
            } else if ((varbitplayer_26359 == 1)) {
                if (((varbitplayer_26358 + 1) == varbitplayer_26382)) {
                    IF_SETTEXT("Current target", comp(1567, 72));  // xmas2014:deliver_text
                    IF_SETHIDE(false, comp(1567, 70));  // xmas2014:positive_button_disabled_layer
                } else {
                    IF_SETTEXT("Set for delivery", comp(1567, 72));  // xmas2014:deliver_text
                    IF_SETHIDE(true, comp(1567, 70));  // xmas2014:positive_button_disabled_layer
                };
            } else {
                IF_SETTEXT("Set for delivery", comp(1567, 72));  // xmas2014:deliver_text
                IF_SETHIDE(true, comp(1567, 70));  // xmas2014:positive_button_disabled_layer
            };
        } else if ((varbitplayer_26359 == 1)) {
            if (((varbitplayer_26358 + 1) == varbitplayer_26382)) {
                IF_SETTEXT("Current target", comp(1567, 72));  // xmas2014:deliver_text
                IF_SETHIDE(false, comp(1567, 70));  // xmas2014:positive_button_disabled_layer
            } else {
                IF_SETTEXT("Set for delivery", comp(1567, 72));  // xmas2014:deliver_text
                IF_SETHIDE(true, comp(1567, 70));  // xmas2014:positive_button_disabled_layer
            };
        } else {
            IF_SETTEXT("Set for delivery", comp(1567, 72));  // xmas2014:deliver_text
            IF_SETHIDE(true, comp(1567, 70));  // xmas2014:positive_button_disabled_layer
        };
    } else {
        IF_SETHIDE(true, comp(1567, 43));  // xmas2014:right_panel_delivery
        IF_SETHIDE(false, comp(1567, 45));  // xmas2014:right_panel_default
        IF_SETTEXT("Select a delivery target in the left panel for more information", comp(1567, 46));  // xmas2014:right_panel_default_text
    };
    return;
}