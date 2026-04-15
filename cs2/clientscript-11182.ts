//
function script11182(int0: int): [int, int] {
    var int1 = script11183(int0);
    if ((int1 == -1 as dbrow)) {
        script12478("Could not find trh181 modifier: Default to Yellow x1");
        return [1, 1];
    };
    return [dbrow_getfield(int1, 659472, 0), dbrow_getfield(int1, 659488, 0)];
}