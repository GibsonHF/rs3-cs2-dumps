//
function script2865(int0: coordgrid, int1: int): coordgrid {
    var int2 = int0;
    switch (int1) {
        case 0: {
            int2 = MOVECOORD(int0, 0, 0, 4);
            break;
        }
        case 1: {
            int2 = MOVECOORD(int0, 1, 0, 4);
            break;
        }
        case 2: {
            int2 = MOVECOORD(int0, 2, 0, 3);
            break;
        }
        case 3: {
            int2 = MOVECOORD(int0, 3, 0, 2);
            break;
        }
        case 4: {
            int2 = MOVECOORD(int0, 4, 0, 1);
            break;
        }
        case 5: {
            int2 = MOVECOORD(int0, 4, 0, 0);
            break;
        }
        case 6: {
            int2 = MOVECOORD(int0, 4, 0, -1);
            break;
        }
        case 7: {
            int2 = MOVECOORD(int0, 3, 0, -2);
            break;
        }
        case 8: {
            int2 = MOVECOORD(int0, 2, 0, -3);
            break;
        }
        case 9: {
            int2 = MOVECOORD(int0, 1, 0, -4);
            break;
        }
        case 10: {
            int2 = MOVECOORD(int0, 0, 0, -4);
            break;
        }
        case 11: {
            int2 = MOVECOORD(int0, -1, 0, -4);
            break;
        }
        case 12: {
            int2 = MOVECOORD(int0, -2, 0, -3);
            break;
        }
        case 13: {
            int2 = MOVECOORD(int0, -3, 0, -2);
            break;
        }
        case 14: {
            int2 = MOVECOORD(int0, -4, 0, -1);
            break;
        }
        case 15: {
            int2 = MOVECOORD(int0, -4, 0, 0);
            break;
        }
        case 16: {
            int2 = MOVECOORD(int0, -4, 0, 1);
            break;
        }
        case 17: {
            int2 = MOVECOORD(int0, -3, 0, 2);
            break;
        }
        case 18: {
            int2 = MOVECOORD(int0, -2, 0, 3);
            break;
        }
        case 19: {
            int2 = MOVECOORD(int0, -1, 0, 4);
            break;
        }
    };
    return int2;
}