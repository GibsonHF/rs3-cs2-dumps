//
function script3578(int0: dbrow, int1: dbrow, int2: dbrow, int3: dbrow): string {
    var string0 = "";
    if ((int0 != -1 as dbrow)) {
        string0 = `${string0}A ${dbrow_getfield(int0, 118864, 0)}`;
    } else {
        return string0;
    };
    if ((int1 != -1 as dbrow)) {
        string0 = `${string0}<br>A ${dbrow_getfield(int1, 118864, 0)}`;
    } else {
        return string0;
    };
    if ((int2 != -1 as dbrow)) {
        string0 = `${string0}<br>A ${dbrow_getfield(int2, 118864, 0)}`;
    } else {
        return string0;
    };
    if ((int3 != -1 as dbrow)) {
        string0 = `${string0}<br>A ${dbrow_getfield(int3, 118864, 0)}`;
    };
    return string0;
}