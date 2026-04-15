//
function script7557(int0: component): void {
    var int1 = 0;
    var int2 = 91619394;
    switch (int0) {
        case 91619329: {
            int1 = (varbitplayer_18117 * 11);
            int2 = 91619375;
            break;
        }
        case 91619328: {
            int1 = (varbitplayer_18116 * 11);
            int2 = 91619377;
            break;
        }
        case 91619330: {
            int1 = (varbitplayer_18119 * 11);
            int2 = 91619373;
            break;
        }
        case 91619331: {
            int1 = (varbitplayer_18118 * 11);
            int2 = 91619372;
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