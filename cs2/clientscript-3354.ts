//
function script3354(int0: int, int1: unknown_int, string0: string): string {
    var int2 = script3386(int0, int1);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = script3985(int0, int1);
    if ((int2 > 0)) {
        if ((int3 > 0)) {
            var string0 = script3382(int3, int4, int5, -1, 1, 0);
        } else if ((int4 > 0)) {
            string0 = `<col=DD4400>${script3382(-1, int4, int5, -1, 3, 0)}</col>`;
        } else if ((int5 > 0)) {
            string0 = `<col=DD0000>${script3382(-1, -1, int5, -1, 0, 0)}</col>`;
        };
    };
    return string0;
}