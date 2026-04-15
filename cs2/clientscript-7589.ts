//
function script7589(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): [int, int, int, int, int, int] {
    define_array(6);
    define_array[65536](6);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    pop_array(0, int0);
    pop_array(1, int1);
    pop_array(2, int2);
    pop_array(3, int3);
    pop_array(4, int4);
    pop_array(5, int5);
    pop_array[1](0, 0);
    pop_array[1](1, 1);
    pop_array[1](2, 2);
    pop_array[1](3, 3);
    pop_array[1](4, 4);
    pop_array[1](5, 5);
    ARRAY_SORT(6, 0, 1);
    var int12 = 0;
    while ((int12 < 6)) {
        if ((push_array[1](int12) == 0)) {
            int6 = (6 - int12);
        };
        if ((push_array[1](int12) == 1)) {
            int7 = (6 - int12);
        };
        if ((push_array[1](int12) == 2)) {
            int8 = (6 - int12);
        };
        if ((push_array[1](int12) == 3)) {
            int9 = (6 - int12);
        };
        if ((push_array[1](int12) == 4)) {
            int10 = (6 - int12);
        };
        if ((push_array[1](int12) == 5)) {
            int11 = (6 - int12);
        };
        int12 = (int12 + 1);
    };
    return [int6, int7, int8, int9, int10, int11];
}