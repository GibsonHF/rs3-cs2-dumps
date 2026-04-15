//
function script5747(int0: dbrow): int {
    var int1 = 0;
    define_array[74](30);
    var int2 = 0;
    pop_array(int2, int0);
    var int3 = 0;
    while ((int2 > -1)) {
        var int0 = push_array(int2);
        if ((script5759(int0) == 1)) {
            int1 = (int1 + script17032(int0));
            int3 = (DB_GETFIELDCOUNT(int0, 409600) - 1);
            while ((int3 > -1)) {
                pop_array(int2++, dbrow_getfield(int0, 409600, int3--));
            };
        };
        int2 = (int2 - 1);
    };
    return int1;
}