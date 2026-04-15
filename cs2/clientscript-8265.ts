//
function script8265(): void {
    if ((varplayer_8727 == 1)) {
        IF_SETTEXT("Tap a button for information on each perk.", comp(1822, 28));
        IF_SETHIDE(false, comp(1822, 6));
        IF_SETHIDE(true, comp(1822, 27));
    } else {
        IF_SETTEXT("Calibrating the energies here gives you bonus effects related to Divination. Your selection will be locked in once confirmed, but will be adjustable once per week, or whenever you charge a new engram.", comp(1822, 28));
        IF_SETHIDE(true, comp(1822, 6));
        IF_SETHIDE(false, comp(1822, 27));
    };
    return;
}