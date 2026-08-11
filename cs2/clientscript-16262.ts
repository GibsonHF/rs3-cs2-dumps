//
function script16262(int0: number): void {
    var int1 = comp(908, 4);  // teleport_list:button_layer
    var int2 = comp(908, 5);  // teleport_list:category_title_layer
    var int3 = comp(908, 6);  // teleport_list:category_obj_layer
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int4 = DB_GETFIELDCOUNT(int0, 1495040);
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 10;
    var int9 = 5;
    int5 = (int5 + 1);
    while ((int5 < int4)) {
        int6 = dbrow_getfield(int0, 1495040, int5);
        if ((int6 != -1)) {
            int7 = dbrow_getfield(int6, 1499152, 0);
            if ((int4 > 1)) {
                if ((int5 > 0)) {
                    int9 = (int9 + 30);
                };
                if ((int7 != -1)) {
                    script9802(int3, int5, int8, int9, 0, 0, 36, 32, 0, 0, int7, 1, 1, 0);
                    int8 = (int8 + (36 + 2));
                };
                script2995(int2, int5, int8, int9, 0, 0, 0, 25, 1, 0, 2064, dbrow_getfield(int6, 1499136, 0));
                int9 = (int9 + 25);
                int8 = 10;
            };
            int9 = script16263(int6, int1, int9);
        };
    };
    script8841(109, 1);
    IF_SETSCROLLSIZE(0, (int9 + 29), int1);
    IF_SETSCROLLPOS(0, 0, int1);
    script7791(59506691, int1);
    return;
}