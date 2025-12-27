from abc import ABC, abstractmethod

# Base class (Encapsulation + Polymorphism)
class Polygon(ABC):

    @abstractmethod
    def area(self):
        pass


# Rectangle class
class Rectangle(Polygon):
    def __init__(self, length, breadth):
        self.__length = length      # private variable
        self.__breadth = breadth

    def area(self):
        return self.__length * self.__breadth


# Square class
class Square(Polygon):
    def __init__(self, side):
        self.__side = side          # private variable

    def area(self):
        return self.__side * self.__side


# Triangle class
class Triangle(Polygon):
    def __init__(self, base, height):
        self.__base = base          # private variable
        self.__height = height

    def area(self):
        return 0.5 * self.__base * self.__height


# Main program
rect = Rectangle(int (input("Enter length of rectangle: ")), int(input("Enter breadth of rectangle: ")))
sq = Square(int(input("Enter side of square: ")))
tri = Triangle(int(input("Enter base of triangle: ")), int(input("Enter height of triangle: ")))

# Polymorphism in action
polygons = [rect, sq, tri]

for p in polygons:
    print("Area:", p.area())
