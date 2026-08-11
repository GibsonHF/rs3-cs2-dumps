//
function script5195(): void {
    IF_SETHIDE(true, comp(1122, 57));  // hcape_interface:progress_block_1
    IF_SETHIDE(true, comp(1122, 94));  // hcape_interface:progress_block_2
    IF_SETHIDE(true, comp(1122, 95));  // hcape_interface:progress_block_3
    IF_SETHIDE(true, comp(1122, 96));  // hcape_interface:progress_block_4
    IF_SETCOLOUR(11902313, comp(1122, 59));  // hcape_interface:tier_text_1
    IF_SETCOLOUR(7890507, comp(1122, 81));  // hcape_interface:tier_text_2
    IF_SETCOLOUR(7890507, comp(1122, 85));  // hcape_interface:tier_text_3
    IF_SETCOLOUR(7890507, comp(1122, 89));  // hcape_interface:tier_text_4
    IF_SETCOLOUR(7890507, comp(1122, 93));  // hcape_interface:tier_text_5
    IF_SETGRAPHIC(7653 as graphic, comp(1122, 50));  // hcape_interface:tier_marker_1
    IF_SETGRAPHIC(7652 as graphic, comp(1122, 79));  // hcape_interface:tier_marker_2
    IF_SETGRAPHIC(7652 as graphic, comp(1122, 83));  // hcape_interface:tier_marker_3
    IF_SETGRAPHIC(7652 as graphic, comp(1122, 87));  // hcape_interface:tier_marker_4
    IF_SETGRAPHIC(7652 as graphic, comp(1122, 91));  // hcape_interface:tier_marker_5
    IF_SETHIDE(true, comp(1122, 51));  // hcape_interface:tier_highlight_1
    IF_SETHIDE(true, comp(1122, 80));  // hcape_interface:tier_highlight_2
    IF_SETHIDE(true, comp(1122, 84));  // hcape_interface:tier_highlight_3
    IF_SETHIDE(true, comp(1122, 88));  // hcape_interface:tier_highlight_4
    IF_SETHIDE(true, comp(1122, 92));  // hcape_interface:tier_highlight_5
    if ((varclient_1595 >= 1)) {
        IF_SETHIDE(false, comp(1122, 57));  // hcape_interface:progress_block_1
        IF_SETGRAPHIC(7653 as graphic, comp(1122, 79));  // hcape_interface:tier_marker_2
        IF_SETCOLOUR(11902313, comp(1122, 81));  // hcape_interface:tier_text_2
    };
    if ((varclient_1595 >= 2)) {
        IF_SETHIDE(false, comp(1122, 94));  // hcape_interface:progress_block_2
        IF_SETGRAPHIC(7653 as graphic, comp(1122, 83));  // hcape_interface:tier_marker_3
        IF_SETCOLOUR(11902313, comp(1122, 85));  // hcape_interface:tier_text_3
    };
    if ((varclient_1595 >= 3)) {
        IF_SETHIDE(false, comp(1122, 95));  // hcape_interface:progress_block_3
        IF_SETGRAPHIC(7653 as graphic, comp(1122, 87));  // hcape_interface:tier_marker_4
        IF_SETCOLOUR(11902313, comp(1122, 89));  // hcape_interface:tier_text_4
    };
    if ((varclient_1595 >= 4)) {
        IF_SETHIDE(false, comp(1122, 96));  // hcape_interface:progress_block_4
        IF_SETGRAPHIC(7653 as graphic, comp(1122, 91));  // hcape_interface:tier_marker_5
        IF_SETCOLOUR(11902313, comp(1122, 93));  // hcape_interface:tier_text_5
    };
    switch (varclient_1595) {
        case 0: {
            IF_SETHIDE(false, comp(1122, 51));  // hcape_interface:tier_highlight_1
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1122, 80));  // hcape_interface:tier_highlight_2
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1122, 84));  // hcape_interface:tier_highlight_3
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1122, 88));  // hcape_interface:tier_highlight_4
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1122, 92));  // hcape_interface:tier_highlight_5
            break;
        }
    };
    return;
}