//
function script17245(int0: dbrow): [int, string] {
    var int1 = dbrow_getfield(int0, 905328, 0);
    var int2 = script1432();
    if ((int2 < int1)) {
        return [1, `Combat level: ${inttostring(int2, 10)} / ${inttostring(int1, 10)}`];
    };
    return [0, `<str=FFFFFE>Combat level: ${inttostring(int2, 10)} / ${inttostring(int1, 10)}`];
}