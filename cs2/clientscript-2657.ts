//
function script2657(): void {
    varbitplayer_11164 = 0;
    if ((varbitplayer_11152 == 0)) {
        IF_SETHIDE(false, comp(876, 4));
        IF_SETHIDE(true, comp(876, 5));
    };
    if ((varbitplayer_11152 == 1)) {
        IF_SETHIDE(true, comp(876, 4));
        SPLINE_NEW(0, 2);
        SPLINE_NEW(1, 2);
        SPLINE_ADDPOINT(0, 0, pos(0,51,156,42,60), 1450, pos(0,51,156,62,62), 1385, 0);
        SPLINE_ADDPOINT(1, 0, pos(0,51,156,2,61), 700, pos(0,51,156,2,61), 700, 0);
        SPLINE_ADDPOINT(0, 1, pos(0,51,156,6,60), 1125, pos(0,51,156,10,59), 1000, 0);
        SPLINE_ADDPOINT(1, 1, pos(0,51,156,6,54), 600, pos(0,51,156,6,54), 600, 0);
        CAM_MOVEALONG(0, 0, 250, 350, 1, 0);
    };
    if ((varbitplayer_11152 == 2)) {
        SPLINE_NEW(0, 3);
        SPLINE_NEW(1, 3);
        SPLINE_ADDPOINT(0, 0, pos(0,51,156,14,61), 1065, pos(0,51,156,14,62), 1130, 0);
        SPLINE_ADDPOINT(1, 0, pos(0,51,156,10,54), 600, pos(0,51,156,10,54), 600, 0);
        SPLINE_ADDPOINT(0, 1, pos(0,51,156,22,60), 1140, pos(0,51,156,34,61), 1105, 0);
        SPLINE_ADDPOINT(1, 1, pos(0,51,156,42,59), 600, pos(0,51,156,50,58), 600, 0);
        SPLINE_ADDPOINT(0, 2, pos(0,51,156,38,59), 825, pos(0,51,156,42,60), 565, 0);
        SPLINE_ADDPOINT(1, 2, pos(0,51,156,38,55), 600, pos(0,51,156,30,55), 600, 0);
        CAM_MOVEALONG(0, 0, 250, 350, 1, 0);
        IF_SETONCAMFINISHED(callback(script2658), comp(876, 0));
    };
    if ((varbitplayer_11152 == 3)) {
        IF_SETHIDE(true, comp(876, 4));
        SPLINE_NEW(0, 4);
        SPLINE_NEW(1, 4);
        SPLINE_ADDPOINT(0, 0, pos(0,52,156,58,48), 805, pos(0,52,156,46,47), 650, 0);
        SPLINE_ADDPOINT(1, 0, pos(0,52,156,58,41), 620, pos(0,52,156,58,41), 580, 0);
        SPLINE_ADDPOINT(0, 1, pos(0,52,156,62,42), 725, pos(0,52,156,10,42), 650, 0);
        SPLINE_ADDPOINT(1, 1, pos(0,52,156,14,38), 555, pos(0,52,156,14,38), 505, 0);
        SPLINE_ADDPOINT(0, 2, pos(0,52,156,34,39), 800, pos(0,52,156,38,37), 740, 0);
        SPLINE_ADDPOINT(1, 2, pos(0,52,156,38,35), 525, pos(0,52,156,38,34), 505, 0);
        SPLINE_ADDPOINT(0, 3, pos(0,52,156,42,34), 745, pos(0,52,156,42,32), 650, 0);
        SPLINE_ADDPOINT(1, 3, pos(0,52,156,42,28), 600, pos(0,52,156,46,27), 670, 0);
        CAM_MOVEALONG(0, 0, 300, 400, 1, 0);
        IF_SETONCAMFINISHED(callback(script2658), comp(876, 0));
    };
    if ((varbitplayer_11152 == 4)) {
        IF_SETHIDE(true, comp(876, 4));
        SPLINE_NEW(0, 3);
        SPLINE_NEW(1, 3);
        SPLINE_ADDPOINT(0, 0, pos(0,51,156,10,55), 1125, pos(0,51,156,14,54), 1085, 0);
        SPLINE_ADDPOINT(1, 0, pos(0,51,156,10,50), 750, pos(0,51,156,10,51), 750, 0);
        SPLINE_ADDPOINT(0, 1, pos(0,51,156,14,47), 1015, pos(0,51,156,10,46), 865, 0);
        SPLINE_ADDPOINT(1, 1, pos(0,51,156,62,45), 750, pos(0,51,156,62,47), 750, 0);
        SPLINE_ADDPOINT(0, 2, pos(0,51,156,50,47), 980, pos(0,51,156,42,47), 865, 0);
        SPLINE_ADDPOINT(1, 2, pos(0,51,156,42,41), 620, pos(0,51,156,42,40), 540, 0);
        CAM_MOVEALONG(0, 0, 300, 400, 1, 0);
        IF_SETONCAMFINISHED(callback(script2658), comp(876, 0));
    };
    if ((varbitplayer_11152 == 5)) {
        IF_SETHIDE(false, comp(876, 5));
    };
    if ((varbitplayer_11152 == 6)) {
        SPLINE_NEW(0, 6);
        SPLINE_NEW(0, 6);
        SPLINE_NEW(1, 6);
        SPLINE_ADDPOINT(0, 0, pos(0,51,156,50,47), 980, pos(0,51,156,42,47), 1185, 0);
        SPLINE_ADDPOINT(1, 0, pos(0,51,156,42,41), 620, pos(0,51,156,42,40), 540, 0);
        SPLINE_ADDPOINT(0, 1, pos(0,51,156,2,47), 1190, pos(0,51,156,6,47), 1165, 0);
        SPLINE_ADDPOINT(1, 1, pos(0,51,156,14,46), 750, pos(0,51,156,26,46), 750, 0);
        SPLINE_ADDPOINT(0, 2, pos(0,51,156,18,47), 1220, pos(0,51,156,26,46), 1190, 0);
        SPLINE_ADDPOINT(1, 2, pos(0,51,156,30,45), 750, pos(0,51,156,34,44), 750, 0);
        SPLINE_ADDPOINT(0, 3, pos(0,51,156,30,46), 1160, pos(0,51,156,38,45), 1135, 0);
        SPLINE_ADDPOINT(1, 3, pos(0,51,156,38,41), 750, pos(0,51,156,42,39), 750, 0);
        SPLINE_ADDPOINT(0, 4, pos(0,51,156,38,43), 1045, pos(0,51,156,42,42), 1005, 0);
        SPLINE_ADDPOINT(1, 4, pos(0,51,156,46,38), 750, pos(0,51,156,50,37), 750, 0);
        SPLINE_ADDPOINT(0, 5, pos(0,51,156,42,39), 975, pos(0,51,156,42,40), 920, 0);
        SPLINE_ADDPOINT(1, 5, pos(0,51,156,58,39), 725, pos(0,51,156,58,40), 725, 0);
        CAM_MOVEALONG(0, 0, 500, 600, 1, 0);
        IF_SETONCAMFINISHED(callback(script2658), comp(876, 0));
    };
    if ((varbitplayer_11152 == 7)) {
        IF_SETHIDE(true, comp(876, 5));
        SPLINE_NEW(0, 2);
        SPLINE_NEW(1, 2);
        SPLINE_ADDPOINT(0, 0, pos(0,51,156,42,39), 975, pos(0,51,156,46,39), 1410, 0);
        SPLINE_ADDPOINT(1, 0, pos(0,51,156,58,39), 725, pos(0,51,156,2,39), 725, 0);
        SPLINE_ADDPOINT(0, 1, pos(0,51,156,58,39), 915, pos(0,51,156,62,39), 800, 0);
        SPLINE_ADDPOINT(1, 1, pos(0,51,156,14,39), 650, pos(0,51,156,14,39), 725, 0);
        CAM_MOVEALONG(0, 0, 400, 200, 1, 0);
        IF_SETONCAMFINISHED(callback(script2658), comp(876, 0));
    };
    if ((varbitplayer_11152 == 8)) {
        IF_SETHIDE(true, comp(876, 5));
        SPLINE_NEW(0, 2);
        SPLINE_NEW(1, 2);
        SPLINE_ADDPOINT(0, 0, pos(0,51,156,58,39), 915, pos(0,51,156,62,39), 960, 0);
        SPLINE_ADDPOINT(1, 0, pos(0,51,156,14,39), 650, pos(0,51,156,14,39), 725, 0);
        SPLINE_ADDPOINT(0, 1, pos(0,51,156,22,38), 985, pos(0,51,156,22,38), 950, 0);
        SPLINE_ADDPOINT(1, 1, pos(0,51,156,34,39), 800, pos(0,51,156,34,39), 800, 0);
        CAM_MOVEALONG(0, 0, 400, 200, 1, 0);
        IF_SETONCAMFINISHED(callback(script2658), comp(876, 0));
    };
    return;
}