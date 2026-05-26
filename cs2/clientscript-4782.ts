//
function script4782(int0: number, int1: number, int2: number): void {
    var int3 = -1;
    var int4 = -1;
    switch (int1) {
        case 1: {
            int3 = 7541;
            int4 = 7537;
            break;
        }
        case 2: {
            int3 = 7540;
            int4 = 7536;
            break;
        }
        case 3: {
            int3 = 7539;
            int4 = 7535;
            break;
        }
        case 4: {
            int3 = 7538;
            int4 = 7534;
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