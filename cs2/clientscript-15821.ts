//
function script15821(int0: int, int1: int, int2: boolean, int3: int): [unknown_int, boolean, int] {
    var int4 = -1 as struct;
    var int5 = -1 as struct;
    var int6 = -1 as graphic;
    var int7 = -1 as graphic;
    var int8 = -1 as dbrow;
    [int4, int5, int6, int7, int8] = dbrow_getfield(4168 as dbrow, 552960, int0);
    if ((script3911(int4, int0) == 0)) {
        return [0, int2, int3];
    };
    var int9 = (int0 - int1);
    var int10 = script6488(int4);
    if ((TESTBIT(varplayer_9884, int0) == 1)) {
        int10 = 1;
    };
    var int11 = struct_getparam(int4, 9311);
    var int12 = 14;
    var int13 = comp(855, 5);
    var int14 = script3921(int0);
    var string0 = script3919(int4, int10);
    var int15 = script3920(int4, int10);
    var string1 = "";
    var int16 = 0;
    var int17 = int6;
    var string2 = struct_getparam(int4, 8974);
    var int18 = struct_getparam(int4, 8975);
    var int19 = struct_getparam(int4, 4742);
    var int20 = struct_getparam(int4, 4743);
    var int21 = script12660(int8, int14);
    var string3 = struct_getparam(int4, 2533);
    var int22 = struct_getparam(int4, 8976);
    if ((((STRING_LENGTH(string2) == 0) || (int18 == true)) && ((int19 + 30) >= DATE_RUNEDAY()))) {
        string2 = "New!";
    } else if ((((STRING_LENGTH(string2) == 0) || (int18 == true)) && ((int20 - 14) < DATE_RUNEDAY()))) {
        string2 = "Ending Soon!";
    };
    if ((int14 != int21)) {
        if ((STRING_LENGTH(string2) == 0)) {
            string2 = `${inttostring(dbrow_getfield(int8, 569376, 0), 10)}% Off!`;
        } else {
            string2 = `${string2}<br>${inttostring(dbrow_getfield(int8, 569376, 0), 10)}% Off!`;
        };
    };
    if ((GENDER() == 1)) {
        int17 = int7;
    };
    int17 = script17339(int5, int17);
    if (((int11 == true) && (int2 == true))) {
        int12 = (14 + 225);
        int11 = false;
    } else if ((int9 > 0)) {
        var int3 = ((int3 + 255) + 30);
    };
    script15083(int13, int3, int12, 255, 430, string0, int15, int0, int17, string3, "", string2, int22, int4, int10, int14, int21, 0);
    return [1, int11, int3];
}