//
function script18858(): int {
    var int0 = 0;
    var int1 = DB_LISTALL(284);
    var int2 = 0;
    while ((int2 < int1)) {
        if ((script18856(int2) == 1)) {
            int2 = (int2 + 1);
        } else {
            int0 = (int0 + (script18863(int2) + 1));
            int2 = (int2 + 1);
        };
    };
    return int0;
}