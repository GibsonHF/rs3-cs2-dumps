//
function script431(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    switch (int0) {
        case 67108872: {
            int2 = comp(1024, 44);  // conq_side_command:highlight_outer_rect_1
            int3 = comp(1024, 45);  // conq_side_command:highlight_inner_rect_1
            if ((varclient_1388 == 1)) {
                int4 = 1;
            } else {
                int4 = varbitplayer_5415;
            };
            break;
        }
        case 67108874: {
            int2 = comp(1024, 37);  // conq_side_command:highlight_outer_rect_2
            int3 = comp(1024, 38);  // conq_side_command:highlight_inner_rect_2
            if ((varclient_1388 == 1)) {
                int4 = 3;
            } else {
                int4 = varbitplayer_5416;
            };
            break;
        }
        case 67108876: {
            int2 = comp(1024, 30);  // conq_side_command:highlight_outer_rect_3
            int3 = comp(1024, 31);  // conq_side_command:highlight_inner_rect_3
            if ((varclient_1388 == 1)) {
                int4 = 5;
            } else {
                int4 = varbitplayer_5417;
            };
            break;
        }
        case 67108878: {
            int2 = comp(1024, 23);  // conq_side_command:highlight_outer_rect_4
            int3 = comp(1024, 24);  // conq_side_command:highlight_inner_rect_4
            if ((varclient_1388 == 1)) {
                int4 = 6;
            } else {
                int4 = varbitplayer_5418;
            };
            break;
        }
        default: {
            return;
        }
    };
    switch (int4) {
        case 1: {
            int5 = 293;
            break;
        }
        case 2: {
            int5 = 299;
            break;
        }
        case 3: {
            int5 = 300;
            break;
        }
        case 4: {
            int5 = 301;
            break;
        }
        case 5: {
            int5 = 305;
            break;
        }
        case 6: {
            int5 = 1044;
            break;
        }
        case 7: {
            int5 = 1045;
            break;
        }
        case 8: {
            int5 = 1046;
            break;
        }
        case 9: {
            int5 = 1047;
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 == 1)) {
        IF_SETHIDE(false, int2);
        IF_SETHIDE(false, int3);
        IF_SETTARGETCURSORS(struct_getparam(int5, 1157), struct_getparam(int5, 1157), int0);
    } else {
        IF_SETHIDE(true, int2);
        IF_SETHIDE(true, int3);
    };
    return;
}