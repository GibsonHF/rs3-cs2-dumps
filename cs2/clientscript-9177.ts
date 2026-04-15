//
function script9177(int0: cs2enum, int1: unknown_int, int2: int): int {
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int0);
    define_array(int4);
    define_array[65536](int4);
    define_array[131072](int4);
    define_array[196608](int4);
    define_array[262144](int4);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 1;
    var int14 = int2;
    var int15 = 0;
    var int16 = -1 as struct;
    while ((int3 < int4)) {
        int16 = enum_getvalue(0, 73, int0, (1 + int3));
        if ((((int1 == 0) || (script9178(struct_getparam(int16, 1268)) == 1)) && ((struct_getparam(int16, 3812) == 0) || (script3224(struct_getparam(int16, 1268)) == 1)))) {
            [int5, int6] = script9132(struct_getparam(int16, 1268));
            switch (int5) {
                case 0:
                case 4:
                case 1: {
                    pop_array(int7, int3);
                    int7 = (int7 + 1);
                    break;
                }
                case 2:
                case 5: {
                    pop_array[1](int8, int3);
                    int8 = (int8 + 1);
                    break;
                }
                case 3:
                case 6:
                case 7: {
                    pop_array[2](int9, int3);
                    int9 = (int9 + 1);
                    break;
                }
                case -1: {
                    pop_array[3](int10, int3);
                    int10 = (int10 + 1);
                    break;
                }
            };
            pop_array[4](int3, int6);
        };
        int3 = (int3 + 1);
    };
    while ((int13 < int7)) {
        int11 = push_array(int13);
        int15 = struct_getparam(enum_getvalue(0, 73, int0, (1 + int11)), 3632);
        int12 = int13;
        while (((int12 > 0) && (int15 < struct_getparam(enum_getvalue(0, 73, int0, (1 + push_array((int12 - 1)))), 3632)))) {
            pop_array(int12, push_array((int12 - 1)));
            int12 = (int12 - 1);
        };
        pop_array(int12, int11);
        int13 = (int13 + 1);
    };
    int11 = 0;
    int12 = 0;
    int13 = 1;
    int15 = 0;
    while ((int13 < int8)) {
        int11 = push_array[1](int13);
        int15 = push_array[4](int11);
        int12 = int13;
        while (((int12 > 0) && (int15 > push_array[4](push_array[1]((int12 - 1)))))) {
            pop_array[1](int12, push_array[1]((int12 - 1)));
            int12 = (int12 - 1);
        };
        pop_array[1](int12, int11);
        int13 = (int13 + 1);
    };
    int11 = 0;
    int12 = 0;
    int13 = 1;
    int15 = 0;
    while ((int13 < int9)) {
        int11 = push_array[2](int13);
        int15 = struct_getparam(enum_getvalue(0, 73, int0, (1 + int11)), 3632);
        int12 = int13;
        while (((int12 > 0) && (int15 < struct_getparam(enum_getvalue(0, 73, int0, (1 + push_array[2]((int12 - 1)))), 3632)))) {
            pop_array[2](int12, push_array[2]((int12 - 1)));
            int12 = (int12 - 1);
        };
        pop_array[2](int12, int11);
        int13 = (int13 + 1);
    };
    int14 = int2;
    int13 = 0;
    while ((int13 < int10)) {
        script9173(push_array[3](int13), int14);
        int14 = (int14 + 1);
        int13 = (int13 + 1);
    };
    int13 = 0;
    while ((int13 < int9)) {
        script9173(push_array[2](int13), int14);
        int14 = (int14 + 1);
        int13 = (int13 + 1);
    };
    int13 = 0;
    while ((int13 < int8)) {
        script9173(push_array[1](int13), int14);
        int14 = (int14 + 1);
        int13 = (int13 + 1);
    };
    int13 = 0;
    while ((int13 < int7)) {
        script9173(push_array(int13), int14);
        int14 = (int14 + 1);
        int13 = (int13 + 1);
    };
    return int14;
}