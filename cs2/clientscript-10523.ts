//
function script10523(int0: component, int1: unknown_int): unknown_int {
    if ((varclient_2236 == 9)) {
        switch (int0) {
            case 119930893:
            case 36438037: {
                if ((STRING_INDEXOF_CHAR("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'\"£*+-/=?^_., ()[]:;|\\{}~@öäüëïÖÄÜßÁÀéíóúùàáçãõêôâîèûÉÊÈÇÔåÅ", int1, 0) == -1)) {
                    var int1 = -1;
                };
                break;
            }
            case 97452039: {
                if (((STRING_LENGTH(varclient_2250) == 0) && (STRING_INDEXOF_CHAR("- _", int1, 0) != -1))) {
                    int1 = -1;
                } else if ((STRING_INDEXOF_CHAR("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789  _-", int1, 0) == -1)) {
                    int1 = -1;
                };
                break;
            }
            case 102301715: {
                if ((STRING_INDEXOF_CHAR("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'\"£*+-/=?^_., ()[]:;|\\{}~@öäüÖÄÜßÁéíóúàçãõêôâèûÉÊÈÇÔåÅ", int1, 0) == -1)) {
                    int1 = -1;
                };
                break;
            }
        };
    };
    return int1;
}