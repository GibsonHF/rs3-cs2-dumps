//
function script8519(string0: string): int {
    var int0 = -1;
    if ((script13749() == true)) {
        return int0;
    };
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var string8 = "";
    var string9 = "";
    var string10 = "";
    var string11 = "";
    var string12 = "";
    var string13 = "";
    var string14 = "";
    [string1, string8, string2, string9, string3, string10, string4, string11, string5, string12, string6, string13, string7, string14] = script4729();
    if (((strcmp(string2, LOWERCASE(string0)) == 0) || (strcmp(string9, LOWERCASE(string0)) == 0))) {
        int0 = 21;
    } else if (((strcmp(string4, LOWERCASE(string0)) == 0) || (strcmp(string11, LOWERCASE(string0)) == 0))) {
        int0 = 22;
    } else if (((strcmp(string3, LOWERCASE(string0)) == 0) || (strcmp(string10, LOWERCASE(string0)) == 0))) {
        int0 = 20;
    } else if (((strcmp(string1, LOWERCASE(string0)) == 0) || (strcmp(string8, LOWERCASE(string0)) == 0))) {
        int0 = 18;
    } else if (((strcmp(string5, LOWERCASE(string0)) == 0) || (strcmp(string12, LOWERCASE(string0)) == 0))) {
        int0 = 25;
        varclient_4505 = 0;
        script4539(25);
    } else if (((strcmp(string6, LOWERCASE(string0)) == 0) || (strcmp(string13, LOWERCASE(string0)) == 0))) {
        int0 = 25;
        varclient_4505 = 1;
        script4539(25);
    } else if (((script19316() == true) && ((strcmp(string7, LOWERCASE(string0)) == 0) || (strcmp(string14, LOWERCASE(string0)) == 0)))) {
        int0 = 46;
    };
    return int0;
}