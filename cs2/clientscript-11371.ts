//
function script11371(int0: struct, int1: component, int2: component): void {
    var int3 = 0;
    var int4 = 0;
    switch (int0) {
        case 31326: {
            if ((varbitplayer_27738 > 0)) {
                int3 = varclient_4788;
            };
            break;
        }
        case 31330: {
            if ((varbitplayer_27740 > 0)) {
                int3 = varclient_4790;
            };
            break;
        }
        case 31331: {
            if ((varbitplayer_27739 > 0)) {
                int3 = varclient_4789;
            };
            break;
        }
        case 31333: {
            if ((varbitplayer_27741 > 0)) {
                int3 = varclient_4791;
            };
            break;
        }
        case 31328: {
            if ((varbitplayer_27742 > 0)) {
                int3 = varclient_4792;
            };
            break;
        }
    };
    if ((int3 > CLIENTCLOCK())) {
        int4 = ((int3 - CLIENTCLOCK()) / 50);
        if ((int4 > 60)) {
            IF_SETTEXT(`${inttostring((int4 / 60), 10)}m`, int1);
        } else {
            IF_SETTEXT(inttostring(int4, 10), int1);
        };
        IF_SETHIDE(false, int2);
        IF_SETONTIMER(callback(script11372, int1, int2, int3), int1);
    } else {
        IF_SETTEXT("", int1);
        IF_SETHIDE(true, int2);
    };
    return;
}