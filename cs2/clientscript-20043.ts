//
function script20043(): void {
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    var int0 = -1;
    int0 = (int0 + 1);
    while ((int0 <= 2)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    var int1 = -1;
    int0 = 0;
    int0 = (int0 + 1);
    while ((int0 <= 2)) {
        switch (int0) {
            case 1: {
                int1 = 87949336;
                break;
            }
            case 2: {
                int1 = 87949337;
                break;
            }
        };
        script20044(int0, int1);
    };
    IF_SETNPCMODEL(31885 as npc, comp(1342, 3));  // trh209_overlay:npc_model
    IF_SETMODELANIM(19169 as seq, comp(1342, 3));  // trh209_overlay:npc_model
    IF_SETMODELANGLE(15, 40, 0, 0, 0, 600, comp(1342, 3));  // trh209_overlay:npc_model
    IF_SETHIDE(true, comp(1342, 17));  // trh209_overlay:chest_1_multiplier_icon
    IF_SETHIDE(true, comp(1342, 23));  // trh209_overlay:chest_2_multiplier_icon
    if ((IF_GETHIDE(comp(1342, 5)) == false)) {  // trh209_overlay:warning_layer
        IF_SETHIDE(true, comp(1342, 5));  // trh209_overlay:warning_layer
    };
    return;
}