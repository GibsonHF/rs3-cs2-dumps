//
function script4017(int0: number, int1: number): void {
    if ((int0 < 14)) {
        IF_SETSCROLLSIZE(0, 0, comp(1500, 24));  // quest_journal:text_scrolling_layer
        IF_SETSCROLLPOS(0, 0, comp(1500, 24));  // quest_journal:text_scrolling_layer
        CC_DELETEALL(comp(1500, 325));  // quest_journal:scrollbar_layer
    } else {
        IF_SETSCROLLSIZE(0, (int0 * 20), comp(1500, 24));  // quest_journal:text_scrolling_layer
        if ((int1 == 1)) {
            IF_SETSCROLLPOS(0, 0, comp(1500, 24));  // quest_journal:text_scrolling_layer
        } else {
            IF_SETSCROLLPOS(0, ((int0 * 20) - 180), comp(1500, 24));  // quest_journal:text_scrolling_layer
        };
        script7791(98304325, 98304024);
    };
    return;
}