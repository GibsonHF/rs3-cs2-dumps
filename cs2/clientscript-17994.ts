//
function script17994(int0: number): [number, number, number, number, number, number, number, number] {
    var int1 = 11693;
    var int2 = 11695;
    var int3 = 11696;
    var int4 = 11692;
    var int5 = 11685;
    var int6 = 11686;
    var int7 = 11687;
    var int8 = -1;
    switch (int0) {
        case 8256: {
            if ((varplayer_11339 == -1 as dbrow)) {
                script12478("Unable to find viewed pass.");
            } else {
                switch (dbrow_getfield(varplayer_11339, 991264, 0)) {
                    case 2: {
                        int1 = 7685;
                        int3 = 7686;
                        int4 = 7687;
                        int5 = 6952;
                        int6 = 7618;
                        int7 = 7684;
                        int8 = 6951;
                        break;
                    }
                };
            };
            break;
        }
    };
    return [int1, int2, int3, int4, int5, int6, int7, int8];
}