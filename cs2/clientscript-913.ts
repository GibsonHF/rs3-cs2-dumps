//
function script913(int0: number, int1: number, int2: number, string0: string): string {
    if ((int0 == 0)) {
        return string0;
    };
    if ((int1 < int2)) {
        return `<br><col=ff0000>${string0}`;
    };
    return `<br><col=00ff00>${string0}`;
}