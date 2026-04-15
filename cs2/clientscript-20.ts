//[proc,magic_tostring]
function script20(int0: int): string {
    if ((int0 >= 99999999)) {
        return "*";
    };
    if ((int0 >= 10000000)) {
        return strconcat(inttostring((int0 / 1000000), 10), "M");
    };
    if ((int0 >= 10000)) {
        return strconcat(inttostring((int0 / 1000), 10), "K");
    };
    return inttostring(int0, 10);
}