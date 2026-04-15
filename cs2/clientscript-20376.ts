//
function script20376(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(1253, 411);
            break;
        }
        case 2: {
            int1 = comp(1253, 414);
            break;
        }
        case 3: {
            int1 = comp(1253, 417);
            break;
        }
        case 4: {
            int1 = comp(1253, 420);
            break;
        }
        case 5: {
            int1 = comp(1253, 423);
            break;
        }
        case 6: {
            int1 = comp(1253, 426);
            break;
        }
        case 7: {
            int1 = comp(1253, 429);
            break;
        }
        case 8: {
            int1 = comp(1253, 432);
            break;
        }
    };
    IF_SETOPCURSOR(1, 46 as cursor, int1);
    script20377(int0, int1);
    return;
}