//
function script16504(int0: dbrow, int1: component, int2: int, int3: int): void {
    switch (int0) {
        case 5907: {
            CC_SETONOP(callback(script17023, int2, int3, int0, 5883));
            break;
        }
        case 7535: {
            CC_SETONOP(callback(script17023, int2, int3, int0, 4899));
            break;
        }
        case 6530:
        case 7877:
        case 13477: {
            CC_SETONOP(callback(script17023, int2, int3, int0, 6489));
            break;
        }
        case 6933:
        case 14403:
        case 17237:
        case 17238: {
            CC_SETONOP(callback(script17023, int2, int3, int0, 6916));
            break;
        }
        case 15162:
        case 15163:
        case 15164:
        case 15672:
        case 17379: {
            CC_SETONOP(callback(script17068, int2, int3));
            break;
        }
        case 13327: {
            CC_SETONOP(callback(script17023, int2, int3, int0, 7271));
            break;
        }
        case 12916:
        case 12917: {
            CC_SETONOP(callback(script17023, int2, int3, int0, 12888));
            break;
        }
    };
    CC_SETOP(1, "Preview");
    CC_SETOPCURSOR(1, 46);
    return;
}