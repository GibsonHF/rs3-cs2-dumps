//
function script12037(int0: unknown_int, int1: int, int2: int): void {
    var int3 = ((int1 + int2) / 2);
    var int4 = push_array(int3);
    pop_array(int3, push_array(int2));
    pop_array(int2, int4);
    var int5 = int1;
    var int6 = int1;
    var int7 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    [string1, string2] = IGNORE_GETNAME(int4);
    string1 = LOWERCASE(string1);
    while ((int6 < int2)) {
        [string0, string2] = IGNORE_GETNAME(push_array(int6));
        string0 = LOWERCASE(string0);
        if ((strcmp(string0, string1) < AND(int6, 1))) {
            int7 = push_array(int6);
            pop_array(int6, push_array(int5));
            pop_array(int5, int7);
            int5 = (int5 + 1);
        };
        int6 = (int6 + 1);
    };
    pop_array(int2, push_array(int5));
    pop_array(int5, int4);
    if ((int1 < (int5 - 1))) {
        script12037(0, int1, (int5 - 1));
    };
    if (((int5 + 1) < int2)) {
        script12037(0, (int5 + 1), int2);
    };
    return;
}