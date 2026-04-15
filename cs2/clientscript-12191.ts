//
function script12191(int0: obj): unknown_int {
    if ((item_getparam(int0, 8344) == true)) {
        return 1;
    };
    define_array[74](9);
    define_array[65536](9);
    var int1 = 9;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as dbrow;
    while ((int1-- > 0)) {
        if ((CC_FIND(comp(1712, 3), int1) == 1)) {
            int5 = cc_getparam(5529);
            if ((int5 != -1 as dbrow)) {
                int4 = 1;
                int2 = -1;
                while ((++int2 < int3)) {
                    if ((int5 == push_array(int2))) {
                        pop_array[1](int2, (push_array[1](int2) + int4));
                        int2 = int3;
                        int4 = 0;
                    };
                };
                if ((int4 > 0)) {
                    pop_array[1](int3, int4);
                    pop_array(int3, int5);
                    int3 = (int3 + 1);
                };
            };
        };
    };
    var int6 = -1;
    var string0 = "";
    var string1 = "";
    int1 = -1;
    while ((++int1 < int3)) {
        if ((((push_array(int1) != -1) && (push_array[1](int1) > 0)) && (script12054(dbrow_getfield(push_array(int1), 16384, 0)) < (push_array[1](int1) * script12065(push_array(int1)))))) {
            return 0;
        };
    };
    return 1;
}