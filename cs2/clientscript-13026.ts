//
function script13026(int0: number): void {
    script8808();
    switch (varclient_5917) {
        case 1: {
            varclient_5917 = 2;
            IF_SETGRAPHIC(29239 as graphic, int0);
            break;
        }
        case 2: {
            varclient_5917 = 0;
            IF_SETGRAPHIC(29235 as graphic, int0);
            break;
        }
        default: {
            varclient_5917 = 1;
            IF_SETGRAPHIC(29237 as graphic, int0);
            break;
        }
    };
    script3680(92798995, 92798999, 92798982, 92798979, 92798980, 92798983, 92798996);
    script3680(12255251, 12255256, 12255239, 12255236, 12255237, 12255240, 12255252);
    return;
}