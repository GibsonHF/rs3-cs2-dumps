//
function script12738(): void {
    var string0 = "A wonderful prize!";
    var int0 = comp(-1, 65535);
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
            int0 = comp(1786, 34);  // trh104_overlay:prize_model1
            break;
        }
        case 1: {
            string0 = OC_NAME(38176 as obj);
            int0 = comp(1786, 35);  // trh104_overlay:prize_model2
            break;
        }
        case 2: {
            string0 = OC_NAME(38175 as obj);
            int0 = comp(1786, 36);  // trh104_overlay:prize_model3
            break;
        }
        case 3: {
            string0 = OC_NAME(38177 as obj);
            int0 = comp(1786, 37);  // trh104_overlay:prize_model4
            break;
        }
        case 4: {
            string0 = OC_NAME(38174 as obj);
            int0 = comp(1786, 38);  // trh104_overlay:prize_model5
            break;
        }
        case 5: {
            string0 = OC_NAME(38179 as obj);
            int0 = comp(1786, 39);  // trh104_overlay:prize_model6
            break;
        }
        case 6: {
            string0 = OC_NAME(38180 as obj);
            int0 = comp(1786, 40);  // trh104_overlay:prize_model7
            break;
        }
        case 7: {
            string0 = OC_NAME(38178 as obj);
            int0 = comp(1786, 41);  // trh104_overlay:prize_model8
            break;
        }
        default: {
            string0 = OC_NAME(38171 as obj);
            int0 = comp(1786, 42);  // trh104_overlay:prize_model_default
            break;
        }
    };
    IF_SETHIDE(false, int0);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, -1), int0);
    return;
}