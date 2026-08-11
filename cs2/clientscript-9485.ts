//
function script9485(int0: number): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 49020993: {
            int1 = comp(748, 67);  // 6awe2_vote:plus10_left
            int2 = comp(748, 66);  // 6awe2_vote:plus10_mid
            int3 = comp(748, 68);  // 6awe2_vote:plus10_right
            break;
        }
        case 49020998: {
            int1 = comp(748, 72);  // 6awe2_vote:plus5_left
            int2 = comp(748, 71);  // 6awe2_vote:plus5_mid
            int3 = comp(748, 73);  // 6awe2_vote:plus5_right
            break;
        }
        case 49021003: {
            int1 = comp(748, 77);  // 6awe2_vote:plusall_left
            int2 = comp(748, 76);  // 6awe2_vote:plusall_mid
            int3 = comp(748, 78);  // 6awe2_vote:plusall_right
            break;
        }
        case 49021008: {
            int1 = comp(748, 82);  // 6awe2_vote:minus10_left
            int2 = comp(748, 81);  // 6awe2_vote:minus10_mid
            int3 = comp(748, 83);  // 6awe2_vote:minus10_right
            break;
        }
        case 49021013: {
            int1 = comp(748, 87);  // 6awe2_vote:minus5_left
            int2 = comp(748, 86);  // 6awe2_vote:minus5_mid
            int3 = comp(748, 88);  // 6awe2_vote:minus5_right
            break;
        }
        case 49021018: {
            int1 = comp(748, 92);  // 6awe2_vote:minusall_left
            int2 = comp(748, 91);  // 6awe2_vote:minusall_mid
            int3 = comp(748, 93);  // 6awe2_vote:minusall_right
            break;
        }
    };
    IF_SETGRAPHIC(7923 as graphic, int1);
    IF_SETGRAPHIC(7924 as graphic, int2);
    IF_SETGRAPHIC(7925 as graphic, int3);
    return;
}