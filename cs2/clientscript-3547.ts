//
function script3547(int0: int, int1: int, int2: int): string {
    var int3 = int2;
    var string0 = "";
    while ((int3-- > int1)) {
        if ((TESTBIT(int0, int3) == 1)) {
            string0 = `${string0}1`;
        } else {
            string0 = `${string0}0`;
        };
    };
    return string0;
}