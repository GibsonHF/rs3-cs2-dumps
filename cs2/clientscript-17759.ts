//
function script17759(int0: number): void {
    var int1 = SCALE((CLIENTCLOCK() - int0), 100, 100);
    if (((int1 > 0) && (int1 < 100))) {
        int1 = (255 - SCALE(255, 100, int1));
        IF_SETTRANS((255 - int1), comp(1171, 7));  // activity_progress_bar:activity_backing_left
        IF_SETTRANS((255 - int1), comp(1171, 8));  // activity_progress_bar:activity_backing_right
        IF_SETTRANS((255 - int1), comp(1171, 6));  // activity_progress_bar:activity_backing_tile
        IF_SETTRANS((255 - int1), comp(1171, 31));  // activity_progress_bar:activity_name_text
        return;
    };
    if ((int1 >= 100)) {
        IF_SETONTIMER(callback(), comp(1171, 18));  // activity_progress_bar:activity_name
    };
    return;
}