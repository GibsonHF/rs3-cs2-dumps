//
function script12283(int0: int, int1: int, int2: int): [unknown_int, int] {
    var int3 = TELEMETRY_GET_GROUP_INDEX(int0);
    if ((int3 == -1)) {
        return [0, -1];
    };
    var int4 = TELEMETRY_GET_ROW_INDEX(int3, int1);
    if ((int4 == -1)) {
        return [0, -1];
    };
    var int5 = TELEMETRY_GET_COLUMN_INDEX(int3, int2);
    if ((int5 == -1)) {
        return [0, -1];
    };
    return [1, TELEMETRY_GET_GRID_VALUE(int3, int4, int5)];
}