//
function script12946(): void {
    var int0 = varbitplayer_38874;
    var int1 = ((varbitplayer_38879 + varbitplayer_38880) + varbitplayer_38881);
    var int2 = script14441();
    IF_SETTEXT(struct_getparam(int2, 6208), comp(1808, 16));
    IF_SETTEXT(struct_getparam(int2, 6209), comp(1808, 24));
    var int3 = -1 as dbrow;
    var int4 = 5;
    var int5 = 0;
    var int6 = 4;
    var int7 = -1 as struct;
    var int8 = 0;
    var int9 = 0;
    int8 = (((int6 - 1) / 2) + 1);
    var string0 = "";
    int9 = script5276(int6, int8);
    var int10 = ((IF_GETHEIGHT(comp(1808, 23)) - (int4 * (int8 - 1))) / int8);
    var int11 = ((IF_GETWIDTH(comp(1808, 23)) - (int4 * (int9 - 1))) / int9);
    var int12 = 0;
    while ((int5 < int6)) {
        stack(57344);
        stack(int5);
        DB_FIND(0);
        dbrow_findnext();
        int3 = stack();
        if ((int3 != -1)) {
            int7 = enum_getvalue(0, 73, 11921 as cs2enum, int5);
            IF_SETTEXT(dbrow_getfield(int3, 57424, 0), struct_getparam(int7, 6215));
            IF_SETTEXT(dbrow_getfield(int3, 57472, 0), struct_getparam(int7, 6216));
            if ((dbrow_getfield(int3, 57376, 0) != -1 as graphic)) {
                stack(dbrow_getfield(int3, 57376, 0));
                stack(struct_getparam(int7, 6221));
                IF_SETGRAPHIC();
                stack(0);
                stack(int7);
                stack(6221);
                struct_getparam();
                IF_SETHIDE(stack());
            } else if ((dbrow_getfield(int3, 57392, 0) != -1 as model)) {
                IF_SETMODEL(dbrow_getfield(int3, 57392, 0), struct_getparam(int7, 6220));
                IF_SETHIDE(false, struct_getparam(int7, 6220));
            };
            if ((varplayer_3079 < dbrow_getfield(int3, 57360, 0))) {
                IF_SETHIDE(false, struct_getparam(int7, 6217));
                IF_SETTEXT(dbrow_getfield(int3, 57440, 0), struct_getparam(int7, 6218));
            };
            IF_SETHIDE(false, struct_getparam(int7, 6214));
            switch (int5) {
                case 0:
                case 1:
                case 3: {
                    if ((int0 >= dbrow_getfield(int3, 57488, 0))) {
                        IF_SETHIDE(false, struct_getparam(int7, 6219));
                    };
                    break;
                }
                case 2: {
                    if ((int1 >= dbrow_getfield(int3, 57488, 0))) {
                        IF_SETHIDE(false, struct_getparam(int7, 6219));
                    };
                    break;
                }
            };
            IF_SETSIZE(int11, int10, 0, 0, struct_getparam(int7, 6214));
            int12 = (int5 / int9);
            if ((MODULO(int5, 2) == 0)) {
                IF_SETPOSITION(0, ((int12 * int10) + (int12 * int4)), 0, 0, struct_getparam(int7, 6214));
            } else {
                IF_SETPOSITION(0, ((int12 * int10) + (int12 * int4)), 2, 0, struct_getparam(int7, 6214));
            };
        };
        int5 = (int5 + 1);
    };
    return;
}