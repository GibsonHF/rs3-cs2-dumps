//
function script15780(): [dbrow, boolean, unknown_int, unknown_int, unknown_int] {
    var int0 = -1 as dbrow;
    var int1 = true;
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    if ((varbitplayer_39917 >= 94)) {
        int0 = 3927 as dbrow;
    } else if ((varbitplayer_39917 >= 80)) {
        int0 = 3926 as dbrow;
    } else if ((varbitplayer_39917 >= 66)) {
        int1 = true;
        int0 = 3925 as dbrow;
    } else if ((varbitplayer_39917 >= 42)) {
        int0 = 3924 as dbrow;
    } else if ((varbitplayer_39917 >= 12)) {
        int0 = 3923 as dbrow;
    } else if ((varbitplayer_39917 >= 10)) {
        int0 = 3922 as dbrow;
    } else {
        int0 = 3921 as dbrow;
    };
    if ((varbitplayer_39917 > 30)) {
        int3 = 1;
    };
    if ((varbitplayer_39917 >= 98)) {
        int4 = 1;
    };
    return [int0, int1, int2, int3, int4];
}