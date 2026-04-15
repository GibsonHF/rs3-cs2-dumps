//
function script6942(int0: component, int1: unknown_int): void {
    var int2 = 16776960;
    switch (int1) {
        case 7500: {
            if ((varbitplayer_12750 >= 60)) {
                int2 = 65280;
            } else if ((varbitplayer_12750 == 0)) {
                int2 = 16711680;
            };
            break;
        }
        case 7501: {
            if ((varbitplayer_12725 >= 40)) {
                int2 = 65280;
            } else if ((varbitplayer_12725 == 0)) {
                int2 = 16711680;
            };
            break;
        }
        case 7505: {
            if ((varbitplayer_12753 >= 110)) {
                int2 = 65280;
            } else if ((varbitplayer_12753 == 0)) {
                int2 = 16711680;
            };
            break;
        }
        case 7502: {
            if ((varbitplayer_12754 >= 5)) {
                int2 = 65280;
            } else if ((varbitplayer_12754 == 0)) {
                int2 = 16711680;
            };
            break;
        }
        case 7499: {
            if ((varbitplayer_12736 >= 5)) {
                int2 = 65280;
            } else if ((varbitplayer_12736 == 0)) {
                int2 = 16711680;
            };
            break;
        }
        case 7503: {
            if ((varbitplayer_12772 >= 50)) {
                int2 = 65280;
            } else if ((varbitplayer_12772 == 0)) {
                int2 = 16711680;
            };
            break;
        }
        case 7506: {
            if ((varbitplayer_12768 >= 20)) {
                int2 = 65280;
            } else if ((varbitplayer_12768 == 0)) {
                int2 = 16711680;
            };
            break;
        }
        case 7507: {
            if ((varbitplayer_12762 >= 170)) {
                int2 = 65280;
            } else if ((varbitplayer_12762 == 0)) {
                int2 = 16711680;
            };
            break;
        }
    };
    CC_SETCOLOUR[1](int2);
    IF_SETONMOUSELEAVE(callback(script1356, int0, CC_GETID[1](), int2), int0);
    return;
}