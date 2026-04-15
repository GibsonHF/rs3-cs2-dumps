//
function script13860(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = script6431();
    while ((int0 < 30)) {
        if ((int2 == true)) {
            int1 = script2384(int0, 1);
            if ((script8314(int1) != -1)) {
                script8323(int1, 0);
                script13842(int1);
            };
        };
        script2386(int0, -1);
        int0 = (int0 + 1);
    };
    if ((PLAYERMEMBER() == false)) {
        script2386(0, script2390(7));
    };
    script13862();
    varbitclient_49616 = 1;
    return;
}