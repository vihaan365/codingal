s = {1,1,1,2,2,3,4,5}
print(s)
s.add(6)
print(s)

s2 = {4,5,4,7,8}
print(s2)

print(s.difference(s2))

print(s.symmetric_difference(s2))

print(s.intersection(s2))

print(s.union(s2))
