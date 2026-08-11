//
function script12693(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = 1;
    switch (struct_getparam(34148, 3461)) {
        case 1802:
        case 1810: {
            break;
        }
        default: {
            return;
        }
    };
    int0 = script14441();
    if (((int0 == -1) || (varbitplayer_33661 == 0))) {
        if ((varclient_5882 == 0)) {
            IF_SETHIDE(false, comp(1784, 6));  // toplevel_v2_parent_suboverlay_seasonal:no_event_layer
            return;
        };
        script92();
    };
    if ((int0 != -1)) {
        if (((struct_getparam(int0, 6139) == 3) || (struct_getparam(int0, 6139) == 5))) {
            IF_SETHIDE(true, comp(1802, 1));  // timed_event:summary_layer
            IF_SETHIDE(false, comp(1802, 250));  // timed_event:additional_interface_layer
            if ((struct_getparam(int0, 6139) == 3)) {
                IF_SETHIDE(true, comp(1802, 251));  // timed_event:anniversary_skillcapes_layer
                IF_SETHIDE(false, comp(1802, 283));  // timed_event:variety_task_events_layer
            } else {
                IF_SETHIDE(false, comp(1802, 251));  // timed_event:anniversary_skillcapes_layer
                IF_SETHIDE(true, comp(1802, 283));  // timed_event:variety_task_events_layer
            };
        } else {
            IF_SETHIDE(false, comp(1802, 1));  // timed_event:summary_layer
            IF_SETHIDE(true, comp(1802, 250));  // timed_event:additional_interface_layer
        };
        IF_SETHIDE(true, comp(1784, 6));  // toplevel_v2_parent_suboverlay_seasonal:no_event_layer
        if ((struct_getparam(int0, 5901) != -1 as graphic)) {
            IF_SETGRAPHIC(struct_getparam(int0, 5901), comp(1784, 9));  // toplevel_v2_parent_suboverlay_seasonal:tab1_icon
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5905), -2147483645, -1), comp(1784, 7));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab1_button
        };
        if ((struct_getparam(int0, 5906) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 10));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab2_button
            IF_SETGRAPHIC(struct_getparam(int0, 5906), comp(1784, 15));  // toplevel_v2_parent_suboverlay_seasonal:tab2_icon
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5910), -2147483645, -1), comp(1784, 10));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab2_button
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 10));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab2_button
        };
        if ((struct_getparam(int0, 5911) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 11));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab3_button
            IF_SETGRAPHIC(struct_getparam(int0, 5911), comp(1784, 17));  // toplevel_v2_parent_suboverlay_seasonal:tab3_icon
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5915), -2147483645, -1), comp(1784, 11));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab3_button
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 11));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab3_button
        };
        if ((struct_getparam(int0, 5916) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 12));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab4_button
            IF_SETGRAPHIC(struct_getparam(int0, 5916), comp(1784, 19));  // toplevel_v2_parent_suboverlay_seasonal:tab4_icon
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5920), -2147483645, -1), comp(1784, 12));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab4_button
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 12));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab4_button
        };
        if ((struct_getparam(int0, 5921) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 13));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab5_button
            IF_SETGRAPHIC(struct_getparam(int0, 5921), comp(1784, 21));  // toplevel_v2_parent_suboverlay_seasonal:tab5_icon
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5925), -2147483645, -1), comp(1784, 13));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab5_button
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 13));  // toplevel_v2_parent_suboverlay_seasonal:seasonal_tab5_button
        };
        if ((struct_getparam(int0, 5909) == comp(-1, 65535))) {
            script92();
        };
    } else {
        IF_SETHIDE(false, comp(1784, 6));  // toplevel_v2_parent_suboverlay_seasonal:no_event_layer
    };
    return;
}