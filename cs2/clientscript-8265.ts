//
function script8265(): void {
    if ((varplayer_8727 == 1)) {
        IF_SETTEXT("Tap a button for information on each perk.", 119406620);
        IF_SETHIDE(0, 119406598);
        IF_SETHIDE(1, 119406619);
    } else {
        IF_SETTEXT("Calibrating the energies here gives you bonus effects related to Divination. Your selection will be locked in once confirmed, but will be adjustable once per week, or whenever you charge a new engram.", 119406620);
        IF_SETHIDE(1, 119406598);
        IF_SETHIDE(0, 119406619);
    };
    return;
}