//
function script7009(int0: component): void {
    var int1 = 1;
    switch (int0) {
        case 109445133: {
            int1 = varbitplayer_29138;
            break;
        }
        case 109510669: {
            int1 = varbitplayer_29139;
            break;
        }
        case 109576202: {
            int1 = varbitplayer_29140;
            break;
        }
        case 109641738: {
            int1 = varbitplayer_29141;
            break;
        }
        case 126091450: {
            int1 = varbitplayer_38830;
            break;
        }
        case 126156812: {
            int1 = varbitplayer_38831;
            break;
        }
        case 37617685: {
            if ((script6431() == true)) {
                int1 = varbitplayer_38830;
            } else {
                int1 = varbitplayer_1893;
            };
            break;
        }
        default: {
            int1 = varbitplayer_1893;
            break;
        }
    };
    if ((int1 == 31)) {
        IF_SETTEXT(".", int0);
    } else {
        IF_SETTEXT(inttostring(int1, 10), int0);
    };
    return;
}