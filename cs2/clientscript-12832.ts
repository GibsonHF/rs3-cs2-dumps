//
function script12832(int0: int): string {
    if ((MAP_LANG() == 3)) {
        if ((int0 == 1)) {
            return `${inttostring(int0, 10)}º`;
        };
        return inttostring(int0, 10);
    };
    if (((int0 >= 11) && (int0 <= 13))) {
        return `${inttostring(int0, 10)}th`;
    };
    switch (MODULO(int0, 10)) {
        case 1: {
            return `${inttostring(int0, 10)}st`;
        }
        case 2: {
            return `${inttostring(int0, 10)}nd`;
        }
        case 3: {
            return `${inttostring(int0, 10)}rd`;
        }
    };
    return `${inttostring(int0, 10)}th`;
}