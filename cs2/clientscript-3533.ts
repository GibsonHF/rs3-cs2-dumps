//
function script3533(int0: number, int1: number): number {
    var string0 = dbrow_getfield(int0, 274432, 0);
    var string1 = dbrow_getfield(int0, 274448, 0);
    var int2 = dbrow_getfield(int0, 274480, 0);
    var int1 = (int1 + dbrow_getfield(int0, 274496, 0));
    int1 = (int1 + 60);
    var int3 = dbrow_getfield(int0, 274464, 0);
    stack(278528);
    stack(int3);
    DB_FIND(0);
    var int4 = dbrow_findnext();
    var string2 = "";
    if ((int4 == -1)) {
        string2 = "Runescape";
        int3 = 4;
    } else {
        string2 = dbrow_getfield(int4, 278544, 0);
    };
    var int5 = NOTIFICATIONS_SENDGROUPEDLOCAL(string0, string1, int2, int3, string2, int1);
    return int5;
}