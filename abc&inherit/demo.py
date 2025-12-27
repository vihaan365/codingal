class mohit:
    def __init__(self,name , id_number):
        self.name = name
        self.id_number = id_number
    def display(self):
        print("Name:",self.name)
        print("ID Number:",self.id_number)  
#child class
class student(mohit):
    def __init__(self,name,id_number,salary, post):
        mohit.__init__(self,name,id_number)
        self.salary = salary
        self.post = post
obj = student("pengin", 2025 , 20000 , "intern")
obj.display()
print("Salary:",obj.salary)
print("Post:",obj.post)# changing the price        