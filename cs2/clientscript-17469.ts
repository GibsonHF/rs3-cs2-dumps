//
function script17469(int0: int, int1: obj): int {
    var int2 = 0;
    switch (int0) {
        case 5:
        case 6:
        case 7: {
            int2 = (int2 + (100 + ((MAX(0, ((MIN(STAT_BASE(2 as stat), 95) - 10) / 10)) + MAX(0, ((MIN(STAT_BASE(2 as stat), 99) - 95) / 5))) * 50)));
            break;
        }
        case 8:
        case 9:
        case 10: {
            int2 = (int2 + (100 + ((MAX(0, ((MIN(STAT_BASE(4 as stat), 95) - 10) / 10)) + MAX(0, ((MIN(STAT_BASE(4 as stat), 99) - 95) / 5))) * 50)));
            break;
        }
        case 1:
        case 2:
        case 3:
        case 4: {
            int2 = (int2 + (100 + ((MAX(0, ((MIN(STAT_BASE(6 as stat), 95) - 10) / 10)) + MAX(0, ((MIN(STAT_BASE(6 as stat), 99) - 95) / 5))) * 50)));
            break;
        }
        case 37:
        case 38: {
            int2 = (int2 + (100 + ((MAX(0, ((MIN(STAT_BASE(28 as stat), 95) - 10) / 10)) + MAX(0, ((MIN(STAT_BASE(28 as stat), 99) - 95) / 5))) * 50)));
            break;
        }
    };
    return int2;
}