//
function script14328(int0: number, int1: number, int2: number): [number, number] {
    if ((script16260() == 0)) {
        switch (varbitplayer_61434) {
            case 40:
            case 45:
            case 30: {
                script1296("You can't do that now.");
                return [int1, int2];
            }
        };
    };
    var int3 = UI_GETCATEGORY(int0);
    var int4 = UI_GETDYNID(int0);
    if ((int3 == 0)) {
        if (((int4 >= 0) && (int4 <= 7))) {
            if ((int4 == int1)) {
                switch (int2) {
                    case 127: {
                        return [int1, 126];
                    }
                    case 126: {
                        return [63, 127];
                    }
                };
                return [int1, 126];
            };
            return [int4, 127];
        };
        if ((int4 == 63)) {
            return [63, 127];
        };
        if ((int4 == 62)) {
            return [62, 127];
        };
        return [63, 127];
    };
    if ((int2 == int4)) {
        return [int1, 127];
    };
    return [int1, int4];
}