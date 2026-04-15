//
function script13146(int0: component, int1: int, int2: dbrow): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if (((int2 != -1 as dbrow) && (DB_GETFIELDCOUNT(int2, 668128) > 0))) {
        IF_SETMODELANGLE(dbrow_getfield(int2, 668128, 0), int0);
        return;
    };
    switch (int1) {
        case 8: {
            IF_SETMODELANGLE(-3, 185, 0, 0, 0, 70, int0);
            break;
        }
        case 2: {
            IF_SETMODELANGLE(-3, 170, 0, 0, 0, 70, int0);
            break;
        }
        case 14: {
            IF_SETMODELANGLE(-3, 175, 0, 0, 0, 70, int0);
            break;
        }
        case 7: {
            IF_SETMODELANGLE(0, 65, 0, 0, 0, 380, int0);
            break;
        }
        case 10: {
            IF_SETMODELANGLE(5, 15, 0, -220, 0, 150, int0);
            break;
        }
        case 0: {
            IF_SETMODELANGLE(-3, 185, 0, 0, 0, 70, int0);
            break;
        }
        case 9: {
            IF_SETMODELANGLE(15, 90, 0, 1850, 0, 75, int0);
            break;
        }
        case 1: {
            IF_SETMODELANGLE(5, 100, 0, 1024, 0, 500, int0);
            break;
        }
        case 4: {
            IF_SETMODELANGLE(0, 145, 0, 0, 0, 225, int0);
            break;
        }
        case 18: {
            IF_SETMODELANGLE(5, 125, 0, 1024, 0, 650, int0);
            break;
        }
        case 3: {
            IF_SETMODELANGLE(0, 100, 0, 1850, 0, 600, int0);
            break;
        }
        case 5: {
            IF_SETMODELANGLE(0, 100, 0, -1750, 0, 600, int0);
            break;
        }
        default: {
            IF_SETMODELANGLE(0, 100, 0, 200, 0, 700, int0);
            break;
        }
    };
    return;
}