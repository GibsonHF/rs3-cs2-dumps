//
function script12527(int0: int): [component, component] {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 0: {
            int1 = comp(467, 3);
            int2 = comp(467, 17);
            break;
        }
        case 1: {
            int1 = comp(467, 4);
            int2 = comp(467, 25);
            break;
        }
        case 2: {
            int1 = comp(467, 5);
            int2 = comp(467, 33);
            break;
        }
        case 3: {
            int1 = comp(467, 6);
            int2 = comp(467, 41);
            break;
        }
        case 4: {
            int1 = comp(467, 7);
            int2 = comp(467, 49);
            break;
        }
    };
    return [int1, int2];
}