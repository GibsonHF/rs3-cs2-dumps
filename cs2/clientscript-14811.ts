//
function script14811(int0: number): void {
    var int1 = -1;
    var int2 = 0;
    switch (int0) {
        case 0: {
            int1 = 10536;
            int2 = IF_GETX(44892272);
            break;
        }
        case 1: {
            int1 = 10524;
            int2 = IF_GETX(44892273);
            break;
        }
        case 2: {
            int1 = 10528;
            int2 = IF_GETX(44892274);
            break;
        }
        case 3: {
            int1 = 10532;
            int2 = IF_GETX(44892275);
            break;
        }
        case 4: {
            int1 = 10540;
            int2 = IF_GETX(44892276);
            break;
        }
        case 5: {
            int1 = 10544;
            int2 = IF_GETX(44892277);
            break;
        }
        case 6: {
            int1 = 10548;
            int2 = IF_GETX(44892278);
            break;
        }
    };
    if ((int1 != -1)) {
        IF_SETGRAPHIC(int1, 44892286);
        IF_SETPOSITION(int2, 0, 0, 0, 44892286);
        script14824(int0);
        script14841(int0);
    };
    return;
}