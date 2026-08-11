//
function script19051(int0: number): void {
    var int1 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(1014, 79);  // trh183_overlay:chest_1_model
            break;
        }
        case 2: {
            int1 = comp(1014, 80);  // trh183_overlay:chest_2_model
            break;
        }
        case 3: {
            int1 = comp(1014, 81);  // trh183_overlay:chest_3_model
            break;
        }
    };
    IF_SETMODELANIM(22645 as seq, int1);
    IF_SETONTIMER(callback(), int1);
    return;
}