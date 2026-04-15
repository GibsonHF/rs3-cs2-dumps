//
function script14912(int0: dbrow): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    var int1 = dbrow_getfield(int0, 364640, 0);
    var int2 = 20;
    define_array[74](int2);
    var int3 = DB_LISTALL(83);
    define_array[65610](int3);
    var int4 = db_find_with_count(344272, int1, 0);
    if ((int4 == 0)) {
        return "None";
    };
    int4 = DB_FIND_REFINE(344096, 2, 0);
    define_array[131146](int4);
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    while ((++int6 < int4)) {
        stack(int6);
        dbrow_findnext();
        pop_array[2](stack());
    };
    int6 = -1;
    while ((++int6 < int4)) {
        int3 = db_find_with_count(340080, push_array[2](int6), 0);
        int7 = -1;
        while ((++int7 < int3)) {
            stack(int7);
            dbrow_findnext();
            pop_array[1](stack());
        };
        int7 = -1;
        while ((++int7 < int3)) {
            int2 = db_find_with_count(335984, push_array[1](int7), 0);
            int8 = -1;
            while ((++int8 < int2)) {
                stack(int5++);
                dbrow_findnext();
                pop_array(stack());
            };
        };
    };
    var string0 = "";
    var int9 = -1 as dbrow;
    int6 = 0;
    while ((int6 < int5)) {
        int9 = push_array(int6);
        if ((int9 != -1 as dbrow)) {
            int7 = 0;
            while ((++int6 < int5)) {
                if ((push_array(int6) != int9)) {
                    pop_array(int7++, push_array(int6));
                };
            };
            int6 = 0;
            int5 = int7;
            string0 = `${string0}${dbrow_getfield(int9, 335888, 0)}, `;
        };
    };
    if ((STRING_LENGTH(string0) > 0)) {
        return SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 2));
    };
    return "None";
}