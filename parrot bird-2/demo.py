class parrot:
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def sing(self, song):
        return f"{self.name} sings {song}"  
    def dance(self):
        return f"{self.name} is now dancing"
hawk = parrot("hawk",15)
hell = parrot("hell",14)
print(hawk.sing("Happy"))
print(hell.dance())

    

