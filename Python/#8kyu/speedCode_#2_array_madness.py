def array_madness(a, b):
    sumA = sum(i**2 for i in a)
    subB = sum(i**3 for i in b)
    return sumA > subB
print(array_madness([4, 5, 6], [1, 2, 3]))