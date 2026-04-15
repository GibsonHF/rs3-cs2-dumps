//
function script17939(int0: unknown_int, int1: int): unknown_int {
    switch (int0) {
        case 8256: {
            switch (int1) {
                case 0: {
                    return 80412726;
                }
                case 1: {
                    return 80347174;
                }
                case 3: {
                    return 26411027;
                }
            };
            script12478(`Missing mtx_bp3 plugin tab is ${inttostring(int1, 10)}`);
            break;
        }
        default: {
            script12478("Missing pluging, unknown layout.");
            break;
        }
    };
    return -1;
}