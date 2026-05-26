//
function script18253(int0: number, int1: number): void {
    var int2 = 29246 as graphic;
    var int3 = 0;
    var int4 = true;
    var string0 = "Track";
    var string1 = "Add this challenge to your activity tracker.";
    var int5 = script8229(4, int1);
    var int6 = 1;
    if ((int5 > -1)) {
        int3 = 1;
        int2 = 29399 as graphic;
        string0 = "Untrack";
        string1 = "Remove this challenge from your activity tracker.";
        int6 = 2;
    } else if ((script8230() == 0)) {
        int2 = 29400 as graphic;
        int4 = false;
        string1 = "You are already tracking the maximum of 5 activities.";
        int6 = 0;
    };
    IF_SETGRAPHIC(int2, comp(1343, 70));
    IF_BUTTON_SETTOGGLED(int3, comp(1343, 69));
    IF_CLEAROPS(comp(1343, 69));
    if ((int6 > 0)) {
        IF_SETOP(int6, string0, comp(1343, 69));
    };
    IF_SETENABLED(int4, comp(1343, 69));
    IF_SETONOP(callback(), comp(1343, 69));
    script16247(88014917, -1);
    var int7 = script6431();
    if (((STRING_LENGTH(string1) > 0) && (((int7 == 1) && (int4 == false)) || (int7 == 0)))) {
        script3536(string1, 88014917, -1);
    };
    if ((struct_getparam(int0, 2700) != -1 as coordgrid)) {
        IF_SETHIDE(false, comp(1343, 47));
        string1 = "Teleport to a lodestone near where you can complete this challenge.";
        script16247(88015042, -1);
        if ((int7 == 0)) {
            script3536(string1, 88015042, -1);
        };
    } else {
        IF_SETHIDE(true, comp(1343, 47));
    };
    return;
}