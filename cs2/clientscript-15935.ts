//
function script15935(int0: obj, int1: inv, int2: int, int3: struct, int4: component, int5: component, int6: int, string0: string): int {
    if (((INV_GETOBJ(int1, int2) != int0) || (INV_GETNUM(int1, int2) == 0))) {
        return int6;
    };
    if ((OC_HASVAROBJ(int0) == 0)) {
        return int6;
    };
    define_array(4);
    define_array[65536](4);
    pop_array(0, INV_GETVAR(int1, int2, 30215));
    pop_array(1, INV_GETVAR(int1, int2, 30217));
    pop_array(2, INV_GETVAR(int1, int2, 30219));
    pop_array(3, INV_GETVAR(int1, int2, 30221));
    pop_array[1](0, INV_GETVAR(int1, int2, 30216));
    pop_array[1](1, INV_GETVAR(int1, int2, 30218));
    pop_array[1](2, INV_GETVAR(int1, int2, 30220));
    pop_array[1](3, INV_GETVAR(int1, int2, 30222));
    var int7 = 0;
    var string1 = "";
    while ((int7 < 4)) {
        string1 = script15936(push_array(int7), push_array[1](int7));
        if ((strcmp(string1, "") != 0)) {
            var int6 = script7235(string1, string0, int3, int4, int5, int6);
        };
        int7 = (int7 + 1);
    };
    return int6;
}