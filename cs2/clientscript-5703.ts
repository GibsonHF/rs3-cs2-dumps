//
function script5703(int0: int): int {
    var int1 = 25;
    switch (int0) {
        case 1: {
            int1 = 25;
            break;
        }
        case 2: {
            int1 = 60;
            break;
        }
        case 3: {
            int1 = 120;
            break;
        }
        case 4: {
            int1 = 300;
            break;
        }
        case 5: {
            int1 = 850;
            break;
        }
        case 6: {
            int1 = 1000;
            break;
        }
        case 7: {
            int1 = 1750;
            break;
        }
        default: {
            script12478(`Unexpected rarity ID ${inttostring(int0, 10)}, falling back to white value`);
            break;
        }
    };
    int1 = script17695(int1);
    return int1;
}