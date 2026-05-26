//
function script12738(): void {
    var string0 = "A wonderful prize!";
    var int0 = -1;
    IF_SETHIDE(1, 117047330);
    IF_SETHIDE(1, 117047331);
    IF_SETHIDE(1, 117047332);
    IF_SETHIDE(1, 117047333);
    IF_SETHIDE(1, 117047334);
    IF_SETHIDE(1, 117047335);
    IF_SETHIDE(1, 117047336);
    IF_SETHIDE(1, 117047337);
    IF_SETHIDE(1, 117047338);
    switch (varbitplayer_33714) {
        case 0: {
            string0 = OC_NAME(38173);
            int0 = 117047330;
            break;
        }
        case 1: {
            string0 = OC_NAME(38176);
            int0 = 117047331;
            break;
        }
        case 2: {
            string0 = OC_NAME(38175);
            int0 = 117047332;
            break;
        }
        case 3: {
            string0 = OC_NAME(38177);
            int0 = 117047333;
            break;
        }
        case 4: {
            string0 = OC_NAME(38174);
            int0 = 117047334;
            break;
        }
        case 5: {
            string0 = OC_NAME(38179);
            int0 = 117047335;
            break;
        }
        case 6: {
            string0 = OC_NAME(38180);
            int0 = 117047336;
            break;
        }
        case 7: {
            string0 = OC_NAME(38178);
            int0 = 117047337;
            break;
        }
        default: {
            string0 = OC_NAME(38171);
            int0 = 117047338;
            break;
        }
    };
    IF_SETHIDE(0, int0);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, -1), int0);
    return;
}