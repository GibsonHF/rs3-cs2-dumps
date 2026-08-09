//
function script20864(int0: number): string {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = script3985(int0, 1);
    var string0 = "";
    if ((int1 <= 0)) {
        if ((int2 <= 0)) {
            if ((int3 <= 0)) {
                string0 = "Sale Ended";
            } else {
                string0 = `Ends In: ${script3382(int1, int2, int3, -1, 1, 0)}`;
            };
        } else {
            string0 = `Ends In: ${script3382(int1, int2, int3, -1, 1, 0)}`;
        };
    } else {
        string0 = `Ends In: ${script3382(int1, int2, int3, -1, 1, 0)}`;
    };
    return string0;
}