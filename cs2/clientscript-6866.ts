//
function script6866(): void {
    CC_DELETEALL(comp(1360, 0));
    CC_DELETEALL(comp(1360, 2));
    CC_DELETEALL(comp(1360, 1));
    var int0 = ENUM_GETOUTPUTCOUNT(6570 as cs2enum);
    var int1 = 0;
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    define_array(int0);
    define_array[65536](int0);
    while ((int1 < int0)) {
        pop_array(int1, struct_getparam(enum_getvalue(0, 73, 6570 as cs2enum, int2), 2769));
        pop_array[1](int1, int3);
        int3 = script6867(int3, int2);
        int1 = (int1 + 1);
        int2 = (int2 + 1);
    };
    ARRAY_SORT(int0, 0, 1);
    int1 = 0;
    int3 = 0;
    while ((int1 < int0)) {
        int3 = script6868(push_array[1](int1), int1, int3);
        int1 = (int1 + 1);
    };
    return;
}