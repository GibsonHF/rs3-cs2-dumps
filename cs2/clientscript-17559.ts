//
function script17559(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    switch (int2) {
        case 1: {
            IF_SETHIDE(int0, comp(1181, 4));  // activity_progress_bar_extension:progress_bar_layer
            break;
        }
        case 2: {
            IF_SETHIDE(int0, comp(1181, 5));  // activity_progress_bar_extension:progress_bar_2_layer
            break;
        }
    };
    if ((int0 == true)) {
        if ((IF_GETHIDE(comp(1181, 4)) == false)) {  // activity_progress_bar_extension:progress_bar_layer
            int3 = 20;
        };
        if ((IF_GETHIDE(comp(1181, 5)) == false)) {  // activity_progress_bar_extension:progress_bar_2_layer
            int3 = 20;
        };
        IF_SETPOSITION(0, int3, 1, 0, comp(1181, 6));  // activity_progress_bar_extension:buff_bar_layer
    };
    if ((int1 != -1)) {
        switch (int2) {
            case 1: {
                IF_SETCOLOUR(int1, comp(1181, 13));  // activity_progress_bar_extension:progress_bar_fill_rect
                break;
            }
            case 2: {
                IF_SETCOLOUR(int1, comp(1181, 61));  // activity_progress_bar_extension:progress_bar_2_fill_rect
                break;
            }
        };
    };
    return;
}