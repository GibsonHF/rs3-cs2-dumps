//
function script18395(): void {
    var int0 = -1 as npc;
    var int1 = -1 as npc;
    var int2 = -1;
    if ((varbitplayer_54865 > 0)) {
        int0 = struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9029);
        int1 = struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9030);
        if ((int1 != -1 as npc)) {
            int0 = int1;
        };
        IF_SETHIDE(false, comp(1279, 24));  // xmas23_present_delivery:right_panel_delivery
        IF_SETHIDE(true, comp(1279, 26));  // xmas23_present_delivery:right_panel_default
        IF_SETNPCMODEL(int0, comp(1279, 0));  // xmas23_present_delivery:npc_model
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9032), 83820569);
        IF_SETONTIMER(callback(), comp(1279, 0));  // xmas23_present_delivery:npc_model
        switch (varbitplayer_54865) {
            case 14: {
                IF_SETMODELZOOM(3400, comp(1279, 0));  // xmas23_present_delivery:npc_model
                IF_SETPOSITION(0, -50, 1, 1, comp(1279, 0));  // xmas23_present_delivery:npc_model
                IF_SETMODELANIM(20316 as seq, comp(1279, 0));  // xmas23_present_delivery:npc_model
                IF_SETONTIMER(callback(script18396, 83820544, 20369, 20356, 1, 0, 20316, ((CLIENTCLOCK() + 250) + RANDOMINC(500))), comp(1279, 0));  // xmas23_present_delivery:npc_model
                break;
            }
            case 5: {
                IF_SETMODELZOOM(2500, comp(1279, 0));  // xmas23_present_delivery:npc_model
                IF_SETPOSITION(0, -70, 1, 1, comp(1279, 0));  // xmas23_present_delivery:npc_model
                IF_SETMODELANIM(struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9035), comp(1279, 0));  // xmas23_present_delivery:npc_model
                IF_SETONTIMER(callback(script18396, 83820544, struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9036), struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9037), 0, 0, struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9035), ((CLIENTCLOCK() + 250) + RANDOMINC(500))), comp(1279, 0));  // xmas23_present_delivery:npc_model
                break;
            }
            default: {
                IF_SETPOSITION(0, 0, 1, 1, comp(1279, 0));  // xmas23_present_delivery:npc_model
                IF_SETMODELZOOM(600, comp(1279, 0));  // xmas23_present_delivery:npc_model
                IF_SETPOSITION(0, -40, 1, 1, comp(1279, 0));  // xmas23_present_delivery:npc_model
                if ((varbitplayer_54865 == 4)) {
                    IF_SETMODELANIM(17837 as seq, comp(1279, 0));  // xmas23_present_delivery:npc_model
                } else {
                    IF_SETMODELANIM(struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9035), comp(1279, 0));  // xmas23_present_delivery:npc_model
                    IF_SETONTIMER(callback(script18396, 83820544, struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9036), struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9037), 0, 0, struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9035), ((CLIENTCLOCK() + 250) + RANDOMINC(500))), comp(1279, 0));  // xmas23_present_delivery:npc_model
                };
                break;
            }
        };
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9034), comp(1279, 2));  // xmas23_present_delivery:delivery_description
        if (((varbitplayer_54817 == 35) && (TESTBIT(varbitplayer_54830, (varbitplayer_54865 - 1)) == 1))) {
            IF_SETTEXT("Delivered", comp(1279, 37));  // xmas23_present_delivery:deliver_text
            IF_SETHIDE(false, comp(1279, 35));  // xmas23_present_delivery:positive_button_disabled_layer
            return;
        };
        if ((MAP_MEMBERS() == 0)) {
            if ((struct_getparam(enum_getvalue(0, 73, 17256, MAX(0, (varbitplayer_54865 - 1))), 9033) == 1)) {
                IF_SETTEXT("Members only", comp(1279, 37));  // xmas23_present_delivery:deliver_text
                IF_SETHIDE(false, comp(1279, 35));  // xmas23_present_delivery:positive_button_disabled_layer
            } else if ((varbitplayer_54827 == 1)) {
                if (((varbitplayer_54826 + 1) == varbitplayer_54865)) {
                    IF_SETTEXT("Current target", comp(1279, 37));  // xmas23_present_delivery:deliver_text
                    IF_SETHIDE(false, comp(1279, 35));  // xmas23_present_delivery:positive_button_disabled_layer
                } else {
                    IF_SETTEXT("Set for delivery", comp(1279, 37));  // xmas23_present_delivery:deliver_text
                    IF_SETHIDE(true, comp(1279, 35));  // xmas23_present_delivery:positive_button_disabled_layer
                };
            } else {
                IF_SETTEXT("Set for delivery", comp(1279, 37));  // xmas23_present_delivery:deliver_text
                IF_SETHIDE(true, comp(1279, 35));  // xmas23_present_delivery:positive_button_disabled_layer
            };
        } else if ((varbitplayer_54827 == 1)) {
            if (((varbitplayer_54826 + 1) == varbitplayer_54865)) {
                IF_SETTEXT("Current target", comp(1279, 37));  // xmas23_present_delivery:deliver_text
                IF_SETHIDE(false, comp(1279, 35));  // xmas23_present_delivery:positive_button_disabled_layer
            } else {
                IF_SETTEXT("Set for delivery", comp(1279, 37));  // xmas23_present_delivery:deliver_text
                IF_SETHIDE(true, comp(1279, 35));  // xmas23_present_delivery:positive_button_disabled_layer
            };
        } else {
            IF_SETTEXT("Set for delivery", comp(1279, 37));  // xmas23_present_delivery:deliver_text
            IF_SETHIDE(true, comp(1279, 35));  // xmas23_present_delivery:positive_button_disabled_layer
        };
    } else {
        IF_SETHIDE(true, comp(1279, 24));  // xmas23_present_delivery:right_panel_delivery
        IF_SETHIDE(false, comp(1279, 26));  // xmas23_present_delivery:right_panel_default
        IF_SETTEXT("Select a delivery target in the left panel for more information", comp(1279, 27));  // xmas23_present_delivery:right_panel_default_text
    };
    return;
}