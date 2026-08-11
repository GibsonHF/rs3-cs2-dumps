//
function script9903(): void {
    if ((varplayer_12314 == 0)) {
        IF_SETHIDE(true, comp(1465, 9));  // toplevel_v2_minimap:world_map_container
    };
    var int0 = 0;
    var int1 = 21278;
    var int2 = struct_getparam(int1, 3503);
    var int3 = 0;
    IF_SETHIDE(false, comp(1465, 22));  // toplevel_v2_minimap:clock_layer
    IF_SETHIDE(false, comp(1465, 21));  // toplevel_v2_minimap:world_map_layer
    IF_SETHIDE(false, comp(1465, 13));  // toplevel_v2_minimap:run_container
    IF_SETHIDE(false, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
    IF_SETHIDE(false, comp(1465, 2));  // toplevel_v2_minimap:minimap_graphic_footer
    IF_SETHIDE(true, comp(1465, 24));  // toplevel_v2_minimap:clock_background_graphic
    IF_SETHIDE(true, comp(1465, 27));  // toplevel_v2_minimap:xp_tracker
    if ((script6431() == 1)) {
        unk11125(0);
        IF_SETHIDE(true, comp(1465, 7));  // toplevel_v2_minimap:minimap_hud_legacy
        IF_SETHIDE(true, comp(1465, 1));  // toplevel_v2_minimap:minimap_hud_nis
        IF_SETHIDE(true, comp(1465, 8));  // toplevel_v2_minimap:minimap_hud_mixed
        IF_SETHIDE(true, comp(1465, 2));  // toplevel_v2_minimap:minimap_graphic_footer
        IF_SETSIZE(0, 0, 1, 1, comp(1465, 0));  // toplevel_v2_minimap:minimap
        IF_SETPOSITION(0, 0, 1, 1, comp(1465, 0));  // toplevel_v2_minimap:minimap
    } else if ((varbitplayer_60446 == 1)) {
        if ((varbitplayer_27169 == 0)) {
            IF_SETSIZE(275, 275, 0, 0, int2);
            if (((IF_GETX(int2) + 275) > IF_GETWIDTH(comp(1477, 26)))) {  // toplevel_v2:background_colour
                IF_SETPOSITION(0, IF_GETY(int2), 2, 0, int2);
            };
        };
        unk11125(1);
        IF_SETHIDE(false, comp(1465, 24));  // toplevel_v2_minimap:clock_background_graphic
        IF_SETHIDE(true, comp(1465, 1));  // toplevel_v2_minimap:minimap_hud_nis
        IF_SETHIDE(false, comp(1465, 7));  // toplevel_v2_minimap:minimap_hud_legacy
        IF_SETHIDE(true, comp(1465, 2));  // toplevel_v2_minimap:minimap_graphic_footer
        IF_SETSIZE(220, 220, 0, 0, comp(1465, 0));  // toplevel_v2_minimap:minimap
        IF_SETPOSITION(6, 6, 2, 0, comp(1465, 0));  // toplevel_v2_minimap:minimap
        IF_SETPOSITION(184, 14, 2, 0, comp(1919, 0));  // toplevel_v2_compass:compass_layer
        IF_SETPOSITION(182, 11, 2, 0, comp(1465, 12));  // toplevel_v2_minimap:run_layer
        if (((varplayer_12314 > 0) && (varbitplayer_27169 == 1))) {
            IF_SETPOSITION(206, 55, 2, 0, comp(1465, 9));  // toplevel_v2_minimap:world_map_container
            IF_SETHIDE(false, comp(1465, 9));  // toplevel_v2_minimap:world_map_container
            stack(96010249);
            script21085();
        };
        IF_SETPOSITION(206, 141, 2, 0, comp(1465, 13));  // toplevel_v2_minimap:run_container
        IF_SETPOSITION(182, 181, 2, 0, comp(1465, 21));  // toplevel_v2_minimap:world_map_layer
        IF_SETPOSITION(14, 181, 2, 0, comp(1465, 22));  // toplevel_v2_minimap:clock_layer
        IF_SETPOSITION(69, 212, 2, 0, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
        if ((varbitplayer_27169 == 0)) {
            if ((varbitplayer_26696 != 1)) {
                IF_SETHIDE(true, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
            } else if ((varbitplayer_27169 == 1)) {
                if ((varbitplayer_26696 == 0)) {
                    IF_SETHIDE(true, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
                } else {
                    IF_SETHIDE(false, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
                };
            } else {
                IF_SETHIDE(false, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
            };
        } else if ((varbitplayer_27169 == 1)) {
            if ((varbitplayer_26696 == 0)) {
                IF_SETHIDE(true, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
            } else {
                IF_SETHIDE(false, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
            };
        } else {
            IF_SETHIDE(false, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
        };
        if ((varbitplayer_27169 == 1)) {
            IF_SETHIDE(false, comp(1465, 27));  // toplevel_v2_minimap:xp_tracker
            IF_SETPOSITION(0, 148, 2, 0, comp(1465, 27));  // toplevel_v2_minimap:xp_tracker
        } else {
            IF_SETHIDE(true, comp(1465, 27));  // toplevel_v2_minimap:xp_tracker
        };
        if ((varbitplayer_223 == 1)) {
            if ((MAP_LANG() == 1)) {
                IF_SETGRAPHIC(5570 as graphic, comp(1920, 7));  // toplevel_v2_minimap_legacy:xpx2smallbutton
            } else {
                IF_SETGRAPHIC(5568 as graphic, comp(1920, 7));  // toplevel_v2_minimap_legacy:xpx2smallbutton
            };
        };
        script8705(1004);
    } else {
        if ((varbitplayer_27169 == 1)) {
            IF_SETPOSITION(0, 0, 2, 0, int2);
            IF_SETSIZE(275, 248, 0, 0, int2);
            IF_SETSIZE(0, 39, 1, 1, comp(1465, 0));  // toplevel_v2_minimap:minimap
            IF_SETHIDE(false, comp(1465, 2));  // toplevel_v2_minimap:minimap_graphic_footer
            IF_SETSIZE(0, 39, 1, 0, comp(1465, 2));  // toplevel_v2_minimap:minimap_graphic_footer
            IF_SETPOSITION(0, 39, 0, 2, comp(1465, 5));  // toplevel_v2_minimap:graphic_botleft
            IF_SETPOSITION(0, 39, 2, 2, comp(1465, 6));  // toplevel_v2_minimap:graphic_botright
            IF_SETPOSITION(0, 40, 2, 2, comp(1465, 22));  // toplevel_v2_minimap:clock_layer
            IF_SETPOSITION(0, 40, 0, 2, comp(1465, 21));  // toplevel_v2_minimap:world_map_layer
            IF_SETPOSITION(0, 2, 1, 2, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
            if ((varplayer_12314 > 0)) {
                IF_SETPOSITION(-70, 0, 1, 2, comp(1465, 9));  // toplevel_v2_minimap:world_map_container
                IF_SETHIDE(false, comp(1465, 9));  // toplevel_v2_minimap:world_map_container
                stack(96010249);
                script21085();
            };
            IF_SETHIDE(false, comp(1465, 27));  // toplevel_v2_minimap:xp_tracker
            IF_SETPOSITION(4, 1, 0, 2, comp(1465, 27));  // toplevel_v2_minimap:xp_tracker
        } else {
            IF_SETSIZE(0, 0, 1, 1, comp(1465, 0));  // toplevel_v2_minimap:minimap
            IF_SETHIDE(true, comp(1465, 2));  // toplevel_v2_minimap:minimap_graphic_footer
            IF_SETPOSITION(0, 0, 0, 2, comp(1465, 5));  // toplevel_v2_minimap:graphic_botleft
            IF_SETPOSITION(0, 0, 2, 2, comp(1465, 6));  // toplevel_v2_minimap:graphic_botright
            IF_SETPOSITION(0, 1, 2, 2, comp(1465, 22));  // toplevel_v2_minimap:clock_layer
            IF_SETPOSITION(0, 1, 0, 2, comp(1465, 21));  // toplevel_v2_minimap:world_map_layer
            IF_SETPOSITION(0, -2, 1, 2, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
        };
        unk11125(0);
        IF_SETHIDE(true, comp(1465, 7));  // toplevel_v2_minimap:minimap_hud_legacy
        IF_SETHIDE(false, comp(1465, 1));  // toplevel_v2_minimap:minimap_hud_nis
        IF_SETPOSITION(0, 0, 2, 0, comp(1465, 0));  // toplevel_v2_minimap:minimap
        IF_SETPOSITION(3, 3, 0, 0, comp(1919, 0));  // toplevel_v2_compass:compass_layer
        IF_SETPOSITION(0, 0, 0, 0, comp(1465, 12));  // toplevel_v2_minimap:run_layer
        IF_SETPOSITION(0, 0, 2, 0, comp(1465, 13));  // toplevel_v2_minimap:run_container
        IF_SETPOSITION(44, 1, 0, 2, comp(1465, 26));  // toplevel_v2_minimap:telemetry
        int3 = IF_GETWIDTH(int2);
        if ((int3 >= 219)) {
            if ((varbitplayer_26696 == 1)) {
                IF_SETHIDE(false, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
            } else if ((varbitplayer_27169 == 1)) {
                if ((varbitplayer_26696 != 0)) {
                    IF_SETHIDE(false, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
                } else {
                    IF_SETHIDE(true, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
                };
            } else {
                IF_SETHIDE(true, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
            };
        } else if ((varbitplayer_27169 == 1)) {
            if ((varbitplayer_26696 != 0)) {
                IF_SETHIDE(false, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
            } else {
                IF_SETHIDE(true, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
            };
        } else {
            IF_SETHIDE(true, comp(1465, 23));  // toplevel_v2_minimap:minimap_circle_move_layer
        };
        if ((varbitplayer_22875 == 1)) {
            int0 = 1;
        };
        IF_SETHIDE(int0, comp(1465, 3));  // toplevel_v2_minimap:graphic_topleft
        IF_SETHIDE(int0, comp(1465, 4));  // toplevel_v2_minimap:graphic_topright
        IF_SETHIDE(int0, comp(1465, 5));  // toplevel_v2_minimap:graphic_botleft
        IF_SETHIDE(int0, comp(1465, 6));  // toplevel_v2_minimap:graphic_botright
        script8705(1004);
    };
    return;
}