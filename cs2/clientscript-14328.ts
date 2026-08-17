//
function script14328(int0: number, int1: number, int2: number): [number, number] {
    if ((script16260() == 0)) {
        switch (varbitplayer_61434) {
            case 40:
            case 45:
            case 30: {
                script1296("You can't do that now.");
                stack(int1);
                return [int2, 0];
            }
        };
    };
    var int4 = UI_GETCATEGORY(int0);
    var int5 = UI_GETDYNID(int0);
    if ((int4 == 0)) {
        if (((int5 >= 0) && (int5 <= 7))) {
            if ((int5 == int1)) {
                switch (int2) {
                    case 127: {
                        stack(int1);
                        return [126, 0];
                    }
                    case 126: {
                        stack(63);
                        return [127, 0];
                    }
                };
                stack(int1);
                return [126, 0];
            };
            stack(int5);
            return [127, 0];
        };
        if ((int5 == 63)) {
            if ((int3 == 1)) {
                stack(int1);
                return [int2, 0];
            };
            stack(63);
            return [127, 0];
        };
        if ((int5 == 62)) {
            stack(62);
            return [127, 0];
        };
        stack(63);
        return [127, 0];
    };
    if ((int2 == int5)) {
        stack(int1);
        return [127, 0];
    };
    stack(int1);
    return [int5, 0];
}