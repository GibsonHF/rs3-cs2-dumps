//
function script8398(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): [int, int, int, int] {
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