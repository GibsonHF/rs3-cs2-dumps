//
function script21105(): void {
    if (((INV_GETOBJ(int1, int2) != int0) || (INV_GETNUM(int1, int2) == 0))) {
        stack(int6);
        return;
    };
    var int7 = 1010 as inv;
    var int8 = (INV_SIZE(int7) - INV_FREESPACE(int7));
    var int9 = 0;
    var int10 = 0;
    define_array(84);
    define_array[65536](84);
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    while ((int13 < 84)) {
        int13 = (int13 + 1);
        int11 = 0;
        while ((int11 < int8)) {
            int9 = INV_GETVAR(int7, int11, 30215);
            int10 = INV_GETVAR(int7, int11, 30216);
            if ((int9 == int13)) {
                pop_array(int13, int9);
                pop_array[1](int13, MAX(push_array[1](int13), int10));
                int12 = (int12 + 1);
            };
            int9 = INV_GETVAR(int7, int11, 30217);
            int10 = INV_GETVAR(int7, int11, 30218);
            if ((int9 == int13)) {
                pop_array(int13, int9);
                pop_array[1](int13, MAX(push_array[1](int13), int10));
                int12 = (int12 + 1);
            };
            int9 = INV_GETVAR(int7, int11, 30219);
            int10 = INV_GETVAR(int7, int11, 30220);
            if ((int9 == int13)) {
                pop_array(int13, int9);
                pop_array[1](int13, MAX(push_array[1](int13), int10));
                int12 = (int12 + 1);
            };
            int9 = INV_GETVAR(int7, int11, 30221);
            int10 = INV_GETVAR(int7, int11, 30222);
            if ((int9 == int13)) {
                pop_array(int13, int9);
                pop_array[1](int13, MAX(push_array[1](int13), int10));
                int12 = (int12 + 1);
            };
            int11 = (int11 + 1);
        };
    };
    var int14 = 0;
    var string1 = "";
    var int6 = script7235("Stored Perks:", string0, int3, int4, int5, int6);
    if ((int12 == 0)) {
        int6 = script7235("None!", string0, int3, int4, int5, int6);
        stack(int6);
        return;
    };
    while ((int14 < 84)) {
        if ((enum_hasoutput(0, 13420 as cs2enum, push_array(int14)) == 0)) {
            pop_array[1](int14, ((push_array[1](int14) + 0) * 2));
        };
        string1 = script15936(push_array(int14), push_array[1](int14));
        if ((strcmp(string1, "") != 0)) {
            int6 = script7235(string1, string0, int3, int4, int5, int6);
        };
        int14 = (int14 + 1);
    };
    stack(int6);
    return;
}