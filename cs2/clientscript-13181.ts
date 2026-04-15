//
function script13181(int0: int, int1: unknown_int, int2: component): void {
    if ((varclient_5938 != script441(1))) {
        script13230();
        return;
    };
    var int3 = -1 as dbrow;
    if ((int1 == 2)) {
        script13193(int0);
        script18205(int0, 10);
    } else {
        int3 = script15768(int0);
        if ((int3 != -1 as dbrow)) {
            if ((int3 == script18190())) {
                script10435(int2, -1, -1, -1, 12244 as cs2enum, -1 as cs2enum, ((28 + 3) - 1), -1, 0, 0);
                script18205(int0, 1);
            } else {
                script18205(int0, 1);
            };
        } else {
            script18205(int0, 1);
        };
    };
    return;
}