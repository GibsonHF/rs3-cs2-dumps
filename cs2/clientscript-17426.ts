//
function script17426(int0: number): number {
    switch (int0) {
        case 104: {
            return 0;
        }
        case 105: {
            return DB_GETFIELDCOUNT(4555, 413696);
        }
        case 106: {
            return (DB_GETFIELDCOUNT(4555, 413696) + DB_GETFIELDCOUNT(4556, 413696));
        }
        case 107: {
            return ((DB_GETFIELDCOUNT(4555, 413696) + DB_GETFIELDCOUNT(4556, 413696)) + DB_GETFIELDCOUNT(4557, 413696));
        }
        case 108: {
            return (((DB_GETFIELDCOUNT(4555, 413696) + DB_GETFIELDCOUNT(4556, 413696)) + DB_GETFIELDCOUNT(4557, 413696)) + DB_GETFIELDCOUNT(4558, 413696));
        }
    };
    script12478(`Unexpected trh168 category tier: ${inttostring(int0, 10)}`);
    return 0;
}