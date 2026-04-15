//
function script18846(int0: struct): string {
    var string0 = "";
    var int1 = struct_getparam(int0, 4921);
    if ((int1 != -1 as dbrow)) {
        string0 = dbrow_getfield(int1, 638976, 0);
        return string0;
    };
    if ((struct_getparam(int0, 6145) > 0)) {
        string0 = struct_getparam(int0, 6135);
        return string0;
    };
    if ((struct_getparam(int0, 1346) > 0)) {
        return struct_getparam(int0, 1348);
    };
    script12478("Could not find a valid name for entry struct. Defaulting to \"Entry\"");
    return "Entry";
}