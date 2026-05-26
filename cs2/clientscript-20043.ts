//
function script20043(): void {
    CC_DELETEALL(82117164);
    var int0 = -1;
    while ((++int0 <= 2)) {
        CC_CREATE(82117164, 5, int0);
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
    IF_SETNPCMODEL(31885, 87949315);
    IF_SETMODELANIM(19169, 87949315);
    IF_SETMODELANGLE(15, 40, 0, 0, 0, 600, 87949315);
    IF_SETHIDE(1, 87949329);
    IF_SETHIDE(1, 87949335);
    if ((IF_GETHIDE(87949317) == 0)) {
        IF_SETHIDE(1, 87949317);
    };
    return;
}