//
function script4782(int0: number, int1: number, int2: number): void {
    var int3 = -1 as graphic;
    var int4 = -1 as graphic;
    switch (int1) {
        case 1: {
            int3 = 7541 as graphic;
            int4 = 7537 as graphic;
            break;
        }
        case 2: {
            int3 = 7540 as graphic;
            int4 = 7536 as graphic;
            break;
        }
        case 3: {
            int3 = 7539 as graphic;
            int4 = 7535 as graphic;
            break;
        }
        case 4: {
            int3 = 7538 as graphic;
            int4 = 7534 as graphic;
            break;
        }
    };
    if ((int2 == 1)) {
        IF_SETGRAPHIC(int3, int0);
    } else {
        IF_SETGRAPHIC(int4, int0);
    };
    return;
}