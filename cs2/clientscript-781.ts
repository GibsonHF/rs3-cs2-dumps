//[proc,lore_tostring_pouch]
function script781(int0: number): string {
    if ((int0 >= 1000)) {
        return "*";
    };
    return inttostring(int0, 10);
}