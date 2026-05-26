//
function script325(int0: number, int1: number, int2: number, string0: string): string {
    if ((int2 == 1)) {
        var string0 = `'${string0}'`;
    };
    if ((int0 > 1)) {
        return `${TOSTRING_LOCALISED(int0, int1)} x ${string0}`;
    };
    return string0;
}