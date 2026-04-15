//
function script15598(): [int, int, int, int, int, int] {
    var int0 = 0;
    var int1 = -1;
    var int2 = 0;
    var int3 = -1;
    var int4 = 0;
    var int5 = -1;
    var int6 = script1960();
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var string0 = "";
    var int10 = -1 as chatphrase;
    var int11 = -1;
    stack(unk11059(int6));
    [int8, string0, int9, string0, string0, string0, string0, int10, string0, int9, int11] = stack();
    while (((int7 < 200) && (int8 != -1))) {
        switch (int8) {
            case 3:
            case 7:
            case 18: {
                int0 = (int0 + 1);
                if ((int1 == -1)) {
                    int1 = int6;
                };
                break;
            }
            case 9:
            case 20: {
                int4 = (int4 + 1);
                if ((int5 == -1)) {
                    int5 = int6;
                };
                break;
            }
            case 41:
            case 42:
            case 44:
            case 45: {
                if ((int11 == 0)) {
                    int2 = (int2 + 1);
                    if ((int3 == -1)) {
                        int3 = int6;
                    };
                };
                break;
            }
        };
        int7 = (int7 + 1);
        stack(unk11059(--int6));
        [int8, string0, int9, string0, string0, string0, string0, int10, string0, int9, int11] = stack();
    };
    return [int0, int1, int2, int3, int4, int5];
}