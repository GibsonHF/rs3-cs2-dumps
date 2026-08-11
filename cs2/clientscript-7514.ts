//
function script7514(int0: number, int1: number): void {
    var string0 = "";
    var int2 = -1 as graphic;
    switch (int0) {
        case 1: {
            int2 = IF_GETGRAPHIC(comp(1389, 9));  // rand_dnd_select_card:rand_dnd_card_1
            break;
        }
        case 2: {
            int2 = IF_GETGRAPHIC(comp(1389, 10));  // rand_dnd_select_card:rand_dnd_card_2
            break;
        }
        case 3: {
            int2 = IF_GETGRAPHIC(comp(1389, 11));  // rand_dnd_select_card:rand_dnd_card_3
            break;
        }
        case 4: {
            int2 = IF_GETGRAPHIC(comp(1389, 12));  // rand_dnd_select_card:rand_dnd_card_4
            break;
        }
        case 5: {
            int2 = IF_GETGRAPHIC(comp(1389, 13));  // rand_dnd_select_card:rand_dnd_card_5
            break;
        }
    };
    string0 = script7515(int2);
    script8800(string0, int1, -1);
    return;
}