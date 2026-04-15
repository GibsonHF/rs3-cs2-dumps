//
function script17239(int0: dbrow): [unknown_int, string] {
    if ((int0 == -1 as dbrow)) {
        return [1, ""];
    };
    if ((DB_GETROWTABLE(int0) != 221)) {
        script12478("Invalid dbrow, pretending requirements are not met.");
        return [0, ""];
    };
    var string0 = "";
    var string1 = "";
    var int1 = 0;
    var int2 = 0;
    if ((dbrow_getfield(int0, 905216, 0) == true)) {
        if ((MAP_MEMBERS() == 0)) {
            int2 = (int2 + 1);
            string1 = "Membership is required.";
        } else {
            string1 = "<str=FFFFFE>Membership is required.";
        };
    };
    if ((DB_GETFIELDCOUNT(int0, 905232) > 0)) {
        [int1, string1] = script17240(int0);
        string0 = script17238(string0, string1);
        int2 = (int2 + int1);
    };
    if ((DB_GETFIELDCOUNT(int0, 905248) > 0)) {
        [int1, string1] = script17241(int0);
        string0 = script17238(string0, string1);
        int2 = (int2 + int1);
    };
    if ((DB_GETFIELDCOUNT(int0, 905264) > 0)) {
        [int1, string1] = script17287(int0);
        string0 = script17238(string0, string1);
        int2 = (int2 + int1);
    };
    if ((DB_GETFIELDCOUNT(int0, 905280) > 0)) {
        [int1, string1] = script17242(int0);
        string0 = script17238(string0, string1);
        int2 = (int2 + int1);
    };
    if ((DB_GETFIELDCOUNT(int0, 905296) > 0)) {
        [int1, string1] = script17243(int0);
        string0 = script17238(string0, string1);
        int2 = (int2 + int1);
    };
    if ((dbrow_getfield(int0, 905312, 0) != -1)) {
        [int1, string1] = script17244(int0);
        string0 = script17238(string0, string1);
        int2 = (int2 + int1);
    };
    if ((dbrow_getfield(int0, 905328, 0) != -1)) {
        [int1, string1] = script17245(int0);
        string0 = script17238(string0, string1);
        int2 = (int2 + int1);
    };
    if ((DB_GETFIELDCOUNT(int0, 905344) > 0)) {
        [int1, string1] = script17246(int0);
        string0 = script17238(string0, string1);
        int2 = (int2 + int1);
    };
    if ((DB_GETFIELDCOUNT(int0, 905360) > 0)) {
        [int1, string1] = script17247(int0);
        string0 = script17238(string0, string1);
        int2 = (int2 + int1);
    };
    if ((int2 > 0)) {
        return [0, string0];
    };
    return [1, string0];
}