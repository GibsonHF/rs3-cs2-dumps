//
function script3448(): void {
    if ((varbitplayer_5907 != 0)) {
        IF_SETHIDE(0, 64684060);
    } else {
        IF_SETHIDE(1, 64684060);
    };
    var int0 = -1;
    switch (varbitplayer_5907) {
        case 1: {
            int0 = 64684035;
            break;
        }
        case 2: {
            int0 = 64684039;
            break;
        }
        case 3: {
            int0 = 64684041;
            break;
        }
        case 4: {
            int0 = 64684043;
            break;
        }
        case 5: {
            int0 = 64684045;
            break;
        }
        case 6: {
            int0 = 64684047;
            break;
        }
        case 7: {
            int0 = 64684049;
            break;
        }
        case 8: {
            int0 = 64684051;
            break;
        }
        case 9: {
            int0 = 64684053;
            break;
        }
        case 10: {
            int0 = 64684055;
            break;
        }
        case 11: {
            int0 = 64684057;
            break;
        }
        case 12: {
            int0 = 64684059;
            break;
        }
    };
    if ((int0 == -1)) {
        IF_SETHIDE(1, 64684060);
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        IF_SETHIDE(0, 64684060);
        IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0, 64684060);
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, 64684060);
    };
    return;
}