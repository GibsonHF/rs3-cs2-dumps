//
function script2861(): [int, int, int, int, int, int, int, int, int] {
    var int0 = -1 as struct;
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
                int0 = 29701 as struct;
            } else if ((script7199() == 1)) {
                int0 = 29702 as struct;
            } else {
                int0 = 29703 as struct;
            };
            IF_SETHIDE(false, comp(1566, 69));
            IF_SETTEXT("Signal Detected:<br>936 mR", comp(1566, 69));
            break;
        }
        case 3: {
            if ((script7199() == 0)) {
                int0 = 29704 as struct;
            } else if ((script7199() == 1)) {
                int0 = 29705 as struct;
            } else {
                int0 = 29706 as struct;
            };
            IF_SETHIDE(false, comp(1566, 69));
            IF_SETTEXT("Signal Detected:<br>385 mR", comp(1566, 69));
            break;
        }
        case 2: {
            if ((script7199() == 0)) {
                int0 = 29707 as struct;
            } else if ((script7199() == 1)) {
                int0 = 29708 as struct;
            } else {
                int0 = 29709 as struct;
            };
            IF_SETHIDE(false, comp(1566, 69));
            IF_SETTEXT("Signal Detected:<br>245 mR", comp(1566, 69));
            break;
        }
        case 4: {
            if ((script7199() == 0)) {
                int0 = 29710 as struct;
            } else if ((script7199() == 1)) {
                int0 = 29711 as struct;
            } else {
                int0 = 29712 as struct;
            };
            IF_SETHIDE(false, comp(1566, 69));
            IF_SETTEXT("Signal Detected:<br>527 mR", comp(1566, 69));
            break;
        }
        case 5: {
            if ((script7199() == 0)) {
                int0 = 29713 as struct;
            } else if ((script7199() == 1)) {
                int0 = 29714 as struct;
            } else {
                int0 = 29715 as struct;
            };
            IF_SETHIDE(false, comp(1566, 69));
            IF_SETTEXT("Signal Detected:<br>624 mR", comp(1566, 69));
            break;
        }
        case 6: {
            if ((script7199() == 2)) {
                int0 = 44865 as struct;
            } else if ((script7199() == 3)) {
                int0 = 44866 as struct;
            } else {
                int0 = 44867 as struct;
            };
            IF_SETHIDE(false, comp(1566, 69));
            IF_SETTEXT("Signal Detected:<br>763 mR", comp(1566, 69));
            break;
        }
    };
    if ((int0 == -1 as struct)) {
        script10828();
        return [0, 0, 0, 0, 0, 0, 0, 0, 0];
    };
    var int2 = script2862(556 as obj, int0);
    if ((int2 == 0)) {
        script7695(comp(1566, 46), 0);
    } else {
        script7695(comp(1566, 46), 1);
    };
    var int3 = script2862(562 as obj, int0);
    if ((int3 == 0)) {
        script7695(comp(1566, 48), 0);
    } else {
        script7695(comp(1566, 48), 1);
    };
    var int4 = script2862(564 as obj, int0);
    if ((int4 == 0)) {
        script7695(comp(1566, 47), 0);
    } else {
        script7695(comp(1566, 47), 1);
    };
    var int5 = script2862(557 as obj, int0);
    if ((int5 == 0)) {
        script7695(comp(1566, 49), 0);
    } else {
        script7695(comp(1566, 49), 1);
    };
    var int6 = script2862(554 as obj, int0);
    if ((int6 == 0)) {
        script7695(comp(1566, 50), 0);
    } else {
        script7695(comp(1566, 50), 1);
    };
    var int7 = script2862(563 as obj, int0);
    if ((int7 == 0)) {
        script7695(comp(1566, 51), 0);
    } else {
        script7695(comp(1566, 51), 1);
    };
    var int8 = script2862(558 as obj, int0);
    if ((int8 == 0)) {
        script7695(comp(1566, 52), 0);
    } else {
        script7695(comp(1566, 52), 1);
    };
    var int9 = script2862(561 as obj, int0);
    if ((int9 == 0)) {
        script7695(comp(1566, 53), 0);
    } else {
        script7695(comp(1566, 53), 1);
    };
    var int10 = script2862(555 as obj, int0);
    if ((int10 == 0)) {
        script7695(comp(1566, 54), 0);
    } else {
        script7695(comp(1566, 54), 1);
    };
    return [int2, int3, int4, int5, int6, int7, int8, int9, int10];
}