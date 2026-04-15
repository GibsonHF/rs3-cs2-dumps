//
function script10965(int0: int): int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((int0 >= 200)) {
        int3 = 35;
        if ((int0 >= 400)) {
            int3 = (int3 + 70);
            if ((int0 >= 600)) {
                int3 = (int3 + 120);
                if ((int0 >= 1000)) {
                    int3 = (int3 + 100);
                    if ((int0 >= 1250)) {
                        int3 = (int3 + 73);
                    } else {
                        int1 = ((1250 - 1000) / 73);
                        int2 = MIN(((int0 - 1000) / int1), 73);
                        int3 = (int3 + MIN((int2 + ((73 - int2) / 20)), (73 - 1)));
                    };
                } else {
                    int1 = ((1000 - 600) / 100);
                    int2 = MIN(((int0 - 600) / int1), 100);
                    int3 = (int3 + MIN((int2 + ((100 - int2) / 20)), (100 - 1)));
                };
            } else {
                int1 = ((600 - 400) / 120);
                int2 = MIN(((int0 - 400) / int1), 120);
                int3 = (int3 + MIN((int2 + ((120 - int2) / 20)), (120 - 1)));
            };
        } else {
            int1 = ((400 - 200) / 70);
            int2 = MIN(((int0 - 200) / int1), 70);
            int3 = (int3 + MIN((int2 + ((70 - int2) / 20)), (70 - 1)));
        };
    } else {
        int1 = (200 / 35);
        int2 = MIN((int0 / int1), 35);
        int3 = MIN((int2 + ((35 - int2) / 20)), (35 - 1));
    };
    return int3;
}