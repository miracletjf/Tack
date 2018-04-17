function bucketSort(array) {
    var bucket = [], // 正数桶
        negativeBucket = [], // 负数桶
        result = [],
        l = array.length,
        i,
        j,
        k,
        abs;
    // 入桶
    for (i = 0; i < l; i++) {
        if (array[i] < 0) {
            abs = Math.abs(array[i]);
            if (!negativeBucket[abs]) {
                negativeBucket[abs] = [];
            }
            negativeBucket[abs].push(array[i]);
        } else {
            if (!bucket[array[i]]) {
                bucket[array[i]] = [];
            }
            bucket[array[i]].push(array[i]);
        }
    }
    // 出桶
    l = negativeBucket.length;
    for (i = l - 1; i >= 0; i--) {
        if (negativeBucket[i]) {
            k = negativeBucket[i].length;
            for (j = 0; j < k; j++) {
                result.push(negativeBucket[i][j]);
            }
        }
    }
    l = bucket.length;
    for (i = 0; i < l; i++) {
        if (bucket[i]) {
            k = bucket[i].length;
            for (j = 0; j < k; j++) {
                result.push(bucket[i][j]);
            }
        }
    }
    return result;
}