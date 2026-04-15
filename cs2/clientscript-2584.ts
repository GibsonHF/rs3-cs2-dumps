//
function script2584(int0: dbrow, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component, int9: component, int10: component, int11: component, int12: component, int13: component, int14: component, int15: component, int16: unknown_int, int17: unknown_int): void {
    var int18 = DB_GETFIELDCOUNT(int0, 458752);
    if ((int18 > 10)) {
        return;
    };
    var int19 = 0;
    var string0 = "";
    var int20 = -1 as cs2enum;
    var int21 = comp(-1, 65535);
    var int22 = comp(-1, 65535);
    var int23 = comp(-1, 65535);
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int4);
    IF_SETHIDE(true, int7);
    IF_SETHIDE(true, int10);
    IF_SETHIDE(true, int13);
    IF_SETPOSITION(0, 0, 0, 0, int1);
    IF_SETPOSITION(0, 50, 0, 0, int4);
    IF_SETPOSITION(0, 100, 0, 0, int7);
    IF_SETPOSITION(0, 150, 0, 0, int10);
    IF_SETPOSITION(0, 200, 0, 0, int13);
    IF_SETSIZE(0, 50, 1, 0, int1);
    IF_SETSIZE(0, 50, 1, 0, int4);
    IF_SETSIZE(0, 50, 1, 0, int7);
    IF_SETSIZE(0, 50, 1, 0, int10);
    IF_SETSIZE(0, 50, 1, 0, int13);
    IF_SETPARAM_INT(4052, 0, int1);
    IF_SETPARAM_INT(4052, 0, int4);
    IF_SETPARAM_INT(4052, 0, int7);
    IF_SETPARAM_INT(4052, 0, int10);
    IF_SETPARAM_INT(4052, 0, int13);
    if ((int17 == 1)) {
        IF_SETSCROLLPOS(0, 0, IF_GETPARENTLAYER(int1));
    };
    var int24 = 0;
    var int25 = 0;
    var int26 = 1;
    var int27 = 1;
    while ((int19 < int18)) {
        stack(dbrow_getfield(int0, 458752, int19));
        [string0, int20] = stack();
        switch (int19) {
            case 0: {
                int21 = int1;
                int22 = int2;
                int23 = int3;
                break;
            }
            case 1: {
                int21 = int4;
                int22 = int5;
                int23 = int6;
                break;
            }
            case 2: {
                int21 = int7;
                int22 = int8;
                int23 = int9;
                break;
            }
            case 3: {
                int21 = int10;
                int22 = int11;
                int23 = int12;
                break;
            }
            case 4: {
                int21 = int13;
                int22 = int14;
                int23 = int15;
                break;
            }
        };
        if ((CC_FIND[1](int23, 1) == 1)) {
            int27 = 0;
        } else {
            int27 = 1;
        };
        CC_DELETEALL(int23);
        IF_SETHIDE(false, int21);
        IF_SETTEXT(string0, int22);
        int24 = script2603(int20, IF_GETNEXTSUBID(int23), int23, int16);
        IF_SETPARAM_INT(4052, int24, int21);
        if ((int27 == 1)) {
            script9582(int21, 0, 0);
        };
        int19 = (int19 + 1);
    };
    script9581(IF_GETPARENTLAYER(int21));
    return;
}