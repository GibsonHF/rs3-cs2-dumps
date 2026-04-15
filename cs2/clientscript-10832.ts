//
function script10832(int0: unknown_int): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1567, 25));
        IF_SETHIDE(false, comp(1567, 11));
        IF_SETHIDE(true, comp(1567, 43));
        IF_SETHIDE(false, comp(1567, 45));
        IF_SETTEXT("Select a delivery target in the left panel for more information", comp(1567, 46));
    } else {
        IF_SETHIDE(true, comp(1567, 11));
        IF_SETHIDE(false, comp(1567, 25));
        IF_SETTEXT(`Christmas cheer: ${inttostring(varbitplayer_26357, 10)}`, comp(1567, 26));
        IF_SETHIDE(true, comp(1567, 43));
        IF_SETHIDE(false, comp(1567, 45));
        IF_SETTEXT("Check the left panel for the cosmetic rewards your Christmas cheer can unlock!", comp(1567, 46));
    };
    return;
}