//
function script7513(int0: number): number {
    var int1 = -1 as graphic;
    switch (int0) {
        case 1: {
            int1 = IF_GETGRAPHIC(comp(1389, 9));  // rand_dnd_select_card:rand_dnd_card_1
            break;
        }
        case 2: {
            int1 = IF_GETGRAPHIC(comp(1389, 10));  // rand_dnd_select_card:rand_dnd_card_2
            break;
        }
        case 3: {
            int1 = IF_GETGRAPHIC(comp(1389, 11));  // rand_dnd_select_card:rand_dnd_card_3
            break;
        }
        case 4: {
            int1 = IF_GETGRAPHIC(comp(1389, 12));  // rand_dnd_select_card:rand_dnd_card_4
            break;
        }
        case 5: {
            int1 = IF_GETGRAPHIC(comp(1389, 13));  // rand_dnd_select_card:rand_dnd_card_5
            break;
        }
    };
    return int1;
}