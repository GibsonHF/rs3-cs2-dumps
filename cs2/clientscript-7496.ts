//
function script7496(int0: number): void {
    IF_SETHIDE(true, comp(554, 2));  // dnd_summon_book:page1
    IF_SETHIDE(true, comp(554, 4));  // dnd_summon_book:page2
    IF_SETHIDE(true, comp(554, 5));  // dnd_summon_book:page3
    IF_SETHIDE(true, comp(554, 6));  // dnd_summon_book:page4
    IF_SETHIDE(true, comp(554, 7));  // dnd_summon_book:page5
    IF_SETHIDE(true, comp(554, 8));  // dnd_summon_book:page6
    IF_SETHIDE(true, comp(554, 9));  // dnd_summon_book:page7
    IF_SETHIDE(false, comp(554, 10));  // dnd_summon_book:back_layer
    IF_SETHIDE(false, comp(554, 11));  // dnd_summon_book:next_layer
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(554, 2));  // dnd_summon_book:page1
            IF_SETHIDE(true, comp(554, 10));  // dnd_summon_book:back_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(554, 4));  // dnd_summon_book:page2
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(554, 5));  // dnd_summon_book:page3
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(554, 6));  // dnd_summon_book:page4
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(554, 7));  // dnd_summon_book:page5
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(554, 8));  // dnd_summon_book:page6
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(554, 9));  // dnd_summon_book:page7
            IF_SETHIDE(true, comp(554, 11));  // dnd_summon_book:next_layer
            break;
        }
    };
    return;
}