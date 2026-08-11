//
function script18390(int0: number): void {
    var int1 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(1253, 134);  // wheel_of_fortune:xmas_progress_milestone_layer_1
            break;
        }
        case 2: {
            int1 = comp(1253, 137);  // wheel_of_fortune:xmas_progress_milestone_layer_2
            break;
        }
        case 3: {
            int1 = comp(1253, 140);  // wheel_of_fortune:xmas_progress_milestone_layer_3
            break;
        }
        case 4: {
            int1 = comp(1253, 143);  // wheel_of_fortune:xmas_progress_milestone_layer_4
            break;
        }
        case 5: {
            int1 = comp(1253, 146);  // wheel_of_fortune:xmas_progress_milestone_layer_5
            break;
        }
        case 6: {
            int1 = comp(1253, 149);  // wheel_of_fortune:xmas_progress_milestone_layer_6
            break;
        }
        case 7: {
            int1 = comp(1253, 152);  // wheel_of_fortune:xmas_progress_milestone_layer_7
            break;
        }
        case 8: {
            int1 = comp(1253, 155);  // wheel_of_fortune:xmas_progress_milestone_layer_8
            break;
        }
    };
    IF_SETOPCURSOR(1, 46, int1);
    script18391(int0, int1);
    return;
}