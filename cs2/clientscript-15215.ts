//
function script15215(int0: obj, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, string0: string, string1: string): [int, int, int, int] {
    var int7 = (100 - 74);
    if ((int7 > 0)) {
        int7 = (int7 / 2);
    };
    var int8 = 0;
    var int9 = 0;
    if ((STRING_LENGTH(string0) == 0)) {
        var string0 = OC_NAME(int0);
    };
    if ((STRING_LENGTH(string1) == 0)) {
        var string1 = item_getparam(int0, 4085);
    };
    if ((STRING_LENGTH(string1) == 0)) {
        string1 = OC_DESC(int0);
    };
    if ((STRING_LENGTH(string1) > 0)) {
        int9 = 1;
    };
    var int10 = script8948(int6);
    var int11 = 0;
    var int12 = 0;
    if ((int6 != 10)) {
        int11 = script16708(comp(1253, 451), int6, int10, 0, (int2++ + int12), (int3 + int7), (int4 - 1), 0, 0, 74, 90, 0, 0);
        if ((int11 <= 0)) {
            script7918(0, (int2++ + int12), (int3 + int7), (int4 - 1), 0, 0, 74, 90, 0, 0, int10);
        } else {
            int12 = (int12 + int11);
            int11 = 0;
        };
        if ((int9 == 1)) {
            int8 = script15374(int0, int1, 15371 as graphic, string0, int6, string1, 36, 32, false);
        };
    };
    int7 = (100 - 36);
    if ((int7 > 0)) {
        int7 = (int7 / 2);
    };
    var int13 = (100 - 32);
    if ((int13 > 0)) {
        int13 = (int13 / 2);
    };
    script9861(0, (int2++ + int12), (int3 + int7), ((int4 + int13) - 5), 0, 0, 36, 32, 0, 0, int0, int1, 0, 1);
    if (((int8 == 0) && (int9 == 1))) {
        script15374(int0, -1, 15371 as graphic, string0, int6, string1, 36, 32, false);
    };
    var int5 = (int5 + 1);
    var int3 = (int3 + 117);
    return [(int2 + int12), int3, int5, 100];
}