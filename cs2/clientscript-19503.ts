//
function script19503(int0: number): void {
    IF_SETTEXT(`Items found: <col=ffffff>${TOSTRING_LOCALISED(int0, 1)}</col>`, comp(1313, 114));  // group_ironman_storage:filter_found_text
    IF_SETHIDE(false, comp(1313, 112));  // group_ironman_storage:filter_results
    varclient_6870 = int0;
    return;
}