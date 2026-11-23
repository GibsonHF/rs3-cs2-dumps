//
function script12738(): void {
    var string0 = "A wonderful prize!";
    var int0 = -1;
    IF_SETHIDE(true, comp(1786, 34));  // trh104_overlay:prize_model1
    IF_SETHIDE(true, comp(1786, 35));  // trh104_overlay:prize_model2
    IF_SETHIDE(true, comp(1786, 36));  // trh104_overlay:prize_model3
    IF_SETHIDE(true, comp(1786, 37));  // trh104_overlay:prize_model4
    IF_SETHIDE(true, comp(1786, 38));  // trh104_overlay:prize_model5
    IF_SETHIDE(true, comp(1786, 39));  // trh104_overlay:prize_model6
    IF_SETHIDE(true, comp(1786, 40));  // trh104_overlay:prize_model7
    IF_SETHIDE(true, comp(1786, 41));  // trh104_overlay:prize_model8
    IF_SETHIDE(true, comp(1786, 42));  // trh104_overlay:prize_model_default
    switch (varbitplayer_33714) {
        case 0: {
            string0 = OC_NAME(38173 as obj);
            int0 = 117047330;
            break;
        }
        case 1: {
            string0 = OC_NAME(38176 as obj);
            int0 = 117047331;
            break;
        }
        case 2: {
            string0 = OC_NAME(1965 as obj);
            int0 = 117047332;
            IF_SETOBJECT_HIGHRES(1965 as obj, int0);
            break;
        }
        case 3: {
            string0 = OC_NAME(38177 as obj);
            int0 = 117047333;
            break;
        }
        case 4: {
            string0 = OC_NAME(1965 as obj);
            int0 = 117047334;
            IF_SETOBJECT_HIGHRES(1965 as obj, int0);
            break;
        }
        case 5: {
            string0 = OC_NAME(1965 as obj);
            int0 = 117047335;
            IF_SETOBJECT_HIGHRES(1965 as obj, int0);
            break;
        }
        case 6: {
            string0 = OC_NAME(1965 as obj);
            int0 = 117047336;
            IF_SETOBJECT_HIGHRES(1965 as obj, int0);
            break;
        }
        case 7: {
            string0 = OC_NAME(1965 as obj);
            int0 = 117047337;
            IF_SETOBJECT_HIGHRES(1965 as obj, int0);
            break;
        }
        default: {
            string0 = OC_NAME(38171 as obj);
            int0 = 117047338;
            break;
        }
    };
    IF_SETHIDE(false, int0);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, -1), int0);
    return;
}