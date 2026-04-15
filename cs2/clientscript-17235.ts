//
function script17235(int0: dbrow): string {
    var int1 = dbrow_getfield(int0, 905328, 0);
    var int2 = script1432();
    if ((int2 < int1)) {
        return `Combat level: ${inttostring(int2, 10)} / ${inttostring(int1, 10)}`;
    };
    return "";
}