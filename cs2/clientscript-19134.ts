//
function script19134(int0: number, int1: number, string0: string): void {
    IF_SETHIDE(false, comp(1181, 5));  // activity_progress_bar_extension:progress_bar_2_layer
    IF_SETCOLOUR(int0, comp(1181, 55));  // activity_progress_bar_extension:progress_bar_fill_underlay
    script13310(77398021, 77398070, 62, 4000);
    script17557(string0, int1, 77398072);
    IF_SETONVARTRANSMIT(callback(script17556, string0, int1, 77398072, 11843, 11844, 2), comp(1181, 56));  // activity_progress_bar_extension:com_56
    IF_SETPOSITION(0, 40, 1, 0, comp(1181, 6));  // activity_progress_bar_extension:buff_bar_layer
    return;
}