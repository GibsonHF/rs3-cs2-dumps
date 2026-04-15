//
function script4733(int0: dbrow, int1: int): [obj, int, int, int, int] {
    var int2 = 0;
    switch (int0) {
        case 4555: {
            int2 = (2 + script17426(104));
            break;
        }
        case 4556: {
            int2 = (2 + script17426(105));
            break;
        }
        case 4557: {
            int2 = (2 + script17426(106));
            break;
        }
        case 4558: {
            int2 = (2 + script17426(107));
            break;
        }
        case 4559: {
            int2 = (2 + script17426(108));
            break;
        }
        default: {
            script12478("Unexpected dbrow.");
            break;
        }
    };
    if ((script16159((int1 + int2)) != -1 as obj)) {
        return [script16159((int1 + int2)), script16160((int1 + int2)), script14444((int1 + int2)), 1, (int1 + 1)];
    };
    return [dbrow_getfield(int0, 413697, (int1 + 1)), dbrow_getfield(int0, 413698, (int1 + 1)), dbrow_getfield(int0, 413699, (int1 + 1)), 1, (int1 + 1)];
}