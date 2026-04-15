//
function script12193(): string {
    define_array[74](9);
    define_array[65536](9);
    pop_array(0, varplayer_6079);
    pop_array(1, varplayer_6080);
    pop_array(2, varplayer_6081);
    pop_array(3, varplayer_6082);
    pop_array(4, varplayer_6083);
    pop_array(5, varplayer_6084);
    pop_array(6, varplayer_6085);
    pop_array(7, varplayer_6086);
    pop_array(8, varplayer_6087);
    var int0 = 9;
    var int1 = 0;
    var int2 = 0;
    while ((int0-- > 0)) {
        int2 = (push_array[1](int0) + 1);
        int1 = int0;
        while ((int1-- > 0)) {
            if ((push_array(int0) == push_array(int1))) {
                pop_array[1](int1, (push_array[1](int1) + int2));
                int1 = -1;
                int2 = 0;
            };
        };
        pop_array[1](int0, int2);
    };
    var int3 = -1;
    var string0 = "";
    var string1 = "";
    int0 = -1;
    while ((++int0 < 9)) {
        if (((push_array(int0) != -1) && (push_array[1](int0) > 0))) {
            pop_array[1](int0, (push_array[1](int0) * script12065(push_array(int0))));
            string0 = `${string0}${string1}${TOSTRING_LOCALISED(push_array[1](int0), 1)} x ${dbrow_getfield(push_array(int0), 16400, 0)}`;
            string1 = ", ";
        };
    };
    return string0;
}