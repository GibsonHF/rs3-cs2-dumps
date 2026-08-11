//
function script7581(): void {
    var int0 = comp(-1, 65535);
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = 1;
    var int9 = 1;
    var int10 = 1;
    var int11 = 1;
    switch (varbitplayer_18080) {
        case 1: {
            int0 = comp(164, 12);  // tsd_assigning_overlay:death_drag_icon
            int1 = comp(164, 25);  // tsd_assigning_overlay:death_icon
            break;
        }
        case 2: {
            int0 = comp(164, 13);  // tsd_assigning_overlay:thaerisk_drag_icon
            int1 = comp(164, 26);  // tsd_assigning_overlay:thaerisk_icon
            break;
        }
        case 4: {
            int0 = comp(164, 14);  // tsd_assigning_overlay:valluta_drag_icon
            int1 = comp(164, 27);  // tsd_assigning_overlay:valluta_icon
            break;
        }
        case 3: {
            int0 = comp(164, 15);  // tsd_assigning_overlay:cres_drag_icon
            int1 = comp(164, 28);  // tsd_assigning_overlay:cres_icon
            break;
        }
        default: {
            int8 = 0;
            break;
        }
    };
    switch (varbitplayer_18081) {
        case 1: {
            int2 = comp(164, 12);  // tsd_assigning_overlay:death_drag_icon
            int3 = comp(164, 25);  // tsd_assigning_overlay:death_icon
            break;
        }
        case 2: {
            int2 = comp(164, 13);  // tsd_assigning_overlay:thaerisk_drag_icon
            int3 = comp(164, 26);  // tsd_assigning_overlay:thaerisk_icon
            break;
        }
        case 4: {
            int2 = comp(164, 14);  // tsd_assigning_overlay:valluta_drag_icon
            int3 = comp(164, 27);  // tsd_assigning_overlay:valluta_icon
            break;
        }
        case 3: {
            int2 = comp(164, 15);  // tsd_assigning_overlay:cres_drag_icon
            int3 = comp(164, 28);  // tsd_assigning_overlay:cres_icon
            break;
        }
        default: {
            int9 = 0;
            break;
        }
    };
    switch (varbitplayer_18082) {
        case 1: {
            int4 = comp(164, 12);  // tsd_assigning_overlay:death_drag_icon
            int5 = comp(164, 25);  // tsd_assigning_overlay:death_icon
            break;
        }
        case 2: {
            int4 = comp(164, 13);  // tsd_assigning_overlay:thaerisk_drag_icon
            int5 = comp(164, 26);  // tsd_assigning_overlay:thaerisk_icon
            break;
        }
        case 4: {
            int4 = comp(164, 14);  // tsd_assigning_overlay:valluta_drag_icon
            int5 = comp(164, 27);  // tsd_assigning_overlay:valluta_icon
            break;
        }
        case 3: {
            int4 = comp(164, 15);  // tsd_assigning_overlay:cres_drag_icon
            int5 = comp(164, 28);  // tsd_assigning_overlay:cres_icon
            break;
        }
        default: {
            int10 = 0;
            break;
        }
    };
    switch (varbitplayer_18083) {
        case 1: {
            int6 = comp(164, 12);  // tsd_assigning_overlay:death_drag_icon
            int7 = comp(164, 25);  // tsd_assigning_overlay:death_icon
            break;
        }
        case 2: {
            int6 = comp(164, 13);  // tsd_assigning_overlay:thaerisk_drag_icon
            int7 = comp(164, 26);  // tsd_assigning_overlay:thaerisk_icon
            break;
        }
        case 4: {
            int6 = comp(164, 14);  // tsd_assigning_overlay:valluta_drag_icon
            int7 = comp(164, 27);  // tsd_assigning_overlay:valluta_icon
            break;
        }
        case 3: {
            int6 = comp(164, 15);  // tsd_assigning_overlay:cres_drag_icon
            int7 = comp(164, 28);  // tsd_assigning_overlay:cres_icon
            break;
        }
        default: {
            int11 = 0;
            break;
        }
    };
    if ((int8 == 1)) {
        script7584(int0, 10747906, 1);
    };
    if ((int9 == 1)) {
        script7584(int2, 10747907, 1);
    };
    if ((int10 == 1)) {
        script7584(int4, 10747908, 1);
    };
    if ((int11 == 1)) {
        script7584(int6, 10747909, 1);
    };
    var int12 = -1 as graphic;
    if ((varbitplayer_18021 > 140)) {
        int12 = script7582(int1);
        if ((int12 == -1 as graphic)) {
            return;
        };
        IF_SETGRAPHIC(int12, int1);
        IF_SETDRAGGABLE(comp(-1, 65535), -1, int0);
        IF_SETHIDE(false, comp(164, 20));  // tsd_assigning_overlay:wing1_disable
    };
    if ((varbitplayer_18021 > 150)) {
        int12 = script7582(int3);
        if ((int12 == -1 as graphic)) {
            return;
        };
        IF_SETGRAPHIC(int12, int3);
        IF_SETDRAGGABLE(comp(-1, 65535), -1, int2);
        IF_SETHIDE(false, comp(164, 21));  // tsd_assigning_overlay:wing2_disable
    };
    if ((varbitplayer_18021 > 160)) {
        int12 = script7582(int5);
        if ((int12 == -1 as graphic)) {
            return;
        };
        IF_SETGRAPHIC(int12, int5);
        IF_SETDRAGGABLE(comp(-1, 65535), -1, int4);
        IF_SETHIDE(false, comp(164, 22));  // tsd_assigning_overlay:wing3_disable
    };
    if ((varbitplayer_18021 > 170)) {
        int12 = script7582(int7);
        if ((int12 == -1 as graphic)) {
            return;
        };
        IF_SETGRAPHIC(int12, int7);
        IF_SETDRAGGABLE(comp(-1, 65535), -1, int6);
        IF_SETHIDE(false, comp(164, 23));  // tsd_assigning_overlay:wing4_disable
    };
    var int13 = script6431();
    script16148(10747916, int13);
    script16148(10747917, int13);
    script16148(10747918, int13);
    script16148(10747919, int13);
    script16148(10747920, int13);
    script16148(10747921, int13);
    script16148(10747922, int13);
    script16148(10747923, int13);
    script16148(10747924, int13);
    script16148(10747925, int13);
    script16148(10747926, int13);
    script16148(10747927, int13);
    return;
}