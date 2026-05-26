//[proc,divide_up]
function script5276(int0: number, int1: number): number {
    if ((MODULO(int0, int1) > 0)) {
        return ((int0 / int1) + 1);
    };
    return (int0 / int1);
}