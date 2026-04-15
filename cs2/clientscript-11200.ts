//
function script11200(int0: int, int1: int): string {
    var string0 = "Promo Over";
    var int2 = ((int0 / 60) / 24);
    var int3 = ((int0 / 60) - (int2 * 24));
    var string1 = inttostring(int2, 10);
    var string2 = inttostring(int3, 10);
    var string3 = inttostring(MODULO(int0, 60), 10);
    var string4 = inttostring((59 - int1), 10);
    var string5 = "<col=CDE1FF>";
    if ((int0 < 60)) {
        string5 = "<col=DD0000>";
    } else if ((int0 < 1440)) {
        string5 = "<col=DD4400>";
    };
    if (((int0 + 1) > 0)) {
        if ((int2 >= 1)) {
            if ((STRING_LENGTH(string1) == 1)) {
                string1 = strconcat("0", string1);
            };
            if ((STRING_LENGTH(string2) == 1)) {
                string2 = strconcat("0", string2);
            };
            string0 = `${string5}${string1}d ${string2}h`;
        } else if ((int3 >= 1)) {
            if ((STRING_LENGTH(string2) == 1)) {
                string2 = strconcat("0", string2);
            };
            if ((STRING_LENGTH(string3) == 1)) {
                string3 = strconcat("0", string3);
            };
            string0 = `${string5}${string2}h ${string3}m`;
        } else {
            if ((STRING_LENGTH(string4) == 1)) {
                string4 = strconcat("0", string4);
            };
            string0 = `${string5}${string3}m ${string4}s`;
        };
    };
    return string0;
}