//
function script18427(): dbrow {
    var int0 = script18417();
    var int1 = script18425(int0);
    var int2 = script18426(int0);
    if ((((int1 > 0) && (int2 != -1 as dbrow)) && (script18414(int1, int2) == 1))) {
        return dbrow_getfield(int2, 1114112, (int1 - 1));
    };
    return -1 as dbrow;
}