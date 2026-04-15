//
function script13687(string0: string): string {
    switch (varbitplayer_45189) {
        case 3: {
            return `${string0}-5`;
        }
        case 4: {
            return `${string0}-10`;
        }
        case 5: {
            return `${string0}-${inttostring(varplayer_111, 10)}`;
        }
        case 7: {
        }
        default: {
            return `${string0}-1`;
        }
    };
    return `${string0}-All`;
}