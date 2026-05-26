//
function script6981(int0: number): void {
    var int1 = script284(COORD());
    switch (varclient_3759) {
        case 1: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, 55463328, 54529408), 1000, script6982(int1, 55463327, 54529408), 1000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, 55381405, 54529408), 400, script6982(int1, 55381404, 54529408), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, 55496094, 54529408), 1000, script6982(int1, 55512478, 54529408), 1000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, 55397785, 54529408), 400, script6982(int1, 55414168, 54529408), 400, 0);
            CAM_MOVEALONG(0, 0, 75, 75, 1, 0);
            break;
        }
        case 2: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6983(int1, 330486144, 60821888), 600, script6983(int1, 330486144, 60821888), 1600, 0);
            SPLINE_ADDPOINT(1, 0, script6983(int1, 330486147, 60821888), 500, script6983(int1, 330486146, 60821888), 1800, 0);
            SPLINE_ADDPOINT(0, 1, script6983(int1, 330486173, 60821888), 1500, script6983(int1, 330486173, 60821888), 2500, 0);
            SPLINE_ADDPOINT(1, 1, script6983(int1, 330486185, 60821888), 750, script6983(int1, 330486185, 60821888), 1750, 0);
            SPLINE_ADDPOINT(0, 2, script6983(int1, 330486183, 60821888), 2100, script6983(int1, 330486185, 60821888), 2100, 0);
            SPLINE_ADDPOINT(1, 2, script6983(int1, 330486184, 60821888), 1250, script6983(int1, 330486186, 60821888), 1250, 0);
            CAM_MOVEALONG(0, 0, 150, 150, 1, 0);
            IF_SETONCAMFINISHED(callback(script6984, int0, 150), int0);
            break;
        }
        case 3: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, 55430546, 54529408), 2000, script6982(int1, 55446931, 54529408), 2000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, 55365015, 54529408), 1000, script6982(int1, 55365015, 54529408), 1000, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, 55463317, 54529408), 2000, script6982(int1, 55463318, 54529408), 2000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, 55365015, 54529408), 1000, script6982(int1, 55365015, 54529408), 1000, 0);
            CAM_MOVEALONG(0, 0, 75, 75, 1, 0);
            break;
        }
        case 4: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6982(int1, 330502551, 330305920), 1000, script6982(int1, 330502552, 330305920), 1000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, 330502562, 330305920), 500, script6982(int1, 330502563, 330305920), 500, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, 330469790, 330305920), 1000, script6982(int1, 330453407, 330305920), 1000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, 330502564, 330305920), 500, script6982(int1, 330502564, 330305920), 500, 0);
            SPLINE_ADDPOINT(0, 2, script6982(int1, 330437024, 330305920), 1000, script6982(int1, 330437024, 330305920), 1000, 0);
            SPLINE_ADDPOINT(1, 2, script6982(int1, 330486181, 330305920), 500, script6982(int1, 330486181, 330305920), 500, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            IF_SETONCAMFINISHED(callback(script6984, int0, 50), int0);
            break;
        }
        case 5: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, 330092991, 329781675), 2000, script6982(int1, 330092991, 329781675), 2000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, 329994683, 329781675), 1250, script6982(int1, 329978299, 329781675), 1250, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, 330011071, 329781675), 2000, script6982(int1, 329978303, 329781675), 2000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, 329961915, 329781675), 1250, script6982(int1, 329945531, 329781675), 1250, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            break;
        }
        case 6: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, 330109372, 329781675), 2000, script6982(int1, 330076602, 329781675), 2000, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, 329994688, 329781675), 1250, script6982(int1, 330027457, 329781675), 1250, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, 329929149, 329781675), 2000, script6982(int1, 329929151, 329781675), 2000, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, 330027457, 329781675), 1250, script6982(int1, 330092994, 329781675), 1250, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            break;
        }
        case 7: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, 61854129, 330305920), 885, script6982(int1, 61870513, 330305920), 800, 49);
            SPLINE_ADDPOINT(1, 0, script6982(int1, 62050738, 330305920), 300, script6982(int1, 62017970, 330305920), 300, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, 61886897, 330305920), 830, script6982(int1, 61886897, 330305920), 815, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, 62099890, 330305920), 300, script6982(int1, 62132658, 330305920), 300, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            break;
        }
        case 8: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, 61837755, 330305920), 1030, script6982(int1, 61870521, 330305920), 1035, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, 62050739, 330305920), 580, script6982(int1, 62067122, 330305920), 575, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, 61936055, 330305920), 875, script6982(int1, 62001589, 330305920), 785, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, 62067121, 330305920), 595, script6982(int1, 62067120, 330305920), 580, 0);
            CAM_MOVEALONG(0, 0, 50, 50, 1, 0);
            break;
        }
        case 9: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6982(int1, 62280115, 330305920), 1140, script6982(int1, 62280110, 330305920), 1575, 0);
            SPLINE_ADDPOINT(1, 0, script6982(int1, 62116275, 330305920), 340, script6982(int1, 62099892, 330305920), 340, 0);
            SPLINE_ADDPOINT(0, 1, script6982(int1, 62034349, 330305920), 1115, script6982(int1, 62001581, 330305920), 1005, 0);
            SPLINE_ADDPOINT(1, 1, script6982(int1, 62050743, 330305920), 420, script6982(int1, 62050744, 330305920), 405, 0);
            CAM_MOVEALONG(0, 0, 100, 100, 1, 0);
            break;
        }
    };
    return;
}