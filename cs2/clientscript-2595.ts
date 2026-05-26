//[proc,graphics_options_init]
function script2595(int0: number): void {
    var int1 = script13749();
    IF_SETCOLOUR(script10495(0), 99155975);
    IF_SETCOLOUR(script10495(0), 99155981);
    IF_SETCOLOUR(script10495(0), 99155972);
    IF_SETCOLOUR(script10495(0), 99156006);
    IF_SETCOLOUR(script10495(3), 99156007);
    IF_SETCOLOUR(script10495(3), 99155973);
    IF_SETCOLOUR(script10495(3), 99155984);
    IF_SETCOLOUR(script10495(3), 99155977);
    switch (int0) {
        case 0:
        case 4: {
            if ((int1 == 0)) {
                IF_OPENSUBCLIENT(57802752, 1513);
            } else {
                IF_OPENSUBCLIENT(57802752, 324);
                script10410(21233667, -1, 2830, 0, 0, 280, 160, 0, 0, "");
                script9525(21233668, 1, -1);
                IF_SETCOLOUR(script10495(0), 21233669);
            };
            if ((int0 == 4)) {
                IF_SETONCLICK(callback(script7926), 57802764);
            } else {
                IF_SETONRESIZE(callback(script2919, 1, int0), 48758976);
            };
            script8421(57802761, 57802763, 57802762, 57802764, "Graphics Options", 21218, -1, 1, -1, -1);
            if ((int0 == 4)) {
                IF_SETHIDE(0, 93061303);
            };
            break;
        }
        case 1: {
            if ((int1 == 0)) {
                IF_OPENSUBCLIENT(48627712, 1513);
            } else {
                IF_OPENSUBCLIENT(48627712, 324);
                script10410(21233667, -1, 2830, 0, 0, 280, 160, 0, 0, "");
                script9525(21233668, 1, -1);
                IF_SETCOLOUR(script10495(0), 21233669);
            };
            break;
        }
        case 2: {
            if ((int1 == 0)) {
                IF_OPENSUBCLIENT(59703301, 1513);
                IF_SETHIDE(1, 59703298);
                IF_SETPOSITION(0, 0, 1, 0, 59703299);
                IF_SETSIZE(0, IF_GETHEIGHT(59703299), 1, 1, 59703301);
                IF_SETSIZE(0, 0, 1, 1, 99155978);
            } else {
                IF_OPENSUBCLIENT(59703301, 324);
                IF_SETHIDE(0, 59703298);
                IF_SETSIZE(0, (IF_GETY(59703299) + IF_GETHEIGHT(59703299)), 1, 1, 59703301);
            };
            script4041();
            break;
        }
    };
    script15590(int0);
    return;
}