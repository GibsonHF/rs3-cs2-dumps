//
function script1541(): void {
    script9554(1311006, 1311027, 1311007, "Save Preset", 21217);
    IF_SETHIDE(1, 1311015);
    if (((varplayer_424 == 0) && (varplayer_425 == 0))) {
        IF_SETTEXT("That colour combination can not be saved. Please select another set of colours.", 1311008);
        IF_SETHIDE(0, 1311015);
    } else {
        IF_SETTEXT("Are you sure you wish to override the current preset?", 1311008);
    };
    IF_SETHIDE(0, 1311003);
    return;
}