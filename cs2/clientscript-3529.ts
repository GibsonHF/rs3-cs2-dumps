//
function script3529(int0: dbrow, int1: int): [component, component] {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 3920: {
            switch (int1) {
                case 0: {
                    int2 = comp(855, 23);
                    int3 = comp(855, 24);
                    break;
                }
                case 2:
                case 6:
                case 7:
                case 9:
                case 1: {
                    int2 = comp(843, 13);
                    int3 = comp(843, 14);
                    break;
                }
                case 3: {
                    int2 = comp(853, 11);
                    int3 = comp(853, 47);
                    break;
                }
                case 4: {
                    break;
                }
                case 5: {
                    int2 = comp(854, 3);
                    int3 = comp(854, 4);
                    break;
                }
            };
            break;
        }
        case 8256: {
            switch (int1) {
                case 0: {
                    int2 = comp(1227, 55);
                    int3 = comp(1227, 58);
                    break;
                }
                case 1: {
                    int2 = comp(1226, 36);
                    int3 = comp(1226, 39);
                    break;
                }
                case 2: {
                    int2 = comp(843, 13);
                    int3 = comp(843, 14);
                    break;
                }
                case 3: {
                    int2 = comp(403, 20);
                    int3 = comp(403, 21);
                    break;
                }
            };
            break;
        }
    };
    return [int2, int3];
}