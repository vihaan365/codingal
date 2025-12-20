class parrot:
    species = "bird"
    def __init__(self, name, age):
        self.name = name
        self.age = age
hawk = parrot("hawk",15)
hell = parrot("hell",14)

print("hawk is a", hawk.__class__.species)            
print("hell is a", hell.__class__.species)            
print(f"{hawk.name} is {hawk.age} years old.")
print(f"{hell.name} is {hell.age} years old.")