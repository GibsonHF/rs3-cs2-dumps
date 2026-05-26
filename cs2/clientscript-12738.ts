//
function script12738(): void {
    var string0 = "A wonderful prize!";
    var int0 = comp(-1, 65535);
    IF_SETHIDE(true, comp(1786, 34));
    IF_SETHIDE(true, comp(1786, 35));
    IF_SETHIDE(true, comp(1786, 36));
    IF_SETHIDE(true, comp(1786, 37));
    IF_SETHIDE(true, comp(1786, 38));
    IF_SETHIDE(true, comp(1786, 39));
    IF_SETHIDE(true, comp(1786, 40));
    IF_SETHIDE(true, comp(1786, 41));
    IF_SETHIDE(true, comp(1786, 42));
    switch (varbitplayer_33714) {
        case 0: {
            string0 = OC_NAME(38173 as obj);
            int0 = comp(1786, 34);
            break;
        }
        case 1: {
            string0 = OC_NAME(38176 as obj);
            int0 = comp(1786, 35);
            break;
        }
        case 2: {
            string0 = OC_NAME(38175 as obj);
            int0 = comp(1786, 36);
            break;
        }
        case 3: {
            string0 = OC_NAME(38177 as obj);
            int0 = comp(1786, 37);
            break;
        }
        case 4: {
            string0 = OC_NAME(38174 as obj);
            int0 = comp(1786, 38);
            break;
        }
        case 5: {
            string0 = OC_NAME(38179 as obj);
            int0 = comp(1786, 39);
            break;
        }
        case 6: {
            string0 = OC_NAME(38180 as obj);
            int0 = comp(1786, 40);
            break;
        }
        case 7: {
            string0 = OC_NAME(38178 as obj);
            int0 = comp(1786, 41);
            break;
        }
        default: {
            string0 = OC_NAME(38171 as obj);
            int0 = comp(1786, 42);
            break;
        }
    };
    IF_SETHIDE(false, int0);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, -1), int0);
    return;
}