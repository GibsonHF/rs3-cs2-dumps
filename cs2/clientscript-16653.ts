//
function script16653(int0: int): [obj, int] {
    switch (int0) {
        case 1: {
            return [44344 as obj, 1];
        }
        case 2: {
            return [44345 as obj, 1];
        }
        case 3: {
            return [44346 as obj, 1];
        }
        case 4: {
            return [44348 as obj, 1];
        }
        case 5: {
            return [44359 as obj, 1];
        }
        case 6: {
            return [44361 as obj, 1];
        }
        case 7: {
            return [40932 as obj, 500];
        }
        case 8: {
            return [34024 as obj, 1];
        }
        case 9: {
            return [34918 as obj, 3];
        }
        case 10: {
            return [48544 as obj, 3];
        }
        case 11: {
            return [40200 as obj, 1];
        }
        case 12: {
            return [33529 as obj, 1];
        }
    };
    script12478(`Invalid ID received ${inttostring(int0, 10)}, returning a fallback 500 oddment prize`);
    return [40932 as obj, 500];
}