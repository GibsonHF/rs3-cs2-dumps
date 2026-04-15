//
function script14473(int0: cs2enum): void {
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 8682: {
            [int1, int2] = [comp(650, 172), comp(650, 729)];
            break;
        }
        case 8683: {
            [int1, int2] = [comp(650, 489), comp(650, 730)];
            break;
        }
        case 8684: {
            [int1, int2] = [comp(650, 492), comp(650, 731)];
            break;
        }
        case 8685: {
            [int1, int2] = [comp(650, 495), comp(650, 732)];
            break;
        }
        case 8686: {
            [int1, int2] = [comp(650, 498), comp(650, 733)];
            break;
        }
        case 8687: {
            [int1, int2] = [comp(650, 501), comp(650, 734)];
            break;
        }
        case 8688: {
            [int1, int2] = [comp(650, 504), comp(650, 735)];
            break;
        }
        case 8689: {
            [int1, int2] = [comp(650, 507), comp(650, 737)];
            break;
        }
        case 9026: {
            [int1, int2] = [comp(650, 556), comp(650, 736)];
            break;
        }
        default: {
            return;
        }
    };
    script10416(int1, int2, "", "", "", (1 - script14448(int0)));
    return;
}