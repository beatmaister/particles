x = [4,7,1,-3,2]
def check(a,b):
    temp = a[0]
    for i in range(a[1],a[-1]):
        if temp + a[i] == 5:
            break
            return True
        else:
            continue