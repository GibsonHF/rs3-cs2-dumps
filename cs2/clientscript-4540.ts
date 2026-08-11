//
function script4540(int0: number): void {
    IF_SETSIZE(56, 77, 0, 0, comp(1178, 150));  // trh_bingo:prestige_prize_graphic_1
    IF_SETSIZE(56, 77, 0, 0, comp(1178, 157));  // trh_bingo:prestige_prize_graphic_2
    IF_SETSIZE(49, 67, 0, 0, comp(1178, 164));  // trh_bingo:prestige_prize_graphic_3
    IF_SETSIZE(56, 77, 0, 0, comp(1178, 171));  // trh_bingo:prestige_prize_graphic_4
    IF_SETSIZE(56, 77, 0, 0, comp(1178, 178));  // trh_bingo:prestige_prize_graphic_5
    switch (int0) {
        case 1:
        case 3: {
            IF_SETSIZE(96, 70, 0, 0, comp(1178, 96));  // trh_bingo:column_prize_1_graphic
            IF_SETSIZE(96, 70, 0, 0, comp(1178, 103));  // trh_bingo:column_prize_2_graphic
            IF_SETSIZE(96, 70, 0, 0, comp(1178, 109));  // trh_bingo:column_prize_3_graphic
            IF_SETSIZE(67, 49, 0, 0, comp(1178, 116));  // trh_bingo:column_prize_4_graphic
            IF_SETPOSITION(-11, -22, 1, 1, comp(1178, 116));  // trh_bingo:column_prize_4_graphic
            IF_SETSIZE(67, 49, 0, 0, comp(1178, 115));  // trh_bingo:column_prize_4_graphic_1
            break;
        }
        default: {
            IF_SETSIZE(70, 96, 0, 0, comp(1178, 96));  // trh_bingo:column_prize_1_graphic
            IF_SETSIZE(70, 96, 0, 0, comp(1178, 103));  // trh_bingo:column_prize_2_graphic
            IF_SETSIZE(70, 96, 0, 0, comp(1178, 109));  // trh_bingo:column_prize_3_graphic
            IF_SETSIZE(70, 96, 0, 0, comp(1178, 116));  // trh_bingo:column_prize_4_graphic
            IF_SETPOSITION(0, 0, 1, 1, comp(1178, 116));  // trh_bingo:column_prize_4_graphic
            IF_SETSIZE(96, 70, 0, 0, comp(1178, 115));  // trh_bingo:column_prize_4_graphic_1
            break;
        }
    };
    return;
}