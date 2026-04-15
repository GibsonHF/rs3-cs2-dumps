//
function script11292(int0: unknown_int): void {
    if ((int0 == 1)) {
        switch (varclient_6747) {
            case 16: {
                script8844(1, 16, 8, comp(189, 21), -1);
                script8844(1, 17, 8, comp(189, 19), -1);
                script8844(1, 18, 8, comp(189, 23), -1);
                break;
            }
            case 11: {
                script8844(1, 16, 8, comp(189, 28), -1);
                script8844(1, 17, 8, comp(189, 30), -1);
                script8844(1, 18, 8, comp(189, 32), -1);
                break;
            }
        };
    } else {
        IF_SETOPKEY(1, 0, 0, comp(189, 21));
        IF_SETOPKEY(1, 0, 0, comp(189, 19));
        IF_SETOPKEY(1, 0, 0, comp(189, 23));
        IF_SETOPKEY(1, 0, 0, comp(189, 28));
        IF_SETOPKEY(1, 0, 0, comp(189, 30));
        IF_SETOPKEY(1, 0, 0, comp(189, 32));
        varclient_6747 = -1 as stat;
    };
    return;
}