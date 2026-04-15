//
function script8243(string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string): string {
    var string8 = "";
    var string9 = "";
    var int0 = STRING_LENGTH(string0);
    var int1 = STRING_LENGTH(string1);
    var int2 = STRING_LENGTH(string2);
    var int3 = STRING_LENGTH(string3);
    var int4 = STRING_LENGTH(string4);
    var int5 = STRING_LENGTH(string5);
    var int6 = 0;
    var int7 = 0;
    if ((((int1 != 0) || (int2 != 0)) && (((int3 != 0) || (int4 != 0)) || (int5 != 0)))) {
        int6 = 1;
    };
    if ((int1 != 0)) {
        int7 = 1;
        if ((int0 != 0)) {
            string8 = `${string0}.${string7}${string1}`;
        } else {
            string8 = string1;
        };
        string9 = string6;
    };
    if ((int2 != 0)) {
        if ((STRING_LENGTH(string8) == 0)) {
            string8 = string2;
        } else {
            string8 = `${string8}${string7}${string2}`;
        };
        string9 = string6;
    };
    if ((int6 == 1)) {
        string8 = `${string8} | `;
    };
    if (((int0 != 0) && (int7 == 0))) {
        string8 = string0;
        string9 = string6;
    };
    if ((int3 != 0)) {
        string8 = `${string8}${string9}${string3}`;
        string9 = string6;
    };
    if ((int4 != 0)) {
        string8 = `${string8}${string9}${string4}`;
        string9 = string6;
    };
    if ((int5 != 0)) {
        string8 = `${string8}${string9}${string5}`;
    };
    return string8;
}