//
function script19547(int0: unknown_int): void {
    if ((int0 == 1)) {
        script8844(1, 13, 8, comp(1313, 119), -1);
        script8844(1, 16, 2, comp(1313, 31), -1);
        script8844(1, 17, 2, comp(1313, 34), -1);
        script8844(1, 18, 2, comp(1313, 37), -1);
        script8844(1, 19, 2, comp(1313, 41), -1);
        script8844(1, 20, 2, comp(1313, 44), -1);
        script8844(1, 21, 2, comp(1313, 52), -1);
        switch (MAP_LANG()) {
            case 1: {
                script8844(1, 64, 8, comp(1313, 61), -1);
                script8844(1, 49, 8, comp(1313, 99), -1);
                script8844(1, 41, 8, comp(1313, 57), -1);
                break;
            }
            case 2: {
                script8844(1, 35, 8, comp(1313, 61), -1);
                script8844(1, 51, 8, comp(1313, 99), -1);
                script8844(1, 34, 8, comp(1313, 57), -1);
                break;
            }
            case 3: {
                script8844(1, 66, 8, comp(1313, 61), -1);
                script8844(1, 68, 8, comp(1313, 99), -1);
                script8844(1, 70, 8, comp(1313, 57), -1);
                break;
            }
            default: {
                script8844(1, 69, 8, comp(1313, 61), -1);
                script8844(1, 49, 8, comp(1313, 99), -1);
                script8844(1, 41, 8, comp(1313, 57), -1);
                break;
            }
        };
    } else {
        IF_SETOPKEY(1, 0, 0, comp(1313, 119));
        script8844(1, 0, 0, comp(1313, 31), -1);
        script8844(1, 0, 0, comp(1313, 34), -1);
        script8844(1, 0, 0, comp(1313, 37), -1);
        script8844(1, 0, 0, comp(1313, 40), -1);
        script8844(1, 0, 0, comp(1313, 44), -1);
        script8844(1, 0, 0, comp(1313, 52), -1);
        IF_SETOPKEY(1, 0, 0, comp(1313, 61));
        IF_SETOPKEY(1, 0, 0, comp(1313, 99));
        IF_SETOPKEY(1, 0, 0, comp(1313, 57));
    };
    return;
}