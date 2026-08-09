//
function script3547(int0: number, int1: number, int2: number): string {
    var int3 = int2;
    var string0 = "";
    stack(int3);
    int3 = (int3 - 1);
    while (BRANCH_GREATER_THAN(int1)) {
        if ((TESTBIT(int0, int3) == 1)) {
            string0 = `${string0}1`;
        } else {
            string0 = `${string0}0`;
        };
    };
    return string0;
}