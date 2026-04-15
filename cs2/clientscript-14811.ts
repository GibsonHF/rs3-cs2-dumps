//
function script14811(int0: int): void {
    var int1 = -1;
    var int2 = 0;
    switch (int0) {
        case 0: {
            int1 = 10536;
            int2 = IF_GETX(comp(685, 112));
            break;
        }
        case 1: {
            int1 = 10524;
            int2 = IF_GETX(comp(685, 113));
            break;
        }
        case 2: {
            int1 = 10528;
            int2 = IF_GETX(comp(685, 114));
            break;
        }
        case 3: {
            int1 = 10532;
            int2 = IF_GETX(comp(685, 115));
            break;
        }
        case 4: {
            int1 = 10540;
            int2 = IF_GETX(comp(685, 116));
            break;
        }
        case 5: {
            int1 = 10544;
            int2 = IF_GETX(comp(685, 117));
            break;
        }
        case 6: {
            int1 = 10548;
            int2 = IF_GETX(comp(685, 118));
            break;
        }
    };
    if ((int1 != -1)) {
        stack(int1);
        stack(44892286);
        IF_SETGRAPHIC();
        IF_SETPOSITION(int2, 0, 0, 0, 44892286);
        script14824(int0);
        script14841(int0);
    };
    return;
}