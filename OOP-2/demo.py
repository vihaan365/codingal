class fruit:
    def __init__(self ):
        print("constructor created")
    def __del__(self):
        print("destructor called")
obj=fruit()
print("object is created")
del obj
print("object is deleted")
        
         
       

