//
function script17532(int0: dbrow): [unknown_int, string] {
    var int1 = 1;
    var string0 = "You need to choose a focus object before starting a ritual.";
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 235))) {
        int1 = 0;
    };
    return [int1, string0];
}