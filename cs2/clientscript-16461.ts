//
function script16461(int0: struct, int1: int): [unknown_int, string, int] {
    var string0 = "";
    var int2 = 1;
    if (((STRING_LENGTH(string0) == 0) && (int1 == 1))) {
        if ((PLAYERMEMBER() == false)) {
            string0 = "Membership<br>";
        } else if ((MAP_MEMBERS() == 0)) {
            string0 = "Log in to a Members' World<br>";
        };
        if ((STRING_LENGTH(string0) > 0)) {
            int2 = 0;
        };
    };
    var int3 = -1;
    if ((int2 == 0)) {
        int3 = script10495(6);
    };
    return [int2, string0, int3];
}