//
function script3878(int0: number, int1: number, long0: bigint): void {
    var string0 = "";
    var int2 = -1;
    [string0, int2] = script17399(long0);
    if ((int0 == 0)) {
        string0 = `-${REMOVETAGS(string0)}`;
        int2 = 16711680;
    } else if ((int0 == 1)) {
        string0 = `+${string0}`;
    };
    script20913(string0, int2, int1);
    return;
}