//
function script20823(int0: number): void {
    if ((int0 == 1)) {
        script8844(1, 84, 0, 99483652, -1);
        script14002(1, 83, 0, 18, 0, 99483678, -1);
        switch (MAP_LANG()) {
            case 1: {
                script8844(1, 64, 8, 99483680, -1);
                break;
            }
            case 2: {
                script8844(1, 35, 8, 99483680, -1);
                break;
            }
            case 3: {
                script8844(1, 66, 8, 99483680, -1);
                break;
            }
            default: {
                script8844(1, 69, 8, 99483680, -1);
                break;
            }
        };
    } else {
        IF_SETOPKEY(1, 0, 0, comp(1518, 26));  // house_furniture_trunk:mainmodal_window_close_button
        IF_SETOPKEY(1, 0, 0, comp(1518, 4));  // house_furniture_trunk:search_trigger
        IF_SETOPKEY(1, 0, 0, comp(1518, 30));  // house_furniture_trunk:deposit_inv
        IF_SETOPKEY(1, 0, 0, comp(1518, 32));  // house_furniture_trunk:bank_cert_button
    };
    return;
}