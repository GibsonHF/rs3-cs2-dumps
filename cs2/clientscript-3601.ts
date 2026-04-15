//
function script3601(int0: dbrow, int1: int, int2: int): string {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1 as obj;
    var int7 = -1 as obj;
    var int8 = -1 as npc;
    var int9 = -1 as loc;
    var int10 = false;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    stack(dbrow_getfield(int0, 303344, int1));
    [int4, int3, int5, int6, int8, int9, int10, string0] = stack();
    if ((dbrow_getfield(int0, 303216, 0) > 0)) {
        stack(dbrow_getfield(int0, 303344, int2));
        [int4, int3, int5, int7, int8, int9, int10, string1] = stack();
    };
    if (((int6 != -1 as obj) && (int6 != 49137 as obj))) {
        string2 = OC_NAME(int6);
        if (((int7 != -1 as obj) && (int7 != 49137 as obj))) {
            string2 = strconcat(string2, ` or ${OC_NAME(int7)}`);
        } else if ((STRING_LENGTH(string1) > 0)) {
            string2 = strconcat(string2, ` or ${string1}`);
        };
    } else if ((STRING_LENGTH(string0) > 0)) {
        string2 = string0;
        if ((STRING_LENGTH(string1) > 0)) {
            string2 = strconcat(string2, ` or ${string1}`);
        } else if (((int7 != -1 as obj) && (int7 != 49137 as obj))) {
            string2 = strconcat(string2, ` or ${OC_NAME(int7)}`);
        };
    };
    return string2;
}