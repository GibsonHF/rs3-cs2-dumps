//
function script1556(int0: int, int1: component, int2: int): void {
    if ((script13749() == true)) {
        varclient_1029 = STRING_LENGTH(varclient_2506);
    } else {
        varclient_1029 = script1504(int0, varclient_2506, 26 as fontmetrics, int1, int2);
    };
    script1557();
    var int3 = 80;
    switch (varclient_5) {
        case 2:
        case 3:
        case 4:
        case 5: {
            int3 = 30;
            break;
        }
        case 6: {
            int3 = 255;
            break;
        }
        case 7: {
            int3 = 10;
            break;
        }
        case 17: {
            int3 = 19;
            break;
        }
        case 8:
        case 10:
        case 15:
        case 16:
        case 12: {
            int3 = 12;
            break;
        }
        case 13: {
            int3 = 50;
            break;
        }
    };
    var int4 = 0;
    if (((varclient_5 == 7) || (varclient_5 == 17))) {
        int4 = 1;
    };
    script1566(int4, varclient_2506, int3);
    script8841(10, 1);
    return;
}