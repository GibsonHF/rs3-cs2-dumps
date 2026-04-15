//
function script4729(): [string, string, string, string, string, string, string, string, string, string, string, string, string, string] {
    var string0 = "/p";
    var string1 = "/c";
    var string2 = "/f";
    var string3 = "/g";
    var string4 = "/gr";
    var string5 = "/t";
    var string6 = "/gim";
    var string7 = "\\p";
    var string8 = "\\c";
    var string9 = "\\f";
    var string10 = "\\g";
    var string11 = "\\gr";
    var string12 = "\\t";
    var string13 = "\\gim";
    switch (MAP_LANG()) {
        case 1: {
            string0 = "/a";
            string7 = "\\a";
            break;
        }
        case 2: {
            string2 = "/a";
            string3 = "/i";
            string6 = "/mdg";
            string9 = "\\a";
            string10 = "\\i";
            string13 = "\\mdg";
            break;
        }
        case 3: {
            string6 = "/mig";
            string13 = "\\mig";
            break;
        }
    };
    return [string0, string7, string1, string8, string2, string9, string3, string10, string4, string11, string5, string12, string6, string13];
}