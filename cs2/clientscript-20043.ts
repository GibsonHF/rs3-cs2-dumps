//
function script20043(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = -1;
    while ((++int0 <= 2)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    var int1 = -1;
    int0 = 0;
    while ((++int0 <= 2)) {
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
    IF_SETNPCMODEL(31885 as npc, comp(1342, 3));
    IF_SETMODELANIM(19169 as seq, comp(1342, 3));
    IF_SETMODELANGLE(15, 40, 0, 0, 0, 600, comp(1342, 3));
    IF_SETHIDE(true, comp(1342, 17));
    IF_SETHIDE(true, comp(1342, 23));
    if ((IF_GETHIDE(comp(1342, 5)) == false)) {
        IF_SETHIDE(true, comp(1342, 5));
    };
    return;
}