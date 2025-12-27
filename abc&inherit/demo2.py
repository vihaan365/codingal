class person:
    def __init__(self , fname , lname):
        self.firstname = fname
        self.lastname = lname
    def printname(self):
        print(self.firstname, self.lastname)

#child class
class student(person):
    def __init__(self , fname , lname , year):
        super().__init__(fname , lname)
        self.graduationyear = year 
obj = student("vihaan", "sharma", 2025)
obj.printname() 
print("Graduation Year:", obj.graduationyear)
                   