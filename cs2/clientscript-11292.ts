//
function script11292(int0: number): void {
    if ((int0 == 1)) {
        switch (varclient_6747) {
            case 16: {
                script8844(1, 16, 8, 12386325, -1);
                script8844(1, 17, 8, 12386323, -1);
                script8844(1, 18, 8, 12386327, -1);
                break;
            }
            case 11: {
                script8844(1, 16, 8, 12386332, -1);
                script8844(1, 17, 8, 12386334, -1);
                script8844(1, 18, 8, 12386336, -1);
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