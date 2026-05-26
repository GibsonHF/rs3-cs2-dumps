//
function script16714(): void {
    CC_DELETEALL(82117164);
    var int0 = -1;
    while ((++int0 <= 5)) {
        CC_CREATE(82117164, 5, int0);
    };
    var int1 = -1;
    int0 = 0;
    while ((++int0 <= 3)) {
        switch (int0) {
            case 1: {
                int1 = 66453583;
                break;
            }
            case 2: {
                int1 = 66453584;
                break;
            }
            case 3: {
                int1 = 66453585;
                break;
            }
        };
        script11028(int0, int1);
    };
    if ((IF_GETHIDE(66453545) == 0)) {
        IF_SETHIDE(1, 66453545);
    };
    return;
}