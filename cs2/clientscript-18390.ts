//
function script18390(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(1253, 134);
            break;
        }
        case 2: {
            int1 = comp(1253, 137);
            break;
        }
        case 3: {
            int1 = comp(1253, 140);
            break;
        }
        case 4: {
            int1 = comp(1253, 143);
            break;
        }
        case 5: {
            int1 = comp(1253, 146);
            break;
        }
        case 6: {
            int1 = comp(1253, 149);
            break;
        }
        case 7: {
            int1 = comp(1253, 152);
            break;
        }
        case 8: {
            int1 = comp(1253, 155);
            break;
        }
    };
    IF_SETOPCURSOR(1, 46 as cursor, int1);
    script18391(int0, int1);
    return;
}