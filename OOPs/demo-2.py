class robo:
    proccersor = "intel i7"
    memory = "50gb"
    name = "robo1"
    def intro(self):
        print("my name is ",self.name)

    def spec(self):
        print("my proccersor is ",self.proccersor)
        print("my memory is ",self.memory)    

ob = robo()
ob.intro()
ob.spec()