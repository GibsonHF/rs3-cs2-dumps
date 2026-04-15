//
function script2855(): void {
    var int0 = script1851();
    var int1 = script1852();
    if (((int1 == int0) && (int1 != 0))) {
        int1 = 0;
        script1856(0);
    };
    switch (int0) {
        case 4: {
            int0 = (int0 + 2);
            break;
        }
        case 5: {
            int0 = (int0 + 2);
            break;
        }
        case 6: {
            int0 = (int0 - 2);
            break;
        }
        case 7: {
            int0 = (int0 - 2);
            break;
        }
        case 10: {
            int0 = (int0 + 4);
            break;
        }
        case 11: {
            int0 = (int0 + 4);
            break;
        }
        case 12: {
            int0 = (int0 + 4);
            break;
        }
        case 13: {
            int0 = (int0 + 4);
            break;
        }
    };
    switch (int1) {
        case 4: {
            int1 = (int1 + 2);
            break;
        }
        case 5: {
            int1 = (int1 + 2);
            break;
        }
        case 6: {
            int1 = (int1 - 2);
            break;
        }
        case 7: {
            int1 = (int1 - 2);
            break;
        }
        case 10: {
            int1 = (int1 + 4);
            break;
        }
        case 11: {
            int1 = (int1 + 4);
            break;
        }
        case 12: {
            int1 = (int1 + 4);
            break;
        }
        case 13: {
            int1 = (int1 + 4);
            break;
        }
    };
    WORLDLIST_SORT((int0 / 2), script734(MODULO(int0, 2)), (int1 / 2), script734(MODULO(int1, 2)));
    return;
}