#empty tuple
t = ()
print(t)

#integers
t1 = (1, 2, 3, 4, 5)
print(t1)

#mixed datatypes
t2 = (1, "Hello", 3.4 ,)

# nested tuple
t3 = (5, 6, 7, 8 ,[ 9, 10, 11]  ,(  12, 13, 14) )

 #slicing
t4 = ( 'a', 'b', 'c', 'd', 'e'  )
print( t4[0:5])

#accessing elements
print(t4[0])
print(t4[-1])

for i in t4:
    print(i)

print(t3[4][0])
print(t3[5][1])