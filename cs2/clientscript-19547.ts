//
function script19547(int0: number): void {
    if ((int0 == 1)) {
        script8844(1, 13, 8, 86048887, -1);
        script8844(1, 16, 2, 86048799, -1);
        script8844(1, 17, 2, 86048802, -1);
        script8844(1, 18, 2, 86048805, -1);
        script8844(1, 19, 2, 86048809, -1);
        script8844(1, 20, 2, 86048812, -1);
        script8844(1, 21, 2, 86048820, -1);
        switch (MAP_LANG()) {
            case 1: {
                script8844(1, 64, 8, 86048829, -1);
                script8844(1, 49, 8, 86048867, -1);
                script8844(1, 41, 8, 86048825, -1);
                break;
            }
            case 2: {
                script8844(1, 35, 8, 86048829, -1);
                script8844(1, 51, 8, 86048867, -1);
                script8844(1, 34, 8, 86048825, -1);
                break;
            }
            case 3: {
                script8844(1, 66, 8, 86048829, -1);
                script8844(1, 68, 8, 86048867, -1);
                script8844(1, 70, 8, 86048825, -1);
                break;
            }
            default: {
                script8844(1, 69, 8, 86048829, -1);
                script8844(1, 49, 8, 86048867, -1);
                script8844(1, 41, 8, 86048825, -1);
                break;
            }
        };
    } else {
        IF_SETOPKEY(1, 0, 0, comp(1313, 119));  // group_ironman_storage:close_button_layer
        script8844(1, 0, 0, 86048799, -1);
        script8844(1, 0, 0, 86048802, -1);
        script8844(1, 0, 0, 86048805, -1);
        script8844(1, 0, 0, 86048808, -1);
        script8844(1, 0, 0, 86048812, -1);
        script8844(1, 0, 0, 86048820, -1);
        IF_SETOPKEY(1, 0, 0, comp(1313, 61));  // group_ironman_storage:cert_button
        IF_SETOPKEY(1, 0, 0, comp(1313, 99));  // group_ironman_storage:text_input_display
        IF_SETOPKEY(1, 0, 0, comp(1313, 57));  // group_ironman_storage:placeholder_button
    };
    return;
}