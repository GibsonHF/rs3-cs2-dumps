//
function script7522(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = -1 as graphic;
    var int3 = 0;
    varclient_2706 = false;
    varclient_2707 = 0;
    while ((int0 < 28)) {
        switch (INV_GETOBJ(93 as inv, int0)) {
            case 27338:
            case 27339:
            case 27340:
            case 27341:
            case 27342:
            case 27343:
            case 27344:
            case 27345:
            case 27346:
            case 27347:
            case 27348: {
                int1 = INV_GETOBJ(93 as inv, int0);
                int3 = 1;
                break;
            }
            default: {
                int3 = 0;
                break;
            }
        };
        if ((int3 == 1)) {
            varclient_2705 = 3;
            int2 = script7503(int1);
            switch (varclient_2707) {
                case 0: {
                    IF_SETGRAPHIC(int2, comp(1393, 8));  // rand_dnd_card_preview:rand_dnd_card_3
                    IF_SETGRAPHIC(script7504(int2), comp(1393, 11));  // rand_dnd_card_preview:rand_dnd_chosen_card
                    IF_SETTEXT(script7505(int2), comp(1393, 4));  // rand_dnd_card_preview:rand_dnd_card_name_text
                    IF_SETTEXT(script7515(int2), comp(1393, 15));  // rand_dnd_card_preview:info_text
                    break;
                }
                case 1: {
                    IF_SETGRAPHIC(int2, comp(1393, 7));  // rand_dnd_card_preview:rand_dnd_card_2
                    IF_SETHIDE(false, comp(1393, 7));  // rand_dnd_card_preview:rand_dnd_card_2
                    break;
                }
                case 2: {
                    IF_SETGRAPHIC(int2, comp(1393, 9));  // rand_dnd_card_preview:rand_dnd_card_4
                    IF_SETHIDE(false, comp(1393, 9));  // rand_dnd_card_preview:rand_dnd_card_4
                    break;
                }
                case 3: {
                    IF_SETGRAPHIC(int2, comp(1393, 6));  // rand_dnd_card_preview:rand_dnd_card_1
                    IF_SETHIDE(false, comp(1393, 6));  // rand_dnd_card_preview:rand_dnd_card_1
                    break;
                }
                case 4: {
                    IF_SETGRAPHIC(int2, comp(1393, 10));  // rand_dnd_card_preview:rand_dnd_card_5
                    IF_SETHIDE(false, comp(1393, 10));  // rand_dnd_card_preview:rand_dnd_card_5
                    break;
                }
            };
            varclient_2707 = (varclient_2707 + 1);
            int3 = 0;
        };
        int0 = (int0 + 1);
    };
    return;
}