//
function script20682(int0: number): [number, number, string] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = script3985(int0, 1);
    var string2 = "";
    if ((int1 <= 0)) {
        if ((int2 <= 0)) {
            if ((int3 <= 0)) {
                string2 = string1;
            } else {
                string2 = `${string0}: ${script3382(int1, int2, int3, -1, 1, 0)}`;
            };
        } else {
            string2 = `${string0}: ${script3382(int1, int2, int3, -1, 1, 0)}`;
        };
    } else {
        string2 = `${string0}: ${script3382(int1, int2, int3, -1, 1, 0)}`;
    };
    return string2;
}