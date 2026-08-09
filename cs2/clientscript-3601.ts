//
function script3601(int0: number, int1: number, int2: number): string {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    [int4, int3, int5, int6, int8, int9, int10, string0] = dbrow_getfield(int0, 303344, int1);
    if ((dbrow_getfield(int0, 303216, 0) > 0)) {
        [int4, int3, int5, int7, int8, int9, int10, string1] = dbrow_getfield(int0, 303344, int2);
    };
    if ((int6 != -1)) {
        if ((int6 != 49137)) {
            string2 = OC_NAME(int6);
            if ((int7 != -1)) {
                if ((int7 != 49137)) {
                    string2 = strconcat(string2, ` or ${OC_NAME(int7)}`);
                } else if ((STRING_LENGTH(string1) > 0)) {
                    string2 = strconcat(string2, ` or ${string1}`);
                };
            } else if ((STRING_LENGTH(string1) > 0)) {
                string2 = strconcat(string2, ` or ${string1}`);
            };
        } else if ((STRING_LENGTH(string0) > 0)) {
            string2 = string0;
            if ((STRING_LENGTH(string1) > 0)) {
                string2 = strconcat(string2, ` or ${string1}`);
            } else if (((int7 != -1) && (int7 != 49137))) {
                string2 = strconcat(string2, ` or ${OC_NAME(int7)}`);
            };
        };
    } else if ((STRING_LENGTH(string0) > 0)) {
        string2 = string0;
        if ((STRING_LENGTH(string1) > 0)) {
            string2 = strconcat(string2, ` or ${string1}`);
        } else if (((int7 != -1) && (int7 != 49137))) {
            string2 = strconcat(string2, ` or ${OC_NAME(int7)}`);
        };
    };
    return string2;
}