//
function script14456(int0: obj): string {
    if ((int0 == -1 as obj)) {
        return "";
    };
    if (((item_getparam(int0, 4287) == true) && (script4148() == true))) {
        return "This reward isn't available for ironmen";
    };
    return item_getparam(int0, 6167);
}