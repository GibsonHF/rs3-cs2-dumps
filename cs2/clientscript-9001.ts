//
function script9001(int0: number): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 98107476: {
            int1 = comp(1497, 99);
            int2 = comp(1497, 98);
            int3 = comp(1497, 100);
            break;
        }
        case 98107477: {
            int1 = comp(1497, 95);
            int2 = comp(1497, 94);
            int3 = comp(1497, 96);
            break;
        }
        case 98107478: {
            int1 = comp(1497, 3);
            int2 = comp(1497, 2);
            int3 = comp(1497, 4);
            break;
        }
        case 98107479: {
            int1 = comp(1497, 103);
            int2 = comp(1497, 102);
            int3 = comp(1497, 104);
            break;
        }
        case 98107498: {
            int1 = comp(1497, 108);
            int2 = comp(1497, 107);
            int3 = comp(1497, 109);
            break;
        }
        case 98107503: {
            int1 = comp(1497, 113);
            int2 = comp(1497, 112);
            int3 = comp(1497, 114);
            break;
        }
    };
    IF_SETGRAPHIC(7923 as graphic, int1);
    IF_SETGRAPHIC(7924 as graphic, int2);
    IF_SETGRAPHIC(7925 as graphic, int3);
    return;
}