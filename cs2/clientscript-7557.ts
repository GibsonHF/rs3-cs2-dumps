//
function script7557(int0: number): void {
    var int1 = 0;
    var int2 = comp(1398, 66);  // tsd_unlocking_power:base
    switch (int0) {
        case 91619329: {
            int1 = (varbitplayer_18117 * 11);
            int2 = comp(1398, 47);  // tsd_unlocking_power:good_bar
            break;
        }
        case 91619328: {
            int1 = (varbitplayer_18116 * 11);
            int2 = comp(1398, 49);  // tsd_unlocking_power:evil_bar
            break;
        }
        case 91619330: {
            int1 = (varbitplayer_18119 * 11);
            int2 = comp(1398, 45);  // tsd_unlocking_power:order_bar
            break;
        }
        case 91619331: {
            int1 = (varbitplayer_18118 * 11);
            int2 = comp(1398, 44);  // tsd_unlocking_power:chaos_bar
            break;
        }
    };
    if ((int1 == 0)) {
        IF_SETSIZE(IF_GETWIDTH(int0), 0, 0, 0, int0);
    } else {
        if ((int1 > 128)) {
            int1 = 128;
        };
        IF_SETONTIMER(callback(script7558, int1, int0, int2), int2);
    };
    return;
}