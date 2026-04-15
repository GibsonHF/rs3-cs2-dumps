//
function script16949(): dbrow {
    switch (varbitplayer_52101) {
        case 0: {
            return 6804 as dbrow;
        }
        case 1: {
            return 6805 as dbrow;
        }
        case 2: {
            return 6806 as dbrow;
        }
        case 3: {
            return 6807 as dbrow;
        }
        case 4: {
            return 6808 as dbrow;
        }
        case 5: {
            return 6809 as dbrow;
        }
        case 6: {
            return 6810 as dbrow;
        }
        case 7: {
            return 6811 as dbrow;
        }
        case 8: {
            return 6812 as dbrow;
        }
    };
    switch (MODULO((varbitplayer_52101 - 9), 6)) {
        case 0: {
            return 6813 as dbrow;
        }
        case 1: {
            return 6814 as dbrow;
        }
        case 2: {
            return 6815 as dbrow;
        }
        case 3: {
            return 6816 as dbrow;
        }
        case 4: {
            return 6817 as dbrow;
        }
        case 5: {
            return 6818 as dbrow;
        }
    };
    return -1 as dbrow;
}