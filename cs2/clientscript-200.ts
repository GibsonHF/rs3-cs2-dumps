//
function script200(int0: dbrow): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    if ((DB_GETROWTABLE(int0) != 221)) {
        script12478("Invalid dbrow, pretending requirements are not met.");
        return "This is unavailable right now.";
    };
    var string0 = "";
    if (((dbrow_getfield(int0, 905216, 0) == true) && (MAP_MEMBERS() == 0))) {
        string0 = "Membership is required.";
    };
    if ((DB_GETFIELDCOUNT(int0, 905232) > 0)) {
        string0 = script17238(string0, script201(int0));
    };
    if ((DB_GETFIELDCOUNT(int0, 905248) > 0)) {
        string0 = script17238(string0, script15775(int0));
    };
    if ((DB_GETFIELDCOUNT(int0, 905264) > 0)) {
        string0 = script17238(string0, script17286(int0));
    };
    if ((DB_GETFIELDCOUNT(int0, 905280) > 0)) {
        string0 = script17238(string0, script17232(int0));
    };
    if ((DB_GETFIELDCOUNT(int0, 905296) > 0)) {
        string0 = script17238(string0, script17233(int0));
    };
    if ((dbrow_getfield(int0, 905312, 0) != -1)) {
        string0 = script17238(string0, script17234(int0));
    };
    if ((dbrow_getfield(int0, 905328, 0) != -1)) {
        string0 = script17238(string0, script17235(int0));
    };
    if ((DB_GETFIELDCOUNT(int0, 905344) > 0)) {
        string0 = script17238(string0, script17236(int0));
    };
    if ((DB_GETFIELDCOUNT(int0, 905360) > 0)) {
        string0 = script17238(string0, script17237(int0));
    };
    return string0;
}