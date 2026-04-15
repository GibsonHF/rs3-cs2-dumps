//
function script17994(int0: dbrow): [graphic, graphic, graphic, graphic, graphic, graphic, graphic, graphic] {
    var int1 = 11693 as graphic;
    var int2 = 11695 as graphic;
    var int3 = 11696 as graphic;
    var int4 = 11692 as graphic;
    var int5 = 11685 as graphic;
    var int6 = 11686 as graphic;
    var int7 = 11687 as graphic;
    var int8 = -1 as graphic;
    switch (int0) {
        case 8256: {
            if ((varplayer_11339 == -1 as dbrow)) {
                script12478("Unable to find viewed pass.");
            } else {
                switch (dbrow_getfield(varplayer_11339, 991264, 0)) {
                    case 2: {
                        int1 = 7685 as graphic;
                        int3 = 7686 as graphic;
                        int4 = 7687 as graphic;
                        int5 = 6952 as graphic;
                        int6 = 7618 as graphic;
                        int7 = 7684 as graphic;
                        int8 = 6951 as graphic;
                        break;
                    }
                };
            };
            break;
        }
    };
    return [int1, int2, int3, int4, int5, int6, int7, int8];
}