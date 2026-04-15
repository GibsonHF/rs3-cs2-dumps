//[proc,lore_tostring]
function script780(int0: int): string {
    if ((int0 >= 999999)) {
        return "*";
    };
    if ((int0 >= 10000)) {
        return strconcat(inttostring((int0 / 1000), 10), "K");
    };
    return inttostring(int0, 10);
}