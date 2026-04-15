//
function script2559(int0: component): void {
    var int1 = 18541;
    var int2 = 18543;
    if ((varbitplayer_22875 == 1)) {
        int1 = 32058;
        int2 = 32061;
    };
    var int3 = 0;
    switch (int0) {
        case 105840892: {
            int3 = varbitplayer_27721;
            break;
        }
        case 105840893: {
            int3 = varbitplayer_27725;
            break;
        }
        case 105840894: {
            int3 = varbitplayer_27727;
            break;
        }
        case 105840895: {
            int3 = varbitplayer_27728;
            break;
        }
        case 105840651: {
            int3 = varbitplayer_43079;
            break;
        }
        case 105840652: {
            int3 = varbitplayer_43080;
            break;
        }
        case 105840653: {
            int3 = varbitplayer_43081;
            break;
        }
        case 105840654: {
            int3 = varbitplayer_43082;
            break;
        }
        case 105840655: {
            int3 = varbitplayer_43083;
            break;
        }
    };
    if ((int3 == 1)) {
        stack(int2);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        stack(int1);
        stack(int0);
        IF_SETGRAPHIC();
    };
    IF_SETONVARTRANSMIT(callback(script2559, int0, 3814, 1), int0);
    return;
}