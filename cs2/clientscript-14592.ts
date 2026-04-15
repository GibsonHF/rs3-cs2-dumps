//
function script14592(int0: dbrow): string {
    var string0 = dbrow_getfield(int0, 352288, 0);
    switch (dbrow_getfield(int0, 352272, 0)) {
        case 1: {
            string0 = `${string0} Dig Site`;
            break;
        }
    };
    return string0;
}