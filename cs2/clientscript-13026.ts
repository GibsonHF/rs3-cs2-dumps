//
function script13026(int0: unknown_int): void {
    script8808();
    switch (varclient_5917) {
        case 1: {
            varclient_5917 = 2;
            stack(29239);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            varclient_5917 = 0;
            stack(29235);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            varclient_5917 = 1;
            stack(29237);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
    };
    script3680(comp(1416, 19), comp(1416, 23), comp(1416, 6), comp(1416, 3), comp(1416, 4), comp(1416, 7), comp(1416, 20));
    script3680(comp(187, 19), comp(187, 24), comp(187, 7), comp(187, 4), comp(187, 5), comp(187, 8), comp(187, 20));
    return;
}