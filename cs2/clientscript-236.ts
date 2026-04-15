//
function script236(int0: unknown_int, int1: int): [unknown_int, string] {
    var string0 = "null";
    var int2 = 0;
    if ((int1 == script11283(int0))) {
        return [0, "This portal is already attuned to that destination."];
    };
    if ((script13462(int0, int1) == 1)) {
        return [0, "Another portal is already attuned to that destination."];
    };
    [int2, string0] = script13082(int0, int1);
    if ((int2 == 0)) {
        return [0, string0];
    };
    [int2, string0] = script10227(int1);
    if ((int2 == 0)) {
        return [0, string0];
    };
    return [1, "null"];
}