//
function script19643(int0: int): [cs2enum, cs2enum, component] {
    var int1 = -1 as cs2enum;
    var int2 = -1 as cs2enum;
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = 6410 as cs2enum;
            int2 = 6411 as cs2enum;
            int3 = comp(654, 40);
            break;
        }
        case 2: {
            if ((PLAYERMEMBER() == true)) {
                int1 = 6412 as cs2enum;
            } else {
                int1 = 6106 as cs2enum;
            };
            int2 = 6413 as cs2enum;
            int3 = comp(654, 34);
            break;
        }
        case 3: {
            if ((PLAYERMEMBER() == true)) {
                int1 = 6414 as cs2enum;
            } else {
                int1 = 6107 as cs2enum;
            };
            int2 = 6415 as cs2enum;
            int3 = comp(654, 28);
            break;
        }
        case 4: {
            if ((PLAYERMEMBER() == true)) {
                int1 = 6416 as cs2enum;
            } else {
                int1 = 6120 as cs2enum;
            };
            int2 = 6487 as cs2enum;
            int3 = comp(654, 22);
            break;
        }
        case 5: {
            if ((PLAYERMEMBER() == true)) {
                int1 = 6488 as cs2enum;
            } else {
                int1 = 6157 as cs2enum;
            };
            int2 = 6489 as cs2enum;
            int3 = comp(654, 16);
            break;
        }
        case 6: {
            if ((PLAYERMEMBER() == true)) {
                int1 = 1899 as cs2enum;
            } else {
                int1 = 6163 as cs2enum;
            };
            int2 = 16536 as cs2enum;
            int3 = comp(654, 10);
            break;
        }
    };
    return [int1, int2, int3];
}