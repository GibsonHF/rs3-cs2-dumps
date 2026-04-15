//
function script17909(int0: dbrow): int {
    var int1 = DB_GETFIELDCOUNT(int0, 999472);
    var int2 = DB_GETFIELDCOUNT(int0, 999488);
    var int3 = DB_GETFIELDCOUNT(int0, 999504);
    var int4 = DB_GETFIELDCOUNT(int0, 999520);
    var int5 = DB_GETFIELDCOUNT(int0, 999536);
    var int6 = DB_GETFIELDCOUNT(int0, 999552);
    var int7 = (((((int1 + int2) + int3) + int4) + int5) + int6);
    if ((((int1 > 0) && (int1 != int7)) || (((int2 > 0) && (int2 != int7)) || (((int3 > 0) && (int3 != int7)) || (((int4 > 0) && (int4 != int7)) || (((int5 > 0) && (int5 != int7)) || ((int6 > 0) && (int6 != int7)))))))) {
        script12478(`Invalid dbrow setup - ${dbrow_getfield(int0, 999424, 0)}. Progression dbrows CANNOT contian multiple types of data.`);
        return -1;
    };
    return int7;
}