class computer:
    def __init__(self  ):
        self.__maxprice=900
    def sell(self):
        print("selling price:",self.__maxprice)

    def setMaxPrice(self,price):
        self.__maxprice=price
obj = computer()
obj.sell()

# changing the price 

obj.__maxprice = 1000
obj.sell()


# using setter function to change the price
obj.setMaxPrice(1000)
obj.sell()
           