//
function script15515(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as dbrow;
    var int9 = 0;
    var string0 = "";
    define_array(67);
    var int10 = 0;
    while ((int7 == 0)) {
        CC_CREATE(int0, 5, int6);
        CC_CREATE(int1, 4, int6);
        CC_CREATE(int2, 3, int6);
        CC_CREATE(int5, 4, int6);
        CC_CREATE(int3, 4, int6);
        CC_CREATE(int4, 4, int6);
        stack(495616);
        stack(int6);
        DB_FIND(0);
        dbrow_findnext();
        int8 = stack();
        if ((int8 == -1)) {
            int7 = 1;
        } else {
            pop_array(int6, int6);
            switch (varbitplayer_12077) {
                case 0:
                case 1: {
                    if ((dbrow_getfield(int8, 495696, 0) != -1 as dbrow)) {
                        int8 = dbrow_getfield(int8, 495696, 0);
                    };
                    string0 = dbrow_getfield(int8, 495648, 0);
                    break;
                }
                case 2: {
                    string0 = dbrow_getfield(int8, 495664, 0);
                    break;
                }
            };
            if ((CC_FIND(int5, int6) == 1)) {
                CC_SETPARAM_STRING(5441, LOWERCASE(string0));
            };
            stack(495616);
            stack(int6);
            DB_FIND(0);
            dbrow_findnext();
            stack(495632);
            stack(0);
            dbrow_getfield();
            int10 = stack();
            stack(int8);
            stack(495632);
            stack(0);
            dbrow_getfield();
            if ((((script3101(stack()) == 1) && (script15320(int10) == 1)) && (script3104(int10) == 1))) {
                int9 = (int9 + 1);
            };
        };
        int6 = (int6 + 1);
    };
    script17567(0, int5, 0, (67 - 1));
    script15516(0, int0, int1, int2, int3, int4, int5);
    IF_SETTEXT(`${inttostring(int9, 10)}/${inttostring(56, 10)}`, comp(784, 53));
    script8841(86, 1);
    return;
}