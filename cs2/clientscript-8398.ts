//
function script8398(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): [number, number, number, number] {
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    int8 = MAX(int0, int4);
    int10 = MAX(int1, int5);
    int9 = MIN(int2, int6);
    int11 = MIN(int3, int7);
    if (((int8 >= int9) || (int10 >= int11))) {
        return [0, 0, 0, 0];
    };
    int8 = (int2 - int4);
    int8 = MAX(int8, (0 - int8));
    int9 = (int0 - int6);
    int9 = MAX(int9, (0 - int9));
    int10 = (int3 - int5);
    int10 = MAX(int10, (0 - int10));
    int11 = (int1 - int7);
    int11 = MAX(int11, (0 - int11));
    return [int8, int9, int10, int11];
}