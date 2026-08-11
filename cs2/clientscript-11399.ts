//
function script11399(): void {
    CC_DELETEALL(comp(1621, 16));  // poh_costume_room:set_build_area
    IF_SETTEXT("", comp(1621, 4));  // poh_costume_room:name_text
    if (((varplayer_7757 == 1) || (varbitplayer_39432 == 1))) {
        IF_SETTEXT("Select an item from the list to view the contents of the set.<br><br>To deposit or withdraw, you must visit your player-owned house.", comp(1621, 15));  // poh_costume_room:set_text
    } else {
        IF_SETTEXT("Select an item from the list to view the contents of the set.<br><br>With an item selected you can deposit the items if they are in your inventory.<br><br>If you have items stored selecting them will allow you to withdraw them.", comp(1621, 15));  // poh_costume_room:set_text
    };
    script13971(106233893, 106233894, 28553, "Deposit", 1);
    return;
}