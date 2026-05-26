//
function script3919(int0: number, int1: number): string {
    if ((int0 != -1)) {
        if ((struct_getparam(int0, 8973) == true)) {
            return "Select";
        };
        if ((struct_getparam(int0, 8979) == true)) {
            return "Select";
        };
    };
    if ((int1 == 1)) {
        return "Select";
    };
    return "Buy";
}