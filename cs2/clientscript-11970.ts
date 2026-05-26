//
function script11970(int0: number): void {
    if ((int0 == 1)) {
        script8844(1, 96, 8, 111804443, -1);
        script8844(1, 97, 8, 111804442, -1);
        IF_SETOPKEYRATE(1, 10, 0, 111804443);
        IF_SETOPKEYRATE(1, 10, 0, 111804442);
        script8844(1, 13, 8, 111804448, -1);
        script8844(1, 84, 8, 111804454, -1);
    } else {
        IF_SETOPKEY(1, 0, 0, 111804443);
        IF_SETOPKEY(1, 0, 0, 111804442);
        IF_SETOPKEY(1, 0, 0, 111804448);
        IF_SETOPKEY(1, 0, 0, 111804454);
    };
    return;
}