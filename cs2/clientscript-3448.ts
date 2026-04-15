//
function script3448(): void {
    if ((varbitplayer_5907 != 0)) {
        IF_SETHIDE(false, comp(987, 28));
    } else {
        IF_SETHIDE(true, comp(987, 28));
    };
    var int0 = comp(-1, 65535);
    switch (varbitplayer_5907) {
        case 1: {
            int0 = comp(987, 3);
            break;
        }
        case 2: {
            int0 = comp(987, 7);
            break;
        }
        case 3: {
            int0 = comp(987, 9);
            break;
        }
        case 4: {
            int0 = comp(987, 11);
            break;
        }
        case 5: {
            int0 = comp(987, 13);
            break;
        }
        case 6: {
            int0 = comp(987, 15);
            break;
        }
        case 7: {
            int0 = comp(987, 17);
            break;
        }
        case 8: {
            int0 = comp(987, 19);
            break;
        }
        case 9: {
            int0 = comp(987, 21);
            break;
        }
        case 10: {
            int0 = comp(987, 23);
            break;
        }
        case 11: {
            int0 = comp(987, 25);
            break;
        }
        case 12: {
            int0 = comp(987, 27);
            break;
        }
    };
    if ((int0 == comp(-1, 65535))) {
        IF_SETHIDE(true, comp(987, 28));
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        IF_SETHIDE(false, comp(987, 28));
        IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0, comp(987, 28));
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, comp(987, 28));
    };
    return;
}