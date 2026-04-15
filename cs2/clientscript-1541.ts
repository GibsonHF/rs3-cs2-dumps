//
function script1541(): void {
    script9554(comp(20, 286), comp(20, 307), comp(20, 287), "Save Preset", 21217 as struct);
    IF_SETHIDE(true, comp(20, 295));
    if (((varplayer_424 == 0) && (varplayer_425 == 0))) {
        IF_SETTEXT("That colour combination can not be saved. Please select another set of colours.", comp(20, 288));
        IF_SETHIDE(false, comp(20, 295));
    } else {
        IF_SETTEXT("Are you sure you wish to override the current preset?", comp(20, 288));
    };
    IF_SETHIDE(false, comp(20, 283));
    return;
}