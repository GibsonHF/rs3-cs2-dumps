//
function script15599(int0: int, int1: int, int2: int): int {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    var int8 = -1 as chatphrase;
    var int9 = -1;
    var int1 = MAX(int1, (script1960() - (200 - 1)));
    while ((int1 <= int2)) {
        stack(unk11059(int1));
        [int3, string0, int7, string0, string0, string0, string0, int8, string0, int7, int9] = stack();
        switch (int3) {
            case 3:
            case 7:
            case 18: {
                int4 = (int4 + 1);
                break;
            }
            case 9:
            case 20: {
                int5 = (int5 + 1);
                break;
            }
            case 41:
            case 42:
            case 44:
            case 45: {
                if ((int9 == 0)) {
                    int6 = (int6 + 1);
                };
                break;
            }
        };
        int1 = (int1 + 1);
    };
    switch (int0) {
        case 2: {
            return int4;
        }
        case 3: {
            return int5;
        }
        case 4: {
            return int6;
        }
    };
    return 0;
}