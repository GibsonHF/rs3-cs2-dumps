//
function script20692(int0: dbrow, int1: int): [var_reference, string] {
    if ((int0 == -1 as dbrow)) {
        return [-1 as var_reference, ""];
    };
    var int2 = -1 as var_reference;
    var string0 = "";
    var string1 = "";
    stack(dbrow_getfield(int0, 1445936, int1));
    [int2, string0, string1] = stack();
    return [int2, string1];
}