//
function script9001(int0: number): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 98107476: {
            int1 = comp(1497, 99);  // 6awe1_vote:plus10_left
            int2 = comp(1497, 98);  // 6awe1_vote:plus10_mid
            int3 = comp(1497, 100);  // 6awe1_vote:plus10_right
            break;
        }
        case 98107477: {
            int1 = comp(1497, 95);  // 6awe1_vote:plus5_left
            int2 = comp(1497, 94);  // 6awe1_vote:plus5_mid
            int3 = comp(1497, 96);  // 6awe1_vote:plus5_right
            break;
        }
        case 98107478: {
            int1 = comp(1497, 3);  // 6awe1_vote:plusall_left
            int2 = comp(1497, 2);  // 6awe1_vote:plusall_mid
            int3 = comp(1497, 4);  // 6awe1_vote:plusall_right
            break;
        }
        case 98107479: {
            int1 = comp(1497, 103);  // 6awe1_vote:minus10_left
            int2 = comp(1497, 102);  // 6awe1_vote:minus10_mid
            int3 = comp(1497, 104);  // 6awe1_vote:minus10_right
            break;
        }
        case 98107498: {
            int1 = comp(1497, 108);  // 6awe1_vote:minus5_left
            int2 = comp(1497, 107);  // 6awe1_vote:minus5_mid
            int3 = comp(1497, 109);  // 6awe1_vote:minus5_right
            break;
        }
        case 98107503: {
            int1 = comp(1497, 113);  // 6awe1_vote:minusall_left
            int2 = comp(1497, 112);  // 6awe1_vote:minusall_mid
            int3 = comp(1497, 114);  // 6awe1_vote:minusall_right
            break;
        }
    };
    IF_SETGRAPHIC(7923 as graphic, int1);
    IF_SETGRAPHIC(7924 as graphic, int2);
    IF_SETGRAPHIC(7925 as graphic, int3);
    return;
}