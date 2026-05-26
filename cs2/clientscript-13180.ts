//
function script13180(int0: number, int1: number, int2: number, int3: number): void {
    var string0 = "";
    if ((int3 == 1)) {
        string0 = script18200(int2);
    };
    if (((script18206(int2) == 1) && (script15764(int2) != -1))) {
        if ((STRING_LENGTH(string0) != 0)) {
            string0 = `${string0}<br>`;
        };
        string0 = `${string0}${dbrow_getfield(int2, 667680, 0)}<br>Right click to reclaim`;
    };
    if ((STRING_LENGTH(string0) != 0)) {
        script8800(string0, int0, int1);
    };
    return;
}