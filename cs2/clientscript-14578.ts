//
function script14578(int0: number): string {
    if ((int0 == -1)) {
        return "";
    };
    var string0 = dbrow_getfield(int0, 360480, 0);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    var int1 = -1;
    var int2 = 0;
    if ((dbrow_getfield(int0, 360464, 0) == 2)) {
        if ((DB_GETFIELDCOUNT(int0, 360688) == 0)) {
            return "Material cache";
        };
        [int1, int2] = dbrow_getfield(int0, 360688, 0);
        return `Material cache (${OC_NAME(int1)})`;
    };
    script12478(`Invalid name specified for excavation. ID: ${inttostring(dbrow_getfield(int0, 360448, 0), 10)}`);
    return "";
}