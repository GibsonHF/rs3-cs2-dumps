//
function script10832(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(1, 102694937);
        IF_SETHIDE(0, 102694923);
        IF_SETHIDE(1, 102694955);
        IF_SETHIDE(0, 102694957);
        IF_SETTEXT("Select a delivery target in the left panel for more information", 102694958);
    } else {
        IF_SETHIDE(1, 102694923);
        IF_SETHIDE(0, 102694937);
        IF_SETTEXT(`Christmas cheer: ${inttostring(varbitplayer_26357, 10)}`, 102694938);
        IF_SETHIDE(1, 102694955);
        IF_SETHIDE(0, 102694957);
        IF_SETTEXT("Check the left panel for the cosmetic rewards your Christmas cheer can unlock!", 102694958);
    };
    return;
}