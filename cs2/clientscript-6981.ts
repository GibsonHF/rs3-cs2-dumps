//
function script6981(int0: component): void {
    var int1 = script284(COORD());
    switch (varclient_3759) {
        case 1: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, pos(0,52,54,36,32), pos(0,52,54,0,0)), 1000, script6982(int1, pos(0,52,54,36,31), pos(0,52,54,0,0)), 1000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, pos(0,52,54,16,29), pos(0,52,54,0,0)), 400, script6982(int1, pos(0,52,54,16,28), pos(0,52,54,0,0)), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, pos(0,52,54,44,30), pos(0,52,54,0,0)), 1000, script6982(int1, pos(0,52,54,48,30), pos(0,52,54,0,0)), 1000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, pos(0,52,54,20,25), pos(0,52,54,0,0)), 400, script6982(int1, pos(0,52,54,24,24), pos(0,52,54,0,0)), 400, 0);
            CAM_MOVEALONG(0, 0, 75, 75, 1, 0);
            break;
        }
        case 2: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6983(int1, pos(1,59,70,45,0), pos(0,58,70,1,0)), 600, script6983(int1, pos(1,59,70,45,0), pos(0,58,70,1,0)), 1600, 0);
            SPLINE_ADDPOINT(1, 0, script6983(int1, pos(1,59,70,45,3), pos(0,58,70,1,0)), 500, script6983(int1, pos(1,59,70,45,2), pos(0,58,70,1,0)), 1800, 0);
            SPLINE_ADDPOINT(0, 1, script6983(int1, pos(1,59,70,45,29), pos(0,58,70,1,0)), 1500, script6983(int1, pos(1,59,70,45,29), pos(0,58,70,1,0)), 2500, 0);
            SPLINE_ADDPOINT(1, 1, script6983(int1, pos(1,59,70,45,41), pos(0,58,70,1,0)), 750, script6983(int1, pos(1,59,70,45,41), pos(0,58,70,1,0)), 1750, 0);
            SPLINE_ADDPOINT(0, 2, script6983(int1, pos(1,59,70,45,39), pos(0,58,70,1,0)), 2100, script6983(int1, pos(1,59,70,45,41), pos(0,58,70,1,0)), 2100, 0);
            SPLINE_ADDPOINT(1, 2, script6983(int1, pos(1,59,70,45,40), pos(0,58,70,1,0)), 1250, script6983(int1, pos(1,59,70,45,42), pos(0,58,70,1,0)), 1250, 0);
            CAM_MOVEALONG(0, 0, 150, 150, 1, 0);
            IF_SETONCAMFINISHED(callback(script6984, int0, 150), int0);
            break;
        }
        case 3: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, pos(0,52,54,28,18), pos(0,52,54,0,0)), 2000, script6982(int1, pos(0,52,54,32,19), pos(0,52,54,0,0)), 2000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, pos(0,52,54,12,23), pos(0,52,54,0,0)), 1000, script6982(int1, pos(0,52,54,12,23), pos(0,52,54,0,0)), 1000, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, pos(0,52,54,36,21), pos(0,52,54,0,0)), 2000, script6982(int1, pos(0,52,54,36,22), pos(0,52,54,0,0)), 2000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, pos(0,52,54,12,23), pos(0,52,54,0,0)), 1000, script6982(int1, pos(0,52,54,12,23), pos(0,52,54,0,0)), 1000, 0);
            CAM_MOVEALONG(0, 0, 75, 75, 1, 0);
            break;
        }
        case 4: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6982(int1, pos(1,59,70,49,23), pos(1,59,70,1,0)), 1000, script6982(int1, pos(1,59,70,49,24), pos(1,59,70,1,0)), 1000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, pos(1,59,70,49,34), pos(1,59,70,1,0)), 500, script6982(int1, pos(1,59,70,49,35), pos(1,59,70,1,0)), 500, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, pos(1,59,70,41,30), pos(1,59,70,1,0)), 1000, script6982(int1, pos(1,59,70,37,31), pos(1,59,70,1,0)), 1000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, pos(1,59,70,49,36), pos(1,59,70,1,0)), 500, script6982(int1, pos(1,59,70,49,36), pos(1,59,70,1,0)), 500, 0);
            SPLINE_ADDPOINT(0, 2, script6982(int1, pos(1,59,70,33,32), pos(1,59,70,1,0)), 1000, script6982(int1, pos(1,59,70,33,32), pos(1,59,70,1,0)), 1000, 0);
            SPLINE_ADDPOINT(1, 2, script6982(int1, pos(1,59,70,45,37), pos(1,59,70,1,0)), 500, script6982(int1, pos(1,59,70,45,37), pos(1,59,70,1,0)), 500, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            IF_SETONCAMFINISHED(callback(script6984, int0, 50), int0);
            break;
        }
        case 5: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, pos(1,58,70,13,63), pos(1,58,70,1,43)), 2000, script6982(int1, pos(1,58,70,13,63), pos(1,58,70,1,43)), 2000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, pos(1,58,70,53,59), pos(1,58,70,1,43)), 1250, script6982(int1, pos(1,58,70,49,59), pos(1,58,70,1,43)), 1250, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, pos(1,58,70,57,63), pos(1,58,70,1,43)), 2000, script6982(int1, pos(1,58,70,49,63), pos(1,58,70,1,43)), 2000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, pos(1,58,70,45,59), pos(1,58,70,1,43)), 1250, script6982(int1, pos(1,58,70,41,59), pos(1,58,70,1,43)), 1250, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            break;
        }
        case 6: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, pos(1,58,70,17,60), pos(1,58,70,1,43)), 2000, script6982(int1, pos(1,58,70,9,58), pos(1,58,70,1,43)), 2000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, pos(1,58,71,53,0), pos(1,58,70,1,43)), 1250, script6982(int1, pos(1,58,71,61,1), pos(1,58,70,1,43)), 1250, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, pos(1,58,70,37,61), pos(1,58,70,1,43)), 2000, script6982(int1, pos(1,58,70,37,63), pos(1,58,70,1,43)), 2000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, pos(1,58,71,61,1), pos(1,58,70,1,43)), 1250, script6982(int1, pos(1,58,71,13,2), pos(1,58,70,1,43)), 1250, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            break;
        }
        case 7: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, pos(0,58,70,61,49), pos(1,59,70,1,0)), 885, script6982(int1, pos(0,59,70,1,49), pos(1,59,70,1,0)), 800, 49);
            SPLINE_ADDPOINT(1, 0, script6982(int1, pos(0,59,70,45,50), pos(1,59,70,1,0)), 300, script6982(int1, pos(0,59,70,37,50), pos(1,59,70,1,0)), 300, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, pos(0,59,70,5,49), pos(1,59,70,1,0)), 830, script6982(int1, pos(0,59,70,5,49), pos(1,59,70,1,0)), 815, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, pos(0,59,70,57,50), pos(1,59,70,1,0)), 300, script6982(int1, pos(0,59,70,1,50), pos(1,59,70,1,0)), 300, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            break;
        }
        case 8: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, pos(0,58,70,57,59), pos(1,59,70,1,0)), 1030, script6982(int1, pos(0,59,70,1,57), pos(1,59,70,1,0)), 1035, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, pos(0,59,70,45,51), pos(1,59,70,1,0)), 580, script6982(int1, pos(0,59,70,49,50), pos(1,59,70,1,0)), 575, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, pos(0,59,70,17,55), pos(1,59,70,1,0)), 875, script6982(int1, pos(0,59,70,33,53), pos(1,59,70,1,0)), 785, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, pos(0,59,70,49,49), pos(1,59,70,1,0)), 595, script6982(int1, pos(0,59,70,49,48), pos(1,59,70,1,0)), 580, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            break;
        }
        case 9: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, pos(0,59,70,37,51), pos(1,59,70,1,0)), 1140, script6982(int1, pos(0,59,70,37,46), pos(1,59,70,1,0)), 1575, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, pos(0,59,70,61,51), pos(1,59,70,1,0)), 340, script6982(int1, pos(0,59,70,57,52), pos(1,59,70,1,0)), 340, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, pos(0,59,70,41,45), pos(1,59,70,1,0)), 1115, script6982(int1, pos(0,59,70,33,45), pos(1,59,70,1,0)), 1005, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, pos(0,59,70,45,55), pos(1,59,70,1,0)), 420, script6982(int1, pos(0,59,70,45,56), pos(1,59,70,1,0)), 405, 0);
            CAM_MOVEALONG(0, 0, 100, 100, 1, 0);
            break;
        }
    };
    return;
}