//
function script19100(): void {
    CC_DELETEALL(comp(1147, 4));
    if ((varbitplayer_55928 == 0)) {
        return;
    };
    var int0 = script19067(varbitplayer_55928);
    var int1 = MAX(1, DB_GETFIELDCOUNT(int0, 1187904));
    var int2 = comp(1147, 4);
    var int3 = -1;
    var int4 = 0;
    var int5 = -1 as obj;
    var int6 = 1;
    var int7 = -1 as struct;
    var int8 = 1;
    while ((++int3 < int1)) {
        script14391(int2, int3, 0, 0, 0, 0, 80, 42, 0, 0);
        CC_SETOP(1, "Preview");
        CC_SETOPCURSOR(1, 172);
        CC_SETONOP(callback(script19090, int3));
        script7920(int2, (int3 + 1), int4, 0, int3, 0, 0, 1, 1, 80, 42, 0, 0, 34129);
        int4 = (int4 + 1);
        [int5, int6] = script19077(int0, int3);
        script3537(OC_NAME(int5));
        script9862(int2, (int3 + 1), int4, 0, int3, 0, 0, 1, 1, 36, 34, 0, 0, int5, 1);
        int7 = item_getparam(int5, 4414);
        if (((int7 != -1) && (script6488(int7) == 1))) {
            int4 = (int4 + 1);
            script7920(int2, (int3 + 1), int4, 0, int3, 0, 0, 1, 1, 32, 32, 0, 0, 34132 as graphic);
        } else if ((int8 == 1)) {
            if ((CC_FINDBYCATEGORY(comp(1147, 4), (int3 + 1), 0) == 1)) {
                CC_SETGRAPHIC(34130 as graphic);
            };
            IF_SETTEXT(OC_NAME(int5), comp(1147, 153));
            int8 = 0;
        };
        int4 = 0;
    };
    return;
}