def num (t):
    if t == 1 :
        return 1
    else :
        return t * num(t-1)

x = int (input("Enter a number to find factorial: "))
print("Factorial of", x, "is", num(x))
     
   