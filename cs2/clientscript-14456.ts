//
function script14456(int0: number): string {
    if ((int0 == -1)) {
        return "";
    };
    if (((item_getparam(int0, 4287) == true) && (script4148() == 1))) {
        return "This reward isn't available for ironmen";
    };
    return item_getparam(int0, 6167);
}