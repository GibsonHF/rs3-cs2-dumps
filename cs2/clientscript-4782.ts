//
function script4782(int0: unknown_int, int1: unknown_int, int2: unknown_int): void {
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
        stack(int3);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        stack(int4);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}