//
function script15837(int0: number): void {
    var int1 = IF_GETWIDTH(comp(976, 5));  // options_firstrun:inner
    var int2 = SCALE(int0, 100, int1);
    IF_SETSIZE(int2, 0, 0, 1, comp(976, 7));  // options_firstrun:progress_fill
    IF_SETTEXT(`Auto-configuration in progress... ${inttostring(int0, 10)}%`, comp(976, 4));  // options_firstrun:progress_text
    return;
}