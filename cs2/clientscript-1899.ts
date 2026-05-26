//
function script1899(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): [number, number, number, number, number] {
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    [int8, int6, int7] = script8107(int0, int2);
    var int9 = (int5 / int8);
    if ((MODULO(int5, int8) > 0)) {
        int9 = (int9 + 1);
    };
    var int10 = (int3 * int9);
    var int11 = 0;
    if ((int10 > int1)) {
        int11 = 1;
        var int0 = (int0 - int4);
        [int8, int6, int7] = script8107(int0, int2);
        int9 = (int5 / int8);
        if ((MODULO(int5, int8) > 0)) {
            int9 = (int9 + 1);
        };
    };
    return [int9, int8, int6, int7, int11];
}