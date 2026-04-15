//
function script17264(): unknown_int {
    if ((CLIENTCLOCK() >= 6000)) {
        return 0;
    };
    if ((PLATFORMTYPE() == 5)) {
        return 1;
    };
    if (((script13749() == true) && (script17257() == 1))) {
        return 1;
    };
    return 0;
}