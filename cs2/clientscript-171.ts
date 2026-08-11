//[clientscript,kr_display_riddle]
function script171(): void {
    if ((varclient_40 == 0)) {
        IF_SETTEXT("Show riddle", comp(390, 7));  // kr_jewellery_boxes:kr_show_riddle
        IF_SETOP(1, "Show", comp(390, 7));  // kr_jewellery_boxes:kr_show_riddle
        IF_SETHIDE(false, comp(390, 8));  // kr_jewellery_boxes:box_1
        IF_SETHIDE(false, comp(390, 9));  // kr_jewellery_boxes:box_2
        IF_SETHIDE(false, comp(390, 10));  // kr_jewellery_boxes:box_3
        IF_SETHIDE(false, comp(390, 11));  // kr_jewellery_boxes:box_4
        IF_SETHIDE(false, comp(390, 12));  // kr_jewellery_boxes:box_5
        IF_SETHIDE(false, comp(390, 13));  // kr_jewellery_boxes:box_6
        IF_SETHIDE(false, comp(390, 14));  // kr_jewellery_boxes:box_7
        IF_SETHIDE(false, comp(390, 15));  // kr_jewellery_boxes:box_8
        IF_SETHIDE(true, comp(390, 4));  // kr_jewellery_boxes:kr_riddle_layer
        IF_SETHIDE(true, comp(390, 6));  // kr_jewellery_boxes:kr_scroll_bar
        varclient_40 = 1;
    } else {
        IF_SETTEXT("Hide riddle", comp(390, 7));  // kr_jewellery_boxes:kr_show_riddle
        IF_SETOP(1, "Hide", comp(390, 7));  // kr_jewellery_boxes:kr_show_riddle
        IF_SETTEXT("You seek the grail of old,<br>but no longer is it a goblet of gold.<br>Among these nine will you find what you seek,<br>but be careful and don't peek!<br>A wrong choice will expel you,<br>so consider carefully each clue.<br><br>Three boxes contain only air,<br>beware of three boxes, for danger lurks there.<br>Two hold only rubbish but would fool you with disguise,<br>only one box holds your prize.<br><br>Clues will give the information you need,<br><br>rubbish always sits to the right of danger, pay heed.<br>There is nothing helpful in boxes great in height,<br>and boxes on either end will not end your plight.<br>A tall or small box will only bring you anger,<br>but a square box will not put you in danger.", comp(390, 18));  // kr_jewellery_boxes:kr_riddle
        IF_SETCOLOUR(0, comp(390, 18));  // kr_jewellery_boxes:kr_riddle
        IF_SETHIDE(true, comp(390, 8));  // kr_jewellery_boxes:box_1
        IF_SETHIDE(true, comp(390, 9));  // kr_jewellery_boxes:box_2
        IF_SETHIDE(true, comp(390, 10));  // kr_jewellery_boxes:box_3
        IF_SETHIDE(true, comp(390, 11));  // kr_jewellery_boxes:box_4
        IF_SETHIDE(true, comp(390, 12));  // kr_jewellery_boxes:box_5
        IF_SETHIDE(true, comp(390, 13));  // kr_jewellery_boxes:box_6
        IF_SETHIDE(true, comp(390, 14));  // kr_jewellery_boxes:box_7
        IF_SETHIDE(true, comp(390, 15));  // kr_jewellery_boxes:box_8
        IF_SETHIDE(false, comp(390, 4));  // kr_jewellery_boxes:kr_riddle_layer
        IF_SETHIDE(false, comp(390, 6));  // kr_jewellery_boxes:kr_scroll_bar
        IF_SETSCROLLSIZE(190, 520, comp(390, 19));  // kr_jewellery_boxes:kr_riddle_text_layer
        script31(25559046, 25559059, 792, 789, 790, 791, 773, 788);
        varclient_40 = 0;
    };
    return;
}