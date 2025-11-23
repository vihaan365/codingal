def fib(f):
    if f >= 0: 
       return[( f-1 + f-2) ]
    else :
         return { "not a fibonacci" }
    
x = int (input("Enter a number to find Fibonacci series: "))
print("Fibonacci series up to", x, "is", fib(x))
x = int (input("Enter a number to find Fibonacci series: "))
