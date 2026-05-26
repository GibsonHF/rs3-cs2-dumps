//
function script1460(int0: number): void {
    script8808();
    switch (varclient_6348) {
        case 1: {
            varclient_6348 = 2;
            stack(32101);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            varclient_6348 = 1;
            stack(32099);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
    };
    script3680(92798995, 92798999, 92798982, 92798979, 92798980, 92798983, 92798996);
    return;
}