//
function script2861(): [number, number, number, number, number, number, number, number, number] {
    var int0 = -1;
    var int1 = varbitplayer_26264;
    if ((int1 == 0)) {
        int1 = varbitplayer_26279;
    };
    if ((int1 == 0)) {
        script10828();
        return [0, 0, 0, 0, 0, 0, 0, 0, 0];
    };
    switch (int1) {
        case 1: {
            if ((script7199() == 0)) {
                int0 = 29701;
            } else if ((script7199() == 1)) {
                int0 = 29702;
            } else {
                int0 = 29703;
            };
            IF_SETHIDE(false, comp(1566, 69));  // egq_tracking:signal_name
            IF_SETTEXT("Signal Detected:<br>936 mR", comp(1566, 69));  // egq_tracking:signal_name
            break;
        }
        case 3: {
            if ((script7199() == 0)) {
                int0 = 29704;
            } else if ((script7199() == 1)) {
                int0 = 29705;
            } else {
                int0 = 29706;
            };
            IF_SETHIDE(false, comp(1566, 69));  // egq_tracking:signal_name
            IF_SETTEXT("Signal Detected:<br>385 mR", comp(1566, 69));  // egq_tracking:signal_name
            break;
        }
        case 2: {
            if ((script7199() == 0)) {
                int0 = 29707;
            } else if ((script7199() == 1)) {
                int0 = 29708;
            } else {
                int0 = 29709;
            };
            IF_SETHIDE(false, comp(1566, 69));  // egq_tracking:signal_name
            IF_SETTEXT("Signal Detected:<br>245 mR", comp(1566, 69));  // egq_tracking:signal_name
            break;
        }
        case 4: {
            if ((script7199() == 0)) {
                int0 = 29710;
            } else if ((script7199() == 1)) {
                int0 = 29711;
            } else {
                int0 = 29712;
            };
            IF_SETHIDE(false, comp(1566, 69));  // egq_tracking:signal_name
            IF_SETTEXT("Signal Detected:<br>527 mR", comp(1566, 69));  // egq_tracking:signal_name
            break;
        }
        case 5: {
            if ((script7199() == 0)) {
                int0 = 29713;
            } else if ((script7199() == 1)) {
                int0 = 29714;
            } else {
                int0 = 29715;
            };
            IF_SETHIDE(false, comp(1566, 69));  // egq_tracking:signal_name
            IF_SETTEXT("Signal Detected:<br>624 mR", comp(1566, 69));  // egq_tracking:signal_name
            break;
        }
        case 6: {
            if ((script7199() == 2)) {
                int0 = 44865;
            } else if ((script7199() == 3)) {
                int0 = 44866;
            } else {
                int0 = 44867;
            };
            IF_SETHIDE(false, comp(1566, 69));  // egq_tracking:signal_name
            IF_SETTEXT("Signal Detected:<br>763 mR", comp(1566, 69));  // egq_tracking:signal_name
            break;
        }
    };
    if ((int0 == -1)) {
        script10828();
        return [0, 0, 0, 0, 0, 0, 0, 0, 0];
    };
    var int2 = script2862(556, int0);
    if ((int2 == 0)) {
        script7695(102629422, 0);
    } else {
        script7695(102629422, 1);
    };
    var int3 = script2862(562, int0);
    if ((int3 == 0)) {
        script7695(102629424, 0);
    } else {
        script7695(102629424, 1);
    };
    var int4 = script2862(564, int0);
    if ((int4 == 0)) {
        script7695(102629423, 0);
    } else {
        script7695(102629423, 1);
    };
    var int5 = script2862(557, int0);
    if ((int5 == 0)) {
        script7695(102629425, 0);
    } else {
        script7695(102629425, 1);
    };
    var int6 = script2862(554, int0);
    if ((int6 == 0)) {
        script7695(102629426, 0);
    } else {
        script7695(102629426, 1);
    };
    var int7 = script2862(563, int0);
    if ((int7 == 0)) {
        script7695(102629427, 0);
    } else {
        script7695(102629427, 1);
    };
    var int8 = script2862(558, int0);
    if ((int8 == 0)) {
        script7695(102629428, 0);
    } else {
        script7695(102629428, 1);
    };
    var int9 = script2862(561, int0);
    if ((int9 == 0)) {
        script7695(102629429, 0);
    } else {
        script7695(102629429, 1);
    };
    var int10 = script2862(555, int0);
    if ((int10 == 0)) {
        script7695(102629430, 0);
    } else {
        script7695(102629430, 1);
    };
    return [int2, int3, int4, int5, int6, int7, int8, int9, int10];
}