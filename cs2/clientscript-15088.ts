//
function script15088(int0: graphic, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: boolean, string0: string, string1: string): [int, int, int, int] {
    var int9 = (100 - int4);
    if ((int9 > 0)) {
        int9 = (int9 / 2);
    };
    var int10 = (100 - int5);
    if ((int10 > 0)) {
        int10 = (int10 / 2);
    };
    var int11 = script8948(int7);
    var int12 = 0;
    var int13 = 0;
    if ((script17027(int7, int8) == 1)) {
        int12 = script16708(comp(1253, 451), int7, int11, 0, (int1++ + int13), (int2 + int9), (int3 - 1), 0, 0, 74, 90, 0, 0);
        if ((int12 <= 0)) {
            script7918(0, (int1++ + int13), (int2 + (int9 / 2)), (int3 - 1), 0, 0, 74, 90, 0, 0, int11);
        };
    };
    script7918(0, int1++, (int2 + int9), (int3 + int10), 0, 0, int4, int5, 0, 0, int0);
    if (((STRING_LENGTH(string0) > 0) && (STRING_LENGTH(string1) > 0))) {
        script15374(52587 as obj, -1, int0, string0, int7, string1, int4, int5, int8);
    };
    var int6 = (int6 + 1);
    var int2 = (int2 + 117);
    return [int1, int2, int6, 100];
}