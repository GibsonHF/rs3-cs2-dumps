//
function script17555(int0: number, int1: number, string0: string): void {
    IF_SETHIDE(false, comp(1181, 4));  // activity_progress_bar_extension:progress_bar_layer
    IF_SETCOLOUR(int0, comp(1181, 13));  // activity_progress_bar_extension:progress_bar_fill_rect
    script13310(77398020, 77398028, 50, 4000);
    script17557(string0, int1, 77398030);
    IF_SETONVARTRANSMIT(callback(script17556, string0, int1, 77398030, 10947, 10948, 2), comp(1181, 14));  // activity_progress_bar_extension:progress_bar_text
    IF_SETPOSITION(0, 20, 1, 0, comp(1181, 6));  // activity_progress_bar_extension:buff_bar_layer
    return;
}