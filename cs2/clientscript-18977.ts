//
function script18977(int0: number): string {
    if ((int0 == -1)) {
        return "";
    };
    var int1 = -1;
    if ((DB_GETROWTABLE(int0) == 81)) {
        int1 = script18962(int0);
    } else {
        int1 = script18968(int0);
    };
    var int2 = db_find_with_count(360705, int1, 0);
    if ((int2 == 0)) {
        return "Found while solving this mystery.";
    };
    var int3 = -1;
    var string0 = "Found within excavations:<br>";
    var int4 = 0;
    var int5 = -1;
    while ((++int5 < int2)) {
        dbrow_findnext();
        int3 = stack();
        if ((int4 > 0)) {
            string0 = `${string0}<br>`;
        };
        string0 = `${string0}- ${script14578(int3)}`;
        int4 = (int4 + 1);
    };
    return string0;
}