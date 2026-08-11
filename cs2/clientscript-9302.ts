//
function script9302(int0: number): void {
    IF_SETTEXT(`Items found: <col=ffffff>${TOSTRING_LOCALISED(int0, 1)}</col>`, comp(517, 256));  // bank:filter_found_text
    IF_SETHIDE(false, comp(517, 254));  // bank:filter_results
    varclient_6870 = int0;
    return;
}