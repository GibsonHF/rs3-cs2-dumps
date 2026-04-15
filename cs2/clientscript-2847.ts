//
function script2847(int0: component): void {
    var int1 = 308;
    var int2 = 55;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(903 as cs2enum);
    define_array(int4);
    pop_array(0, 5);
    pop_array(1, 8);
    pop_array(2, 2);
    pop_array(3, 0);
    pop_array(4, 4);
    pop_array(5, 1);
    pop_array(6, 3);
    pop_array(7, 7);
    pop_array(8, 6);
    while ((int3 < int4)) {
        if ((CC_FIND(int0, push_array(int3)) == 1)) {
            CC_SETPOSITION(int1, int2, 0, 0);
        };
        if ((++int3 == 3)) {
            int1 = (308 + 48);
            int2 = 55;
        } else if ((int3 == 6)) {
            int1 = (308 + 96);
            int2 = 55;
        } else {
            int2 = (48 + int2);
        };
    };
    return;
}