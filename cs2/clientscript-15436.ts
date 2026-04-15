//
function script15436(int0: unknown_int): void {
    if ((int0 == 1)) {
        script8180(int0, 1);
        switch (MAP_LANG()) {
            case 2: {
                script8844(1, 35, 8, comp(1387, 9), -1);
                break;
            }
            case 3: {
                script8844(1, 68, 8, comp(1387, 9), -1);
                break;
            }
            default: {
                script8844(1, 49, 8, comp(1387, 9), -1);
                break;
            }
        };
    } else {
        IF_SETOPKEY(1, 0, 0, comp(1387, 9));
    };
    return;
}