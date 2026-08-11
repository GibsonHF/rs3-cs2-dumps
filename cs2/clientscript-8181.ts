//
function script8181(int0: number, int1: number): void {
    switch (int1) {
        case 1: {
            if ((script9666() == 1)) {
                return;
            };
            if ((script16266() == 1)) {
                return;
            };
            if ((IF_HASSUB(comp(1477, 744)) == 1)) {  // toplevel_v2:big_window
                script18123();
            } else {
                if ((((script4550(1316) == 1) || (script9571(1316) == 1)) || (script4550(516) == 1))) {
                    script14728();
                    return;
                };
                if ((script14726(13) == 1)) {
                    script14728();
                    return;
                };
                if ((script8292(-1, -1) == 1)) {
                    if ((script8292(0, 4) == 1)) {
                        if (((varbitplayer_37069 == 4) && (IF_GETHIDE(comp(755, 87)) == false))) {  // area_task_sub:popup_window
                            IF_SETHIDE(true, comp(755, 87));  // area_task_sub:popup_window
                            return;
                        };
                    } else if ((script8292(3, 3) == 1)) {
                        if ((IF_GETHIDE(comp(1343, 172)) == false)) {  // jobs_main:information_panel
                            IF_SETHIDE(true, comp(1343, 172));  // jobs_main:information_panel
                            return;
                        };
                        if ((IF_GETHIDE(comp(1343, 30)) == false)) {  // jobs_main:reward_layer
                            IF_SETHIDE(true, comp(1343, 30));  // jobs_main:reward_layer
                            return;
                        };
                    } else if (((script8292(3, 1) == 1) && (IF_GETHIDE(comp(1284, 35)) == false))) {  // calendar_main:overlay_layer
                        IF_SETHIDE(true, comp(1284, 35));  // calendar_main:overlay_layer
                        return;
                    };
                    script8290(0);
                    if ((struct_getparam(21301, 3507) != comp(-1, 65535))) {
                        IF_TRIGGEROP(struct_getparam(21301, 3507), 1, 1);
                    };
                } else if ((script8847(18) != -1)) {
                    script675();
                } else {
                    if ((script6358() == 1)) {
                        return;
                    };
                    if (((((script8081(1028, 1622) == 1) && (int0 != 93913160)) && (int0 != 93913103)) && (int0 != 93913131))) {
                        return;
                    };
                    if (((script8081(1045, 743) == 1) && (varplayer_9670 == 12))) {
                        return;
                    };
                    if ((IF_HASSUB(comp(1477, 693)) == 1)) {  // toplevel_v2:bank_window
                        script675();
                    } else if ((IF_GETHIDE(comp(1477, 787)) == false)) {  // toplevel_v2:context_menu_layer
                        script2256(96797459);
                    } else if ((int0 == 93913160)) {
                        script4143();
                    } else if ((script6431() == 1)) {
                        if ((script15532(0) == 1)) {
                            IF_TRIGGEROP(comp(279, 4), -1, 1);  // mobile_ribbon_left:tutorial_settings_button
                        } else if ((varplayer_12914 == 1)) {
                            IF_TRIGGEROP(comp(1665, 28), -1, 1);  // poh_house_controls:furniture_edit_button_layer_click
                        } else {
                            script8182();
                        };
                    } else if ((varplayer_12914 == 1)) {
                        IF_TRIGGEROP(comp(1665, 28), -1, 1);  // poh_house_controls:furniture_edit_button_layer_click
                    } else {
                        script8182();
                    };
                };
            };
            break;
        }
    };
    return;
}