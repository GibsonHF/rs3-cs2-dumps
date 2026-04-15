//
function script4960(int0: int): int {
    var int1 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        int1 = script4948(int0);
        if ((int1 <= 0)) {
            return 0;
        };
        return script4959(int1);
    };
    return 0;
}