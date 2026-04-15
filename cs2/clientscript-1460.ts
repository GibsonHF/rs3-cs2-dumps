//
function script1460(int0: unknown_int): void {
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
    script3680(comp(1416, 19), comp(1416, 23), comp(1416, 6), comp(1416, 3), comp(1416, 4), comp(1416, 7), comp(1416, 20));
    return;
}