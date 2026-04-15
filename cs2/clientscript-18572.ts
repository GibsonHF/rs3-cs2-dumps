//
function script18572(int0: int, int1: int, int2: unknown_int): string {
    var string0 = script17722(int2, 1);
    if ((int1 > 0)) {
        return `Reduces the target's ${string0} by <col=ffffff>${inttostring(int0, 10)}%</col> for <col=ffffff>${script15973(int1, 1)}</col>`;
    };
    return `Reduces the target's ${string0} by <col=ffffff>${inttostring(int0, 10)}%</col>`;
}