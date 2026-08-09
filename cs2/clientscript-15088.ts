//
function script15088(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, string0: string, string1: string): [number, number, number, number] {
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
        stack(82117059);
        stack(int7);
        stack(int11);
        stack(0);
        stack(int1);
        var int1 = (int1 + 1);
        int12 = script16708(ADD(int13), (int2 + int9), (int3 - 1), 0, 0, 74, 90, 0, 0);
        if ((int12 <= 0)) {
            stack(0);
            stack(int1);
            int1 = (int1 + 1);
            script7918(ADD(int13), (int2 + (int9 / 2)), (int3 - 1), 0, 0, 74, 90, 0, 0, int11);
        };
    };
    stack(0);
    stack(int1);
    int1 = (int1 + 1);
    script7918((int2 + int9), (int3 + int10), 0, 0, int4, int5, 0, 0, int0);
    if (((STRING_LENGTH(string0) > 0) && (STRING_LENGTH(string1) > 0))) {
        script15374(52587, -1, int0, string0, int7, string1, int4, int5, int8);
    };
    var int6 = (int6 + 1);
    var int2 = (int2 + 117);
    return [int1, int2, int6, 100];
}