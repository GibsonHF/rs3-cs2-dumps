//
function script7845(int0: number, string0: string): void {
    IF_SETHIDE(false, comp(786, 10));  // acc_create_name:name_label_desc
    IF_SETHIDE(true, comp(786, 11));  // acc_create_name:name_check_spinner
    varclient_3688 = int0;
    if ((int0 == 4)) {
        IF_SETTEXT(string0, comp(786, 10));  // acc_create_name:name_label_desc
        IF_SETCOLOUR(16355874, comp(786, 10));  // acc_create_name:name_label_desc
        IF_SETGRAPHIC(-1 as graphic, comp(786, 17));  // acc_create_name:name_status
    } else if ((int0 == 1)) {
        IF_SETTEXT("You have entered a valid character name which is available!", comp(786, 10));  // acc_create_name:name_label_desc
        IF_SETCOLOUR(2996756, comp(786, 10));  // acc_create_name:name_label_desc
        IF_SETGRAPHIC(19716 as graphic, comp(786, 17));  // acc_create_name:name_status
    } else if ((int0 == 5)) {
        IF_SETTEXT(string0, comp(786, 10));  // acc_create_name:name_label_desc
        script2731(51511306, -1, 2);
        IF_SETGRAPHIC(-1 as graphic, comp(786, 17));  // acc_create_name:name_status
    } else if ((STRING_LENGTH(string0) == 0)) {
        if ((int0 == 0)) {
            IF_SETTEXT("The display name entered is invalid.", comp(786, 10));  // acc_create_name:name_label_desc
            script2731(51511306, -1, 6);
            IF_SETGRAPHIC(19717 as graphic, comp(786, 17));  // acc_create_name:name_status
        } else {
            IF_SETTEXT("A display name is needed to play.<br>Your friends can use it to add you in-game!", comp(786, 10));  // acc_create_name:name_label_desc
            script2731(51511306, -1, 2);
            IF_SETGRAPHIC(-1 as graphic, comp(786, 17));  // acc_create_name:name_status
        };
    } else {
        IF_SETTEXT(string0, comp(786, 10));  // acc_create_name:name_label_desc
        script2731(51511306, -1, 6);
        IF_SETGRAPHIC(19717 as graphic, comp(786, 17));  // acc_create_name:name_status
    };
    switch (varclient_3688) {
        case 0: {
            IF_SETCOLOUR(15413039, comp(786, 13));  // acc_create_name:name_highlight_rect
            IF_SETHIDE(false, comp(786, 13));  // acc_create_name:name_highlight_rect
            break;
        }
        case 4: {
            IF_SETCOLOUR(16355874, comp(786, 13));  // acc_create_name:name_highlight_rect
            IF_SETHIDE(false, comp(786, 13));  // acc_create_name:name_highlight_rect
            break;
        }
        case 1: {
            IF_SETCOLOUR(2996756, comp(786, 13));  // acc_create_name:name_highlight_rect
            IF_SETHIDE(false, comp(786, 13));  // acc_create_name:name_highlight_rect
            break;
        }
        case 2: {
            IF_SETCOLOUR(65793, comp(786, 13));  // acc_create_name:name_highlight_rect
            IF_SETHIDE(false, comp(786, 13));  // acc_create_name:name_highlight_rect
            break;
        }
        default: {
            IF_SETHIDE(true, comp(786, 13));  // acc_create_name:name_highlight_rect
            break;
        }
    };
    return;
}