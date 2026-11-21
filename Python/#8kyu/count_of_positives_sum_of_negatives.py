def count_positives_sum_negatives(arr):
    positiveNumber = 0
    negativeNumberSum = 0
    if (len(arr) == 0): return []
    for num in arr:
        if (num != 0 and num > 0):
            positiveNumber += 1
        else:
            negativeNumberSum+= num
    return [positiveNumber, negativeNumberSum]
print(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))