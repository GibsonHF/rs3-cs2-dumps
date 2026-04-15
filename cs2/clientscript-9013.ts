//
function script9013(int0: unknown_int): void {
    var int1 = 20130;
    switch (MAP_LANG()) {
        case 0: {
            int1 = 20130;
            break;
        }
        case 2: {
            int1 = 20133;
            break;
        }
        case 3: {
            int1 = 20136;
            break;
        }
        case 1: {
            int1 = 20127;
            break;
        }
        case 6: {
            int1 = 20167;
            break;
        }
    };
    stack(int1);
    stack(int0);
    IF_SETGRAPHIC();
    return;
}