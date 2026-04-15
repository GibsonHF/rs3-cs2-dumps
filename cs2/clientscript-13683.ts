//
function script13683(int0: obj, int1: unknown_int): string {
    var string0 = "null";
    string0 = `<col=f5b241>Currently have:</col> <col=ffffff>${TOSTRING_LOCALISED(script2515(93 as inv, int0), 1)}</col>`;
    if ((int1 == 1)) {
        string0 = `${string0} ${OC_NAME(int0)}`;
    };
    return string0;
}