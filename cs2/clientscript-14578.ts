//
function script14578(int0: dbrow): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    var string0 = dbrow_getfield(int0, 360480, 0);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    var int1 = -1 as obj;
    var int2 = 0;
    if ((dbrow_getfield(int0, 360464, 0) == 2)) {
        if ((DB_GETFIELDCOUNT(int0, 360688) == 0)) {
            return "Material cache";
        };
        [int1, int2] = dbrow_getfield(int0, 360688, 0);
        return `Material cache (${OC_NAME(int1)})`;
    };
    stack("Invalid name specified for excavation. ID: ");
    stack(int0);
    stack(360448);
    stack(0);
    dbrow_getfield();
    script12478(`${stack()}${inttostring(stack(), 10)}`);
    return "";
}